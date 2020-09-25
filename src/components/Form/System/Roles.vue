<!-- 系统管理/用户表单 -->
<template>
  <el-form :model="form" :rules="rules" ref="SystemRolesForm">
    <el-form-item label="权限名称" prop="name" label-width="80px">
      <el-input v-model.trim="form.name" clearable></el-input>
    </el-form-item>
    <el-form-item label="权限路由" prop="routes" label-width="80px">
      <el-select
        v-model="form.routes"
        multiple
        placeholder="请选择"
        style="width: 100%"
        clearable
      >
        <el-option
          v-for="item in options.routes || []"
          :key="item._id"
          :label="item.name"
          :value="item._id"
        >
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label-width="80px">
      <el-button @click="$router.back()">返回</el-button>
      <el-button
        :loading="loading"
        type="primary"
        @click="submitForm('SystemRolesForm')"
        >保存</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "SystemRolesForm",
  props: {
    loading: {
      type: Boolean,
      required: true,
    },
    options: {
      type: Object,
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