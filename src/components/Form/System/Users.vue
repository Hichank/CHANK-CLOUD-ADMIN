<!-- 系统管理/用户表单 -->
<template>
  <el-form :model="form" :rules="rules" ref="SystemUsersForm">
    <el-form-item label="用户名" prop="username" label-width="80px">
      <el-input v-model.trim="form.username" clearable></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password" label-width="80px">
      <el-input
        type="password"
        v-model.trim="form.password"
        show-password
        autocomplete="off"
        clearable
      ></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="comfirmPassword" label-width="80px">
      <el-input
        type="password"
        v-model.trim="form.comfirmPassword"
        show-password
        autocomplete="off"
        clearable
      ></el-input>
    </el-form-item>
    <el-form-item label-width="80px">
      <el-button :loading="loading" type="primary" @click="submitForm('SystemUsersForm')">保存</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "SystemUsersForm",
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