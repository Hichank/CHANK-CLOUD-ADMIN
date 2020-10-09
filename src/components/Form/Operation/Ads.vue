<!-- 系统管理/用户表单 -->
<template>
  <el-form
    :model="option.model"
    :rules="option.rules"
    v-loading="option.loading"
    ref="operationAdsForm"
  >
    <el-form-item label="广告标题" prop="title" label-width="80px">
      <el-input v-model.trim="option.model.title" clearable></el-input>
    </el-form-item>
    <el-form-item label="排序" prop="sort" label-width="80px">
      <el-input-number
        v-model.trim="option.model.sort"
        controls-position="right"
        :min="1"
      ></el-input-number>
    </el-form-item>
    <el-form-item label="广告图" prop="src" label-width="80px">
      <el-upload
        drag
        :action="`${$http.defaults.baseURL}/upload`"
        :show-file-list="false"
        :on-success="(response) => $emit('upload-success', response)"
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      </el-upload>
      <template v-if="option.model.src">
        <el-image
          style="width: 360px; height: 180px"
          :src="option.model.src"
          fit="cover"
          :preview-src-list="[option.model.src]"
        ></el-image>
      </template>
    </el-form-item>

    <el-form-item label-width="80px">
      <el-button type="primary" @click="submitForm('operationAdsForm')"
        >保存</el-button
      >
      <el-button @click="$router.back()">返回</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "OperationAdsForm",
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

<style scoped>
</style>