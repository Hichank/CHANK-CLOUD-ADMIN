<!-- 账户添加 -->
<template>
  <el-card>
    <div slot="header" class="dfr-center dfr-between">
      <span>账户添加/编辑</span>
    </div>
    <AddOrUpdateAccountSystemFrom />
  </el-card>
</template>

<script>
import { USER_INFO } from "@/api/system";
import AddOrUpdateAccountSystemFrom from "@/components/Form/AddOrUpdateAccountSystem";
export default {
  name: "AddOrUpdateAccountSystem",
  props: {},
  filters: {},
  components: {
    AddOrUpdateAccountSystemFrom,
  },
  data: () => ({}),
  computed: {},
  watch: {},
  created() {
    this.getInfo(this.$route.query.id)
  },
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {},
  methods: {
    async getInfo(id) {
      try {
        const result = await USER_INFO(id);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
