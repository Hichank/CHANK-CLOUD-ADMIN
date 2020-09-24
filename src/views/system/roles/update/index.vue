<!-- 添加/编辑用户 -->
<template>
  <div style="padding: 20px; background: #fff">
    <SystemRolesForm
      :loading="loading"
      :form="form"
      :rules="rules"
      @submit="handleSubmit"
    />
  </div>
</template>
<script>
import SystemRolesForm from "@/components/Form/System/Roles";
import { ROLES_GET_ID, ROLES_POST, ROLES_PUT } from "@/api";
export default {
  name: "UpdateRolesSystem",
  props: {},
  filters: {},
  components: {
    SystemRolesForm,
  },
  data() {
    return {
      loading: false,
      form: {
        name: "",
      },
      rules: {
        name: [{ required: true, message: "请输入权限名", trigger: "blur" }],
      },
    };
  },
  computed: {},
  watch: {},
  created() {
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
        const { _id, name } = this.form;
        if (_id) {
          // 编辑
          await ROLES_PUT(_id, {
            name,
          });
        } else {
          // 新增
          await ROLES_POST({
            name,
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