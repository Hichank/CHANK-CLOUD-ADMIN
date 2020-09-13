<!-- 账户列表 -->
<template>
  <el-card>
    <div slot="header" class="dfr-center dfr-between">
      <span>账户管理</span>
      <el-button type="primary" @click="$router.push(`/system/account/addOrUpdate`)">创建用户</el-button>
    </div>
    <TableAccount :data="data.data || []" />
  </el-card>
</template>

<script>
import { USER_LIST } from "@/api/system";
import TableAccount from "@/components/Table/Account";
export default {
  name: "ListAccountSystem",
  props: {},
  filters: {},
  components: {
    TableAccount,
  },
  data: () => ({
    data: {},
  }),
  computed: {},
  watch: {},
  created() {
    this.getList();
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
    async getList() {
      try {
        this.data = await USER_LIST();
      } catch (error) {
        this.data = {};
        console.log(error);
      }
    },
  },
};
</script>
