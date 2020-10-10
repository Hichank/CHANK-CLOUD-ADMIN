<!-- 表格 -->
<template>
  <el-row>
    <el-button
      type="primary"
      @click="$router.push({ path: `/operation/articles/update` })"
      v-if="
        $store.getters.routes.some((h) => h === 'ROUTE-OPERATION-ARTICLES-ADD')
      "
      >新增</el-button
    >
    <el-table
      v-bind="option"
      v-loading="option.loading"
      style="margin: 10px 0"
      @sort-change="
        ({ column, prop, order }) =>
          $emit('sort-change', { column, prop, order })
      "
    >
      <el-table-column
        sortable
        align="center"
        label="排序"
        prop="sort"
        width="90"
      ></el-table-column>

      <el-table-column
        align="center"
        label="文章标题"
        prop="title"
      ></el-table-column>

      <el-table-column
        align="center"
        label="文章副标题"
        prop="subtitle"
      ></el-table-column>

      <el-table-column
        sortable
        align="center"
        label="创建时间"
        prop="createdAt"
      ></el-table-column>

      <el-table-column
        sortable
        align="center"
        label="更新时间"
        prop="updatedAt"
      ></el-table-column>

      <template
        v-if="
          $store.getters.routes.some(
            (h) =>
              h === 'ROUTE-OPERATION-ARTICLES-EDIT' ||
              h === 'ROUTE-OPERATION-ARTICLES-DEL'
          )
        "
      >
        <el-table-column align="center" label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="success"
              @click="$emit('edit', scope.row)"
              v-if="
                $store.getters.routes.some(
                  (h) => h === 'ROUTE-OPERATION-ARTICLES-EDIT'
                )
              "
              >编辑</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="$emit('del', scope.row)"
              v-if="
                $store.getters.routes.some(
                  (h) => h === 'ROUTE-OPERATION-ARTICLES-DEL'
                )
              "
              >删除</el-button
            >
          </template>
        </el-table-column>
      </template>
    </el-table>
  </el-row>
</template>

<script>
export default {
  name: "OperationArticlesTable",
  props: {
    option: {
      type: Object,
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