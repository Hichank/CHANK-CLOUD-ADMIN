<!-- 个人中心 -->
<template>
  <div>
    <el-card style="width: 500px">
      <template slot="header">
        <div
          class="display-flex align-items-center justify-content-space-between"
        >
          <h1>个人信息</h1>
          <el-button
            type="text"
            @click="
              $router.push({
                path: `/system/users/update/${id}`,
              })
            "
            >修改</el-button
          >
        </div>
      </template>

      <div class="display-flex flex-direction-column align-items-center">
        <el-avatar :src="avatar" :size="150"></el-avatar>
        <h1 class="m-t-20 font-18">{{ username }}</h1>
        <div>
          <template v-if="roles && roles.length > 0">
            <el-tag
              style="margin: 5px"
              v-for="(item, index) in roles"
              :key="index"
              >{{ item.name }}</el-tag
            >
          </template>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Mine",
  props: {},
  filters: {},
  components: {},
  data: () => ({}),
  computed: {
    ...mapGetters(["id", "avatar", "username", "roles"]),

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