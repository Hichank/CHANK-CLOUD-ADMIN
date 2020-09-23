<!-- 添加/编辑用户 -->
<template>
  <div style="padding:20px;background: #fff;">
    <SystemUsersForm :loading="loading" :form="form" :rules="rules" @submit="handleSubmit" />
  </div>
</template>
<script>
import SystemUsersForm from "@/components/Form/System/Users";
import { USERS_GET_ID, USERS_POST, USERS_PUT } from "@/api";
export default {
  name: "UpdateUsersSystem",
  props: {},
  filters: {},
  components: {
    SystemUsersForm,
  },
  data() {
    var validateComfirmPass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.form.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      loading: false,
      form: {
        username: "",
        password: "",
        comfirmPassword: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        comfirmPassword: [{ validator: validateComfirmPass, trigger: "blur" }],
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
        const { data } = await USERS_GET_ID(id);
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
        const { _id, username, password } = this.form;
        if (_id) {
          // 编辑
          await USERS_PUT(_id, {
            username,
            password,
          });
        } else {
          // 新增
          await USERS_POST({
            username,
            password,
          });
        }
        this.$router.push({
          path: "/system/users/list",
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