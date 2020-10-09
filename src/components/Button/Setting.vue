<!-- 设置系统界面按钮 -->
<template>
  <div>
    <el-button
      type="warning"
      icon="el-icon-s-tools"
      @click="drawerSwitch = true"
      size="small"
    ></el-button>
    <!-- 设置弹窗 -->
    <el-drawer
      :visible.sync="drawerSwitch"
      title="设置"
      size="20%"
      destroy-on-close
    >
      <SettingForm />
    </el-drawer>
  </div>
</template>

<script>
import SettingForm from "@/components/Form/Setting";
export default {
  name: "SettingButton",
  props: {},
  filters: {},
  components: {
    SettingForm,
  },
  data: () => ({
    drawerSwitch: false,
  }),
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