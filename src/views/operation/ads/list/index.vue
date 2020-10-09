<!-- 广告列表 -->
<template>
  <div style="padding: 20px; background: #fff">
    <el-row>
      <el-row type="flex">
        <el-button
          type="primary"
          @click="$router.push({ path: `/operation/ads/update` })"
          >新增</el-button
        >
      </el-row>

      <OperationAdsTable
        :option="table"
        @edit="handleTableEdit"
        @del="handleTableDel"
      />

      <el-row type="flex" justify="end">
        <el-pagination
          v-bind="pagination"
          @size-change="handlePaginationSizeChange"
          @current-change="handlePaginationCurrentChange"
        ></el-pagination>
      </el-row>
    </el-row>
  </div>
</template>

<script>
import { ADS_GET, ADS_DELECT } from "@/api";
import OperationAdsTable from "@/components/Table/Operation/Ads";
export default {
  name: "OperationAdsList",
  props: {},
  filters: {},
  components: {
    OperationAdsTable,
  },
  data() {
    return {
      loading: false,

      // 请求参数
      query: {
        where: {},
        page: 1,
        limit: 10,
      },

      // 响应数据
      response: {},
    };
  },
  computed: {
    // 表格
    table() {
      return {
        loading: this.loading,
        data: this.response.data || [],
        stripe: true,
      };
    },
    // 分页器
    pagination() {
      return {
        currentPage: this.query.page || 1,
        pageSize: this.query.limit || 10,
        total: this.response.total || 0,
        pageSizes: [10, 20, 30, 40, 50],
        layout: "total, sizes, prev, pager, next, jumper",
      };
    },
  },
  watch: {},
  created() {
    this.fetchData();
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
    // 获取数据
    async fetchData() {
      try {
        this.loading = true;
        const { query } = this;
        const { data } = await ADS_GET({ query });
        this.response = data;
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    },

    // 表格
    async handleTableEdit(row) {
      this.$router.push({ path: `/operation/ads/update/${row._id}` });
    },
    handleTableDel(row) {
      this.$confirm("此操作将永久删除该数据, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(async () => {
          try {
            await ADS_DELECT(row._id);
            this.fetchData();
          } catch (error) {
            console.log(error);
          }
        })
        .catch(() => {});
    },

    // 分页器
    handlePaginationSizeChange(size) {
      this.query.limit = size;
      this.fetchData();
    },
    handlePaginationCurrentChange(current) {
      this.query.page = current;
      this.fetchData();
    },
  },
};
</script>
