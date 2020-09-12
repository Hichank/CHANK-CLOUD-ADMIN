<!-- 登录页面 -->
<template>
  <div class="login-container">
    <div class="login-body">
      <div class="login-body-logo">
        <i class="el-icon-user"></i>
      </div>
      <LoginForm />
    </div>
  </div>
</template>

<script>
import LoginForm from "@/components/Form/Login";
export default {
  name: "Login",
  props: {},
  filters: {},
  components: {
    LoginForm,
  },
  data: () => ({}),
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {},
  methods: {},
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


