<!-- 修改密码表单 -->
<template>
  <el-form :model="form" :rules="rules" :size="$store.getters.size" ref="editPasswordForm">
    <el-form-item prop="oldpassword">
      <el-input
        prefix-icon="el-icon-lock"
        type="password"
        v-model.trim="form.oldpassword"
        autocomplete="off"
        clearable
        show-password
        placeholder="原密码"
      ></el-input>
    </el-form-item>
    <el-form-item prop="newpassword">
      <el-input
        prefix-icon="el-icon-unlock"
        type="password"
        v-model.trim="form.newpassword"
        autocomplete="off"
        clearable
        show-password
        placeholder="新密码"
      ></el-input>
    </el-form-item>
    <el-form-item prop="checkpassword">
      <el-input
        prefix-icon="el-icon-key"
        type="password"
        v-model.trim="form.checkpassword"
        autocomplete="off"
        clearable
        show-password
        placeholder="确认密码"
      ></el-input>
    </el-form-item>
    <div class="text-right">
      <el-button
        :size="$store.getters.size"
        type="primary"
        @click="submitForm('editPasswordForm')"
      >提 交</el-button>
    </div>
  </el-form>
</template>

<script>
export default {
  name: "EditPwd",
  props: {},
  filters: {},
  components: {},
  data() {
    var validatePassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.form.checkpassword !== "") {
          this.$refs.editPasswordForm.validateField("checkpassword");
        }
        callback();
      }
    };
    var validateCheckPassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请确认密码"));
      } else if (value !== this.form.newpassword) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      form: {
        oldpassword: "",
        newpassword: "",
        checkpassword: "",
      },
      rules: {
        oldpassword: [
          { required: true, message: "请输入旧密码", trigger: "blur" },
        ],
        newpassword: [
          { required: true, validator: validatePassword, trigger: "blur" },
        ],
        checkpassword: [
          { required: true, validator: validateCheckPassword, trigger: "blur" },
        ],
      },
    };
  },
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
      this.$refs[formName].validate((valid) => {
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
