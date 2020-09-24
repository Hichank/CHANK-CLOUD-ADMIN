<!-- 个人信息菜单 -->
<template>
  <div>
    <el-dropdown size="medium">
      <el-avatar icon="el-icon-user" :src="$store.getters.avatar" class="pointer"></el-avatar>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>{{ $store.getters.username }}</el-dropdown-item>
        <el-dropdown-item @click.native="$router.push({ path: `/` })"
          >首页</el-dropdown-item
        >
        <el-dropdown-item @click.native="$router.push({ path: `/mine` })"
          >个人中心</el-dropdown-item
        >
        <el-dropdown-item @click.native="editPWDSwitch = true"
          >修改密码</el-dropdown-item
        >
        <el-dropdown-item @click.native="drawerSwitch = true"
          >设置</el-dropdown-item
        >
        <el-dropdown-item @click.native="handleLogout" divided
          >注销</el-dropdown-item
        >
      </el-dropdown-menu>
    </el-dropdown>
    <!-- 设置弹窗 -->
    <el-drawer
      :visible.sync="drawerSwitch"
      title="设置"
      size="20%"
      destroy-on-close
    >
      <SettingForm />
    </el-drawer>
    <!-- 修改密码 -->
    <el-dialog
      v-if="editPWDSwitch"
      :visible.sync="editPWDSwitch"
      title="修改密码"
      width="25%"
      :close-on-click-modal="false"
    >
      <EditPwdForm
        :form="form"
        :rules="rules"
        :loading="loading"
        @submit="handleSubmit"
      />
    </el-dialog>
  </div>
</template>

<script>
import SettingForm from "@/components/Form/Setting";
import EditPwdForm from "@/components/Form/EditPwd";
import { USERS_PUT } from "@/api";
export default {
  name: "MineMenu",
  props: {},
  filters: {},
  components: {
    SettingForm,
    EditPwdForm,
  },
  data() {
    var validateComfirmPassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请确认密码"));
      } else if (value !== this.form.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      editPWDSwitch: false,
      drawerSwitch: false,

      loading: false,
      form: {
        password: "",
        comfirmPassword: "",
      },
      rules: {
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        comfirmPassword: [
          {
            required: true,
            validator: validateComfirmPassword,
            trigger: "blur",
          },
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
    // 修改密码
    async handleSubmit() {
      try {
        this.loading = true;
        const { password } = this.form;
        await USERS_PUT(this.$store.getters.id, {
          password,
        });
        this.editPWDSwitch = false;
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    },
    // 登出
    handleLogout() {
      this.$confirm("即将登出此账号, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(async () => {
          try {
            await this.$store.dispatch("auth/logout");
            this.$router.replace({ path: "/login" });
          } catch (error) {
            console.log(error);
          }
        })
        .catch(() => {});
    },
  },
};
</script>