<!-- 权限列表 -->
<template>
  <div style="padding: 20px; background: #fff">
    <CrudTable
      :loading="loading"
      :data="data.data || []"
      :options="options || []"
      :sizes="[10, 20, 30]"
      :current="params.page || 0"
      :size="params.limit || 0"
      :total="data.total || 0"
      @search="handleSearch"
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
import { ROLES_GET, ROLES_DELECT } from "@/api";
export default {
  name: "SystemRolesList",
  props: {},
  filters: {},
  components: {
    CrudTable,
  },
  data: () => ({
    loading: false,
    params: {
      where: {},
      page: 1,
      limit: 10,
    },
    data: {},
    options: [
      { align: "center", prop: "_id", label: "ID" },
      { align: "center", prop: "name", label: "权限名称", search: true },
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
        const { data } = await ROLES_GET({ query: this.params });
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
        path: "/system/roles/update",
      });
    },
    // 编辑
    handleEdit(item) {
      this.$router.push({
        path: `/system/roles/update/${item._id}`,
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
          await ROLES_DELECT(item._id);
          this.getData();
        })
        .catch(() => {});
    },

    // 搜索
    handleSearch(where) {
      this.params.where = where;
      this.getData();
    },
    // 分页页码
    handleCurrentChange(page) {
      this.params.page = page;
      this.getData();
    },
    // 分页数量
    handleSizeChange(limit) {
      this.params.limit = limit;
      this.getData();
    },
  },
};
</script>
