<!-- 设置表单 -->
<template>
  <el-form class="p20" label-position="top" :size="$store.getters.size">
    <el-form-item label="主题">
      <ThemePicker @change="handleThemePickerChange" />
    </el-form-item>
    <el-form-item label="样式尺寸">
      <SizePicker @change="handleSizePickerChange" />
    </el-form-item>
    <el-form-item label="左侧导航栏宽度">
      <SidebarWidth @input="handleSidebarWidthInput" />
    </el-form-item>
    <el-divider></el-divider>
  </el-form>
</template>

<script>
import SizePicker from "@/components/Button/SizePicker";
import ThemePicker from "@/components/Button/ThemePicker";
import SidebarWidth from "@/components/Button/SidebarWidth";
export default {
  name: "FormSetting",
  props: {},
  filters: {},
  components: {
    ThemePicker,
    SizePicker,
    SidebarWidth,
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
  methods: {
    handleThemePickerChange(color) {
      this.$store.dispatch("setting/toggleTheme", color);
    },
    handleSizePickerChange(size) {
      this.$store.dispatch("setting/toggleSize", size);
    },
    handleSidebarWidthInput(px) {
      this.$store.dispatch("setting/toggleWidth", px);
    },
  },
};
</script>