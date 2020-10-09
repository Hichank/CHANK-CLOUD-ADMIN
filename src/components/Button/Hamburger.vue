<!-- 收缩左侧导航栏按钮 -->
<template>
  <el-button :icon="icon" circle @click="handleToggleSidebar" size="medium"></el-button>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "HamburgerButton",
  props: {},
  filters: {},
  components: {},
  data: () => ({}),
  computed: {
    ...mapGetters(["sidebar"]),
    icon() {
      return this.sidebar.opened ? `el-icon-s-fold` : `el-icon-s-unfold`;
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
  methods: {
    async handleToggleSidebar() {
      await this.$store.dispatch("setting/toggleSidebar");
    },
  },
};
</script>