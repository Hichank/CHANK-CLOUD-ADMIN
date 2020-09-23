<!-- 增删改查表格 -->
<template>
  <el-row>
    <el-row type="flex">
      <el-button type="primary" @click="$emit('add')">新增</el-button>
    </el-row>
    <el-table stripe border :data="data" v-loading="loading" style="margin: 10px 0;">
      <template v-for="(option, index) in options">
        <el-table-column v-bind="option" :key="index"></el-table-column>
      </template>
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="success" @click="$emit('edit',scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="$emit('remove',scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row type="flex" justify="end">
      <el-pagination
        @size-change="size => $emit('size-change', size)"
        @current-change="current => $emit('current-change', current)"
        :current-page="current"
        :page-sizes="[20, 50, 100, 200]"
        :page-size="size"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </el-row>
  </el-row>
</template>

<script>
export default {
  name: "CrudTable",
  props: {
    loading: {
      type: Boolean,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    data: {
      type: Array,
      required: true,
    },
    current: {
      type: Number,
      required: true,
    },
    size: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
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
  methods: {},
};
</script>