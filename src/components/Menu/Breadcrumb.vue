<!-- 面包屑导航菜单 -->
<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <transition-group name="breadcrumb">
      <template v-for="(item,index) in levelList">
        <template v-if="index !== levelList.length-1">
          <el-breadcrumb-item :key="item.path" :to="item.path">{{ item.meta.title }}</el-breadcrumb-item>
        </template>
        <template v-else>
          <el-breadcrumb-item :key="item.path">{{ item.meta.title }}</el-breadcrumb-item>
        </template>
      </template>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
export default {
  name: "BreadcrumbMenu",
  props: {},
  filters: {},
  components: {},
  data: () => ({ levelList: null }),
  computed: {},
  watch: {
    $route() {
      this.getBreadcrumb();
    },
  },
  created() {
    this.getBreadcrumb();
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
    // 获取当前路由信息
    getBreadcrumb() {
      let matched = this.$route.matched.filter(
        (item) => item.meta && item.meta.title
      );
      const first = matched[0];

      if (!this.isDashboard(first)) {
        matched = [{ path: "/dashboard", meta: { title: "首页" } }].concat(
          matched
        );
      }

      this.levelList = matched.filter(
        (item) => item.meta && item.meta.title && item.meta.breadcrumb !== false
      );
    },
    // 是否首页
    isDashboard(route) {
      const name = route && route.name;
      if (!name) {
        return false;
      }
      return (
        name.trim().toLocaleLowerCase() === "Dashboard".toLocaleLowerCase()
      );
    },
  },
};
</script>