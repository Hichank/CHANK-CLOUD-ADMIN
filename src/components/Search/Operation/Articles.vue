<!-- 搜索表单 -->
<template>
  <el-form inline :model="form">
    <el-form-item label="文章标题">
      <el-input v-model.trim="form.title" clearable></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="handleSubmit">查询</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "OperationArticlesSearch",
  props: {},
  filters: {},
  components: {},
  data: () => ({
    form: {
      title: "",
    },
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
    handleSubmit() {
      const where = JSON.parse(JSON.stringify(this.form));
      for (const key in where) {
        if (where[key]) {
          where[key] = { $regex: where[key] };
        } else {
          delete where[key];
        }
      }
      this.$emit("submit", where);
    },
  },
};
</script>