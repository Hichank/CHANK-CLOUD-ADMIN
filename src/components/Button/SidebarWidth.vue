<!-- 左侧导航栏宽度 -->
<template>
  <el-slider v-model="value" :min="220" :max="500" @input="handleInput"></el-slider>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ButtonSidebarWidth",
  props: {},
  filters: {},
  components: {},
  data: () => ({
    value: 0,
  }),
  computed: {
    ...mapGetters(["sidebar"]),
    defaultWidth() {
      return this.$store.getters.sidebar.width;
    },
  },
  watch: {
    defaultWidth: {
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
    handleInput(value) {
      this.$emit("input", value);
    },
  },
};
</script>
