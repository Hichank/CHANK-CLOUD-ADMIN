<!-- 模板顶部导航子栏 -->
<template>
  <el-menu-item
    v-if="hasOneShowingChild(item.children,item)"
    :index="resolvePath(onlyOneChild.path)"
  >
    <Item
      v-if="onlyOneChild.meta"
      :icon="onlyOneChild.meta && onlyOneChild.meta.icon"
      :title="onlyOneChild.meta && onlyOneChild.meta.title"
    />
  </el-menu-item>

  <el-submenu v-else :index="resolvePath(item.path)" :popper-append-to-body="false">
    <template slot="title">
      <Item
        v-if="item.meta"
        :icon="item.meta && item.meta.icon"
        :title="item.meta && item.meta.title"
      />
    </template>

    <template v-if="item.children && item.children.length > 0">
      <LayoutSidebarItem
        v-for="child in item.children"
        :key="child.path"
        :item="child"
        :base-path="resolvePath(child.path)"
      />
    </template>
  </el-submenu>
</template>

<script>
import path from "path";
import { isExternal } from "@/utils/validate";
import Item from "./Item";

export default {
  name: "LayoutSidebarItem",
  props: {
    item: {
      type: Object,
      required: true,
    },
    basePath: {
      type: String,
      default: "",
    },
  },
  filters: {},
  components: {
    Item,
  },
  data() {
    this.onlyOneChild = null;
    return {};
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
    hasOneShowingChild(children = [], parent) {
      const showingChildren = children.filter((item) => {
        if (item.hidden) {
          return false;
        } else {
          // 临时集（如果只有一个显示子级，将使用该集）
          this.onlyOneChild = item;
          return true;
        }
      });
      // 当只有一个子路由器时，默认情况下会显示该子路由器
      if (showingChildren.length === 1) {
        return true;
      }
      // 如果没有子路由器要显示，请显示父
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ...parent, path: "", noShowingChildren: true };
        return true;
      }
      return false;
    },
    resolvePath(routePath) {
      if (isExternal(routePath)) {
        return routePath;
      }
      if (isExternal(this.basePath)) {
        return this.basePath;
      }
      return path.resolve(this.basePath, routePath);
    },
  },
};
</script>