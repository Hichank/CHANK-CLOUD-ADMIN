<!-- 个人信息菜单 -->
<template>
  <el-dropdown size="medium" placement="right-end">
    <el-row
      class="p-10 cursor-pointer"
      type="flex"
      justify="center"
      align="middle"
    >
      <el-avatar icon="el-icon-user" :src="$store.getters.avatar"></el-avatar>
      <div class="m-l-10" v-if="sidebar.opened">
        {{ $store.getters.username }}
      </div>
    </el-row>

    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item v-if="!sidebar.opened">{{
        $store.getters.username
      }}</el-dropdown-item>
      <el-dropdown-item @click.native="$router.push({ path: `/` })"
        >首页</el-dropdown-item
      >
      <el-dropdown-item @click.native="$router.push({ path: `/mine` })"
        >个人中心</el-dropdown-item
      >
      <el-dropdown-item
        @click.native="
          $router.push({
            path: `/system/users/update/${$store.getters.id}`,
          })
        "
        >修改密码</el-dropdown-item
      >
      <el-dropdown-item @click.native="handleLogout" divided
        >注销</el-dropdown-item
      >
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "MineMenu",
  props: {},
  filters: {},
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["sidebar"]),
  },
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