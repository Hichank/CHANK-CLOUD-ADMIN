<!-- 账户表格 -->
<template>
  <el-table stripe border :data="data">
    <el-table-column align="center" label="姓名" prop="name"></el-table-column>
    <el-table-column align="center" label="年龄" prop="age"></el-table-column>
    <el-table-column align="center" label="邮箱" prop="email"></el-table-column>
    <el-table-column align="center" label="创建时间" prop="createdAt"></el-table-column>
    <el-table-column align="center" label="更新时间" prop="updatedAt"></el-table-column>
    <el-table-column align="center" label="操作">
      <template slot-scope="scope">
        <el-button size="mini" type="success" @click="handleEdit(scope.row)">编辑</el-button>
        <el-button size="mini" type="danger" @click="handleDel(scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "AccountTable",
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  filters: {},
  components: {},
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
    // 编辑
    handleEdit(item) {
      this.$router.push({
        path: `/system/account/addOrUpdate`,
        query: { id: item._id },
      });
    },
    // 删除
    handleDel(item) {
      console.log(item);
    },
  },
};
</script>