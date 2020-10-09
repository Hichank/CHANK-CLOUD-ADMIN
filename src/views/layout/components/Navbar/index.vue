<!-- 模板顶部导航 -->
<template>
  <div class="p-10 display-flex align-items-center">
    <div class="flex-1 display-flex align-items-center">
      <HamburgerButton class="m-r-10"/>
      <Breadcrumb class="m-r-10"/>
    </div>
    <div class="flex-1 display-flex align-items-center justify-content-flex-end">
      <SettingButton />
    </div>
  </div>
</template>

<script>
import Breadcrumb from "@/components/Menu/Breadcrumb";
import HamburgerButton from "@/components/Button/Hamburger";
import SettingButton from "@/components/Button/Setting";

export default {
  name: "LayoutNavbar",
  props: {},
  filters: {},
  components: {
    Breadcrumb,
    HamburgerButton,
    SettingButton,
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