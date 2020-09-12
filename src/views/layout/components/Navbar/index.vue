<!-- 模板顶部导航 -->
<template>
  <div class="p10 dfr-center dfr-between">
    <Breadcrumb />
    <Mine />
  </div>
</template>

<script>
import Mine from "@/components/Menu/Mine";
import Breadcrumb from "@/components/Menu/Breadcrumb";
export default {
  name: "LayoutNavbar",
  props: {},
  filters: {},
  components: {
    Mine,
    Breadcrumb,
  },
  data: () => ({}),
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