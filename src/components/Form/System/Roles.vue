<!-- 系统管理/用户表单 -->
<template>
  <el-form
    :model="option.model"
    :rules="option.rules"
    v-loading="option.loading"
    ref="SystemRolesForm"
  >
    <el-form-item label="权限名称" prop="name" label-width="80px">
      <el-input v-model.trim="option.model.name" clearable></el-input>
    </el-form-item>
    <el-form-item label="权限路由" prop="routes" label-width="80px">
      <el-tree
        :data="option.options.routes"
        node-key="_id"
        :default-checked-keys="option.model.routes"
        :props="{ label: 'name', children: 'children' }"
        show-checkbox
        default-expand-all
      >
      </el-tree>
    </el-form-item>
    <el-form-item label-width="80px">
      <el-button type="primary" @click="submitForm('SystemRolesForm')"
        >保存</el-button
      >
      <el-button @click="$router.back()">返回</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "SystemRolesForm",
  props: {
    option: {
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