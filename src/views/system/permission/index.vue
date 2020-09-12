<!-- 系统管理 -->
<template>
  <router-view :key="key" />
</template>

<script>
export default {
  name: "PermissionSystem",
  props: {},
  filters: {},
  components: {},
  data() {
    return {};
  },
  computed: {
     key() {
      return this.$route.path;
    }
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
</style>