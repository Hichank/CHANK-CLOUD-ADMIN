<!-- 账户添加/编辑 -->
<template>
  <el-form
    style="width: 600px;"
    :model="form"
    :rules="rules"
    ref="addOrUpdateAccountSystemForm"
    label-width="80px"
    :size="$store.getters.size"
  >
    <el-form-item label="姓名" prop="name">
      <el-input v-model="form.name" clearable></el-input>
    </el-form-item>
    <el-form-item label="年龄" prop="age">
      <el-input-number class="w100" v-model="form.age" controls-position="right" :min="1"></el-input-number>
    </el-form-item>
    <el-form-item label="邮箱" prop="email">
      <el-input v-model="form.email" clearable></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input type="password" v-model="form.password" show-password clearable></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="confirmPassword">
      <el-input type="password" v-model="form.confirmPassword" show-password clearable></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="success" @click="submitForm('addOrUpdateAccountSystemForm')">创建用户</el-button>
      <el-button type="primary" @click="$router.push(`/system/account/list`)">返回</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "FormAddOrUpdateAccountSystem",
  props: {},
  filters: {},
  components: {},
  data: () => ({
    form: {
      name: "",
      age: 0,
      email: "",
      password: "",
      confirmPassword: "",
    },
    rules: {},
  }),
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
          console.log(this.form);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>