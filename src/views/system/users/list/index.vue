<!-- 用户列表 -->
<template>
  <div style="padding: 20px; background: #fff">
    <avue-crud
      :option="option"
      :data="data.data"
      :page="page"
      @search-change="searchChange"
      @row-save="rowSave"
      @row-update="rowUpdate"
      @row-del="rowDel"
      @size-change="sizeChange"
      @current-change="currentChange"
    ></avue-crud>
  </div>
</template>

<script>
import { USERS_GET, USERS_DELECT, USERS_PUT, USERS_POST } from "@/api";
export default {
  name: "SystemUsersList",
  props: {},
  filters: {},
  components: {},
  data: () => ({
    query: {
      where: {},
      populate: { path: "roles" },
      page: 1,
      limit: 1,
    },
    data: {},
    option: {
      border: true,
      searchMenuSpan: 3,
      column: [
        { align: "center", prop: "_id", label: "ID", row: true },
        {
          align: "center",
          prop: "username",
          label: "用户名",
          search: true,
          rules: [
            {
              required: true,
              message: "请输入用户名",
              trigger: "blur",
            },
          ],
          regex: true,
          row: true,
        },
        { align: "center", prop: "roles", label: "权限", row: true },
        {
          align: "center",
          prop: "avatar",
          label: "用户头像",
          type: "upload",
          listType: "picture-img",
          span: 24,
          action: "",
        },
        { align: "center", prop: "createdAt", label: "创建时间" },
        { align: "center", prop: "updatedAt", label: "更新时间" },
      ],
    },
  }),
  computed: {
    page() {
      return {
        total: this.data.total,
        pageSizes: [1, 2, 3, 4, 5],
        pageSize: this.query.limit,
        currentPage: this.query.page,
      };
    },
  },
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
        const { data } = await USERS_GET({ query: this.query });
        this.data = data;
      } catch (error) {
        this.data = {};
        console.log(error);
      } finally {
        this.loading = false;
      }
    },

    // 新增
    async rowSave(form, done, loading) {
      try {
        const { username, password, roles, avatar } = form;
        // 新增
        await USERS_POST({
          username,
          password,
          roles,
          avatar,
        });
      } catch (error) {
        console.log(error);
      } finally {
        loading();
        done(form);
      }
    },
    // 编辑
    async rowUpdate(form, index, done, loading) {
      try {
        const { _id, username, password, roles, avatar } = form;
        await USERS_PUT(_id, {
          username,
          password,
          roles,
          avatar,
        });
        // 重新加载用户信息/刷新路由
        await this.$store.dispatch("auth/changeRoles");
      } catch (error) {
        console.log(error);
      } finally {
        loading();
        done(form);
      }
    },
    // 删除
    rowDel(form, index) {
      console.log(form, index);
      this.$confirm(`此操作将永久删除该数据${index}, 是否继续?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(async () => {
          await USERS_DELECT(form._id);
          this.getData();
        })
        .catch(() => {});
    },

    //搜索
    searchChange(params, done) {
      this.option.column
        .filter((h) => h.regex)
        .forEach((h) => {
          if (params[h.prop]) {
            params[h.prop] = {
              $regex: params[h.prop],
            };
          }
        });
      this.query.where = params;
      this.getData();
      done();
    },
    // 分页页码
    currentChange(page) {
      this.query.page = page;
      this.getData();
    },
    // 分页数量
    sizeChange(limit) {
      this.query.limit = limit;
      this.getData();
    },
  },
};
</script>
