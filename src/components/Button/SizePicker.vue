<!-- 样式尺寸 -->
<template>
  <el-radio-group v-model="value" @change="handleChange">
    <el-radio-button label="default">大</el-radio-button>
    <el-radio-button label="medium">中</el-radio-button>
    <el-radio-button label="small">小</el-radio-button>
    <el-radio-button label="mini">迷你</el-radio-button>
  </el-radio-group>
</template>

<script>
export default {
  name: "ButtonSizePicker",
  props: {},
  filters: {},
  components: {},
  data: () => ({
    value: "",
  }),
  computed: {
    defaultSize() {
      return this.$store.getters.size;
    },
  },
  watch: {
    defaultSize: {
      handler(v) {
        this.value = v;
      },
      immediate: true,
    },
  },
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
    handleChange(val) {
      this.$emit("change", val);
    },
  },
};
</script>