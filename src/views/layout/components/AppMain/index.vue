<!-- 模板主体区域 -->
<template>
  <div class="logout-main-container">
    <transition name="fade-transform" mode="out-in">
      <router-view :key="$route.path" />
    </transition>
    <el-backtop target=".logout-main-container" :right="50" :bottom="50"></el-backtop>
  </div>
</template>

<script>
export default {
  name: "LayoutMain",
  props: {},
  filters: {},
  components: {},
  data() {
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
  methods: {},
};
</script>

<style lang="scss" scoped>
.logout-main-container {
  background: #f2f2f2;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 10px;
  box-sizing: border-box;
}
</style>