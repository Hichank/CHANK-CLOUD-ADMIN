<!-- 系统管理/用户表单 -->
<template>
  <el-form :model="form" :rules="rules" ref="SystemUsersForm">
    <el-form-item label="头像" prop="avatar" label-width="80px">
      <el-upload
        class="avatar-uploader"
        :action="`${$http.defaults.baseURL}/upload`"
        :show-file-list="false"
        :on-success="(response) => $emit('upload-success', response)"
      >
        <img v-if="form.avatar" :src="form.avatar" class="avatar" />
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
    </el-form-item>
    <el-form-item label="用户名" prop="username" label-width="80px">
      <el-input v-model.trim="form.username" clearable></el-input>
    </el-form-item>
    <el-form-item label="权限" prop="roles" label-width="80px">
      <el-select
        v-model="form.roles"
        multiple
        placeholder="请选择"
        style="width: 100%"
        clearable
      >
        <el-option
          v-for="item in options.roles || []"
          :key="item._id"
          :label="item.name"
          :value="item._id"
        >
        </el-option>
      </el-select>
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
      <el-button @click="$router.back()">返回</el-button>
      <el-button
        :loading="loading"
        type="primary"
        @click="submitForm('SystemUsersForm')"
        >保存</el-button
      >
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
    options: {
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
.avatar-uploader >>> .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader >>> .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 120px;
  height: 120px;
  line-height: 120px;
  text-align: center;
}
.avatar {
  width: 120px;
  height: 120px;
  display: block;
}
</style>