<!-- 系统管理/用户表单 -->
<template>
  <el-form
    :model="option.model"
    :rules="option.rules"
    v-loading="option.loading"
    ref="operationArticlesForm"
  >
    <el-form-item label="文章标题" prop="title" label-width="100px">
      <el-input
        v-model.trim="option.model.title"
        maxlength="20"
        show-word-limit
        clearable
      ></el-input>
    </el-form-item>

    <el-form-item label="文章副标题" prop="subtitle" label-width="100px">
      <el-input
        type="textarea"
        :rows="2"
        v-model.trim="option.model.subtitle"
        maxlength="120"
        show-word-limit
      >
      </el-input>
    </el-form-item>

    <el-form-item label="排序" prop="sort" label-width="100px">
      <el-input-number
        v-model.trim="option.model.sort"
        controls-position="right"
        :min="1"
      ></el-input-number>
    </el-form-item>

    <el-form-item label="文章内容" prop="content" label-width="100px">
      <Tinymce
        v-model="option.model.content"
        uploadUrl="/upload"
        :uploadData="{}"
      />
    </el-form-item>

    <el-form-item label-width="80px">
      <el-button type="primary" @click="submitForm('operationArticlesForm')"
        >保存</el-button
      >
      <el-button @click="$router.back()">返回</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import Tinymce from "@/components/Tinymce";
export default {
  name: "OperationArticlesForm",
  props: {
    option: {
      type: Object,
      required: true,
    },
  },
  filters: {},
  components: {
    Tinymce,
  },
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