<!-- 添加/编辑用户 -->
<template>
  <div style="padding: 20px; background: #fff">
    <SystemUsersForm
      :loading="loading"
      :options="options"
      :form="form"
      :rules="rules"
      @upload-success="(response) => (form.avatar = response.url || '')"
      @submit="handleSubmit"
    />
  </div>
</template>
<script>
import SystemUsersForm from "@/components/Form/System/Users";
import { ROLES_GET, USERS_GET_ID, USERS_POST, USERS_PUT } from "@/api";
export default {
  name: "UpdateUsersSystem",
  props: {},
  filters: {},
  components: {
    SystemUsersForm,
  },
  data() {
    var validateComfirmPass = (rule, value, callback) => {
      if (this.form.password && value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.form.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      loading: false,
      options: {
        roles: [],
      },
      form: {
        username: "",
        password: "",
        avatar: "",
        roles: [],
        comfirmPassword: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        avatar: [
          { required: true, message: "请上传用户头像", trigger: "blur" },
        ],
        roles: [{ required: true, message: "请选择权限", trigger: "blur" }],
        password: [{ required: false, message: "请输入密码", trigger: "blur" }],
        comfirmPassword: [{ validator: validateComfirmPass, trigger: "blur" }],
      },
    };
  },
  computed: {},
  watch: {},
  created() {
    this.getOptions([ROLES_GET()]);

    if (this.$route.params.id) {
      this.getInfo(this.$route.params.id);
    }
  },
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {},
  methods: {
    // 获取选项数据
    getOptions(PromiseArray) {
      this.loading = true;
      Promise.all(PromiseArray)
        .then((response) => {
          this.options.roles = (response[0] && response[0].data.data) || [];
          this.loading = false;
        })
        .catch((error) => {
          this.loading = false;
          console.log(error);
        });
    },
    // 获取详情
    async getInfo(id) {
      try {
        this.loading = true;
        const { data } = await USERS_GET_ID(id);
        this.form = data;
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    },
    // 表单提交
    async handleSubmit() {
      try {
        this.loading = true;
        const { _id, username, password, roles, avatar } = this.form;
        if (_id) {
          // 编辑
          await USERS_PUT(_id, {
            username,
            password,
            roles,
            avatar,
          });
          if (_id === this.$store.getters.id) {
            this.$store.dispatch("auth/user");
          }
        } else {
          // 新增
          await USERS_POST({
            username,
            password,
            roles,
            avatar,
          });
        }
        this.$router.push({
          path: "/system/users/list",
        });
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>