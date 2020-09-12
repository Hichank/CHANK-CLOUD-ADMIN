<!-- 个人信息菜单 -->
<template>
  <div>
    <el-dropdown size="medium">
      <el-avatar icon="el-icon-user" class="pointer"></el-avatar>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>{{$store.getters.username}}</el-dropdown-item>
        <el-dropdown-item @click.native="$router.push({path: `/`})">首页</el-dropdown-item>
        <el-dropdown-item @click.native="$router.push({path: `/mine`})">个人中心</el-dropdown-item>
        <el-dropdown-item @click.native="editPWDSwitch=true">修改密码</el-dropdown-item>
        <el-dropdown-item @click.native="drawerSwitch = true">设置</el-dropdown-item>
        <el-dropdown-item @click.native="handleLogout" divided>注销</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <!-- 设置弹窗 -->
    <el-drawer :visible.sync="drawerSwitch" title="设置" size="20%" destroy-on-close>
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
      <EditPwdForm />
    </el-dialog>
  </div>
</template>

<script>
import SettingForm from "@/components/Form/Setting";
import EditPwdForm from "@/components/Form/EditPwd";
export default {
  name: "MenuMine",
  props: {},
  filters: {},
  components: {
    SettingForm,
    EditPwdForm,
  },
  data: () => ({
    editPWDSwitch: false,
    drawerSwitch: false,
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
    // 登出
    handleLogout() {
      this.$confirm("即将登出此账号, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(async () => {
          try {
            await this.$store.dispatch("user/logout");
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