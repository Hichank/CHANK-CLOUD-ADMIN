<!-- 登录表单 -->
<template>
  <el-form :model="form" :rules="rules" ref="LoginForm" size="medium">
    <el-form-item prop="username">
      <el-input
        prefix-icon="el-icon-user-solid"
        v-model.trim="form.username"
        placeholder="用户名"
        clearable
      ></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input
        type="password"
        prefix-icon="el-icon-lock"
        v-model.trim="form.password"
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
            v-model.trim="form.code"
            placeholder="验证码"
            autocomplete="off"
            @keyup.enter.native="submitForm('LoginForm')"
            clearable
          ></el-input>
        </div>
        <canvas
          class="ml5 br4 pointer"
          id="myCanvas"
          width="120"
          height="40"
          @click="$emit('code-change')"
        ></canvas>
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
export default {
  name: "LoginForm",
  props: {
    loading: {
      type: Boolean,
      required: true,
    },
    form: {
      type: Object,
      required: true,
    },
    rules: {
      type: Object,
      required: true,
    },
  },
  filters: {},
  components: {},
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
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          this.$emit("submit");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>
