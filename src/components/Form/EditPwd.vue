<!-- 修改密码表单 -->
<template>
  <el-form
    :model="form"
    :rules="rules"
    :size="$store.getters.size"
    ref="editPwdForm"
  >
    <el-form-item prop="password">
      <el-input
        prefix-icon="el-icon-unlock"
        type="password"
        v-model.trim="form.password"
        autocomplete="off"
        clearable
        show-password
        placeholder="新密码"
      ></el-input>
    </el-form-item>
    <el-form-item prop="comfirmPassword">
      <el-input
        prefix-icon="el-icon-key"
        type="password"
        v-model.trim="form.comfirmPassword"
        autocomplete="off"
        clearable
        show-password
        placeholder="确认密码"
      ></el-input>
    </el-form-item>
    <div class="text-right">
      <el-button
        :size="$store.getters.size"
        :loading="loading"
        type="primary"
        @click="submitForm('editPwdForm')"
        >提 交</el-button
      >
    </div>
  </el-form>
</template>

<script>
export default {
  name: "EditPwdForm",
  props: {
    form: {
      type: Object,
      required: true,
    },
    rules: {
      type: Object,
      required: true,
    },
    loading: {
      type: Boolean,
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
      this.$refs[formName].validate((valid) => {
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
