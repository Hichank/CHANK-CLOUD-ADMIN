<!-- 收缩左侧导航栏按钮 -->
<template>
  <div class="p20 pointer dfr-center-all" @click="handleToggleSidebar">
    <i :class="icon"></i>
  </div>
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
      return this.sidebar.opened ? `el-icon-arrow-left` : `el-icon-arrow-right`;
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