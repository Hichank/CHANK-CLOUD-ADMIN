<!-- 默认布局 -->
<template>
  <div class="layout-container">
    <Sidebar style="z-index: 999;"/>
    <div class="layout-main-container" :style="style">
      <Navbar />
      <AppMain />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { AppMain, Navbar, Sidebar } from "./components";
export default {
  name: "Layout",
  props: {},
  filters: {},
  components: { AppMain, Navbar, Sidebar },
  data: () => ({}),
  computed: {
    ...mapGetters(["permission_routes", "sidebar"]),
    style() {
      if (this.sidebar.opened) {
        return { paddingLeft: `${this.sidebar.width}px` };
      } else {
        return { paddingLeft: `${65}px` };
      }
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
.layout-container {
  width: 100vw;
  height: 100vh;
  .layout-main-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
  }
}
</style>