<!-- 表格 -->
<template>
  <el-row>
    <el-button
      type="primary"
      @click="$router.push({ path: `/system/users/update` })"
      v-if="$store.getters.routes.some((h) => h === 'ROUTE-SYSTEM-USERS-ADD')"
      >新增</el-button
    >
    <el-table v-bind="option" v-loading="option.loading" style="margin: 10px 0">
      <el-table-column
        align="center"
        label="用户名"
        prop="username"
      ></el-table-column>

      <el-table-column align="center" label="权限">
        <template slot-scope="scope">
          <template v-if="scope.row.roles && scope.row.roles.length > 0">
            <el-tag
              style="margin: 5px"
              v-for="(item, index) in scope.row.roles"
              :key="index"
              >{{ item.name }}</el-tag
            >
          </template>
        </template>
      </el-table-column>

      <el-table-column align="center" label="头像">
        <template slot-scope="scope">
          <el-image
            style="width: 60px; height: 60px"
            class="br-4"
            lazy
            fit="cover"
            :src="scope.row.avatar"
            :preview-src-list="[scope.row.avatar]"
          ></el-image>
        </template>
      </el-table-column>

      <el-table-column
        align="center"
        label="创建时间"
        prop="createdAt"
      ></el-table-column>
      <el-table-column
        align="center"
        label="更新时间"
        prop="updatedAt"
      ></el-table-column>
      <template
        v-if="
          $store.getters.routes.some(
            (h) =>
              h === 'ROUTE-SYSTEM-USERS-EDIT' || h === 'ROUTE-SYSTEM-USERS-DEL'
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
                  (h) => h === 'ROUTE-SYSTEM-USERS-EDIT'
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
                  (h) => h === 'ROUTE-SYSTEM-USERS-DEL'
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
  name: "SystemUsersTable",
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