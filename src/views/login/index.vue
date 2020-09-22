<!-- 登录页面 -->
<template>
  <div class="login-container">
    <div class="login-body">
      <div class="login-body-logo">
        <i class="el-icon-user"></i>
      </div>
      <LoginForm
        :loading="loading"
        :form="form"
        :rules="rules"
        @code-change="handleCodeChange"
        @submit="handleFormSubmit"
      />
    </div>
  </div>
</template>

<script>
import { createCode } from "@/utils";
import LoginForm from "@/components/Form/Login";
export default {
  name: "Login",
  props: {},
  filters: {},
  components: {
    LoginForm,
  },
  data() {
    var validateCode = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("验证码不能为空"));
      } else if (value.toUpperCase() !== this.code.toUpperCase()) {
        return callback(new Error("验证码错误"));
      } else {
        callback();
      }
    };
    return {
      loading: false,
      form: {
        username: "",
        password: "",
        code: "",
        remember: false,
      },
      rules: {
        username: [{ required: true, message: "请输入邮箱", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        code: [{ validator: validateCode, trigger: "blur" }],
      },
      code: "",
    };
  },
  computed: {},
  watch: {},
  created() {
    // 判断是否有记住的账号密码
    const { username, password, remember } = this.$store.getters.remember;
    if (username && password && remember) {
      this.form = {
        ...this.form,
        username,
        password,
        remember,
      };
    }
  },
  mounted() {
    this.code = createCode("myCanvas");
  },
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {},
  methods: {
    // 重置验证码
    handleCodeChange() {
      this.code = createCode("myCanvas");
    },

    async handleFormSubmit() {
      try {
        this.loading = true;
        await this.$store.dispatch("auth/login", this.form);
        this.$router.push({
          path: "/",
        });
      } catch (error) {
        console.log(error);
      } finally {
        this.form.code = "";
        this.code = createCode("myCanvas");
        this.loading = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.login-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f2f2f2;

  .login-body {
    width: 400px;
    background: #fff;
    border-radius: 10px;
    padding: 60px 20px 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 999;
    .login-body-logo {
      width: 80px;
      height: 80px;
      position: absolute;
      top: -40px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 999;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 32px;
      border-radius: 50%;
      border: 10px solid #f2f2f2;
      background: #fff;
      color: #cccccc;
      padding: 20px;
      box-sizing: border-box;
    }
  }
}
</style>


