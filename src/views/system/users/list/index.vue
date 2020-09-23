<!-- 用户列表 -->
<template>
  <div style="padding:20px;background: #fff;">
    <CrudTable
      :loading="loading"
      :data="data.data || []"
      :options="options || []"
      :current="data.page || 0"
      :size="data.lastPage || 0"
      :total="data.total || 0"
      @add="handleAdd"
      @edit="handleEdit"
      @remove="handleRemove"
      @current-change="handleCurrentChange"
      @size-change="handleSizeChange"
    />
  </div>
</template>

<script>
import CrudTable from "@/components/Table/Crud";
import { USERS_GET, USERS_DELECT } from "@/api";
export default {
  name: "ListUsersSystem",
  props: {},
  filters: {},
  components: {
    CrudTable,
  },
  data: () => ({
    loading: false,
    data: {},
    options: [
      { align: "center", prop: "username", label: "用户名" },
      { align: "center", prop: "createdAt", label: "创建时间" },
      { align: "center", prop: "updatedAt", label: "更新时间" },
    ],
  }),
  computed: {},
  watch: {},
  created() {
    this.getData();
  },
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {},
  methods: {
    // 获取数据
    async getData() {
      try {
        this.loading = true;
        const { data } = await USERS_GET();
        this.data = data;
      } catch (error) {
        this.data = {};
        console.log(error);
      } finally {
        this.loading = false;
      }
    },
    // 新增
    handleAdd() {
      this.$router.push({
        name: "AddUsersSystem",
      });
    },
    // 编辑
    handleEdit(item) {
      this.$router.push({
        name: "EditUsersSystem",
        params: {
          id: item._id,
        },
      });
    },
    // 删除
    handleRemove(item) {
      this.$confirm("此操作将永久删除该数据, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(async () => {
          await USERS_DELECT(item._id);
          this.getData();
        })
        .catch(() => {});
    },

    // 分页页码
    handleCurrentChange(current) {
      console.log(current);
      this.getData();
    },
    // 分页数量
    handleSizeChange(size) {
      console.log(size);
      this.getData();
    },
  },
};
</script>
