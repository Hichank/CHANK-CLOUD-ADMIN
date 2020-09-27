<!-- 添加/编辑用户 -->
<template>
  <div style="padding: 20px; background: #fff">
    <SystemRolesForm :option="option" @submit="handleSubmit" />
  </div>
</template>
<script>
import SystemRolesForm from "@/components/Form/System/Roles";
import { ROLES_GET_ID, ROLES_POST, ROLES_PUT, ROUTES_TREE } from "@/api";
export default {
  name: "SystemRolesUpdate",
  props: {},
  filters: {},
  components: {
    SystemRolesForm,
  },
  data() {
    return {
      loading: false,
      options: {
        routes: [],
      },
      form: {
        name: "",
      },
      rules: {
        name: [{ required: true, message: "请输入权限名", trigger: "blur" }],
      },
    };
  },
  computed: {
    option() {
      return {
        loading: this.loading,
        model: this.form,
        rules: this.rules,
        options: this.options,
      };
    },
  },
  watch: {},
  created() {
    this.getOptions([ROUTES_TREE()]);
    if (this.$route.params.id) {
      this.getInfo(this.$route.params.id);
    }
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
    // 获取选项数据
    getOptions(PromiseArray) {
      this.loading = true;
      Promise.all(PromiseArray)
        .then((response) => {
          this.options.routes = (response[0] && response[0].data) || [];
          this.loading = false;
        })
        .catch((error) => {
          this.loading = false;
          console.log(error);
        });
    },
    // 获取详情
    async getInfo(id) {
      try {
        this.loading = true;
        const { data } = await ROLES_GET_ID(id);
        this.form = data;
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    },
    // 表单提交
    async handleSubmit() {
      try {
        this.loading = true;
        const { _id, name, routes } = this.form;
        if (_id) {
          // 编辑
          await ROLES_PUT(_id, {
            name,
            routes,
          });
          // 重新加载用户信息/刷新路由
          await this.$store.dispatch("auth/changeRoles");
        } else {
          // 新增
          await ROLES_POST({
            name,
            routes,
          });
        }
        this.$router.push({
          path: "/system/roles/list",
        });
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>