<!-- 模板顶部导航 -->
<template>
  <div class="layout-sidebar-container" :style="style">
    <LayoutSidebarLogo />
    <div class="layout-sidebar-menu">
      <el-menu
        v-if="routes && routes.length > 0"
        :default-active="defaultActive"
        :collapse="collapse"
        :collapse-transition="false"
        :unique-opened="false"
        mode="vertical"
        router
      >
        <LayoutSidebarItem
          v-for="route in routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        />
      </el-menu>
    </div>
    <Mine />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import LayoutSidebarItem from "./SidebarItem";
import LayoutSidebarLogo from "./logo";
import Mine from "@/components/Menu/Mine";

export default {
  name: "LayoutSidebar",
  props: {},
  filters: {},
  components: {
    LayoutSidebarLogo,
    LayoutSidebarItem,
    Mine,
  },
  data: () => ({}),
  computed: {
    ...mapGetters(["permission_routes", "sidebar"]),
    routes() {
      return this.permission_routes.filter((h) => !h.hidden);
    },
    defaultActive() {
      return this.$route.path;
    },
    collapse() {
      return !this.sidebar.opened;
    },
    style() {
      return this.sidebar.opened
        ? { width: `${this.sidebar.width}px` }
        : { width: `${65}px` };
    },
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
  methods: {},
};
</script>

<style lang="scss" scoped>
.layout-sidebar-container {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  border-right: 1px solid #eee;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  .layout-sidebar-menu {
    box-sizing: border-box;
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    .el-menu {
      border: none;
      &:not(.el-menu--collapse) {
        width: 100%;
      }
    }
  }
}
</style>