<!-- 登录表单 -->
<template>
  <el-form :model="form" :rules="rules" ref="LoginForm" size="medium">
    <el-form-item prop="email">
      <el-input prefix-icon="el-icon-user-solid" v-model="form.email" placeholder="邮箱" clearable></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input
        type="password"
        prefix-icon="el-icon-lock"
        v-model="form.password"
        placeholder="密码"
        show-password
        @keyup.enter.native="submitForm('LoginForm')"
        autocomplete="off"
        clearable
      ></el-input>
    </el-form-item>
    <el-form-item prop="code">
      <div class="dfr-center">
        <div class="flex-1">
          <el-input
            prefix-icon="el-icon-key"
            v-model="form.code"
            placeholder="验证码"
            autocomplete="off"
            @keyup.enter.native="submitForm('LoginForm')"
            clearable
          ></el-input>
        </div>
        <canvas class="ml5 br4 pointer" id="myCanvas" width="120" height="40" @click="changeCode"></canvas>
      </div>
    </el-form-item>
    <el-form-item style="margin: 0;">
      <div class="dfr-center">
        <el-checkbox v-model="form.remember" border>记住密码</el-checkbox>
        <div class="flex-1 ml5">
          <el-button
            class="w100"
            :loading="loading"
            type="primary"
            @click="submitForm('LoginForm')"
          >登录</el-button>
        </div>
      </div>
    </el-form-item>
  </el-form>
</template>

<script>
import { createCode } from "@/utils";
export default {
  name: "FormLogin",
  props: {},
  filters: {},
  components: {},
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
        email: "",
        password: "",
        code: "",
        remember: false,
      },
      rules: {
        email: [{ required: true, message: "请输入邮箱", trigger: "blur" }],
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
    const { email, password, remember } = this.$store.getters.history;
    if (email && password && remember) {
      this.form = {
        ...this.form,
        email,
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
    changeCode() {
      this.code = createCode("myCanvas");
    },
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          this.loading = true;
          try {
            await this.$store.dispatch("user/login", this.form);
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
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>
