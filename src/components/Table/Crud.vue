<!-- 增删改查表格 -->
<template>
  <el-row>
    <template v-if="options.some((h) => h.search)">
      <el-form :model="searchForm" inline>
        <template v-for="(option, index) in options">
          <template v-if="option.search">
            <el-form-item v-bind="option" :key="index">
              <el-input v-model="searchForm[option.prop]" clearable></el-input>
            </el-form-item>
          </template>
        </template>
        <el-form-item>
          <el-button
            type="primary"
            icon="el-icon-search"
            @click="$emit('search', search)"
            >搜索</el-button
          >
          <el-button icon="el-icon-delete" @click="searchForm = {}"
            >清空</el-button
          >
        </el-form-item>
      </el-form>
    </template>

    <el-row type="flex">
      <el-button type="primary" @click="$emit('add')">新增</el-button>
    </el-row>
    <el-table stripe :data="data" v-loading="loading" style="margin: 10px 0">
      <template v-for="(option, index) in options">
        <el-table-column v-bind="option" :key="index">
          <template slot-scope="scope">
            <template v-if="option.image">
              <el-image
                :src="scope.row[option.prop]"
                :fit="option.image.fit"
                :lazy="option.image.lazy"
                :preview-src-list="[scope.row[option.prop]]"
              >
                <template slot="error">
                  <i class="el-icon-picture-outline"></i>
                </template>
              </el-image>
            </template>
            <template v-else>
              {{ scope.row[option.prop] }}
            </template>
          </template>
        </el-table-column>
      </template>
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="success"
            @click="$emit('edit', scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="$emit('remove', scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-row type="flex" justify="end">
      <el-pagination
        @size-change="(size) => $emit('size-change', size)"
        @current-change="(current) => $emit('current-change', current)"
        :current-page="current"
        :page-sizes="sizes"
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
    sizes: {
      type: Array,
      required: true,
    },
  },
  filters: {},
  components: {},
  data: () => ({
    searchForm: {},
  }),
  computed: {
    search() {
      const where = JSON.parse(JSON.stringify(this.searchForm));
      const { prop } = this.options.find((h) => h.regex);
      if (prop && where[prop]) {
        where[prop] = { $regex: where[prop] };
      }
      return where;
    },
  },
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