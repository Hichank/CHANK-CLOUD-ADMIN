<!-- 添加/编辑广告 -->
<template>
  <div style="padding: 20px; background: #fff">
    <OperationAdsForm
      :option="option"
      @upload-success="(response) => (form.src = response.url || '')"
      @submit="handleSubmit"
    />
  </div>
</template>
<script>
import OperationAdsForm from "@/components/Form/Operation/Ads";
import { ADS_GET_ID, ADS_POST, ADS_PUT } from "@/api";
export default {
  name: "OperationAdsUpdate",
  props: {},
  filters: {},
  components: {
    OperationAdsForm,
  },
  data() {
    return {
      loading: false,
      options: {},
      form: {
        title: "",
        src: "",
        sort: 1,
      },
      rules: {
        title: [{ required: true, message: "请输入广告标题", trigger: "blur" }],
        sort: [{ required: true, message: "请输入广告排序", trigger: "blur" }],
        src: [{ required: true, message: "请上传广告图", trigger: "blur" }],
      },
    };
  },
  computed: {
    option() {
      return {
        loading: this.loading,
        model: this.form,
        rules: this.rules,
        options: this.options,
      };
    },
  },
  watch: {},
  created() {
    if (this.$route.params.id) {
      this.getInfo(this.$route.params.id);
    }
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
    // 获取选项数据
    getOptions(PromiseArray) {
      this.loading = true;
      Promise.all(PromiseArray)
        .then((response) => {
          console.log(response);
          this.loading = false;
        })
        .catch((error) => {
          this.loading = false;
          console.log(error);
        });
    },
    // 获取详情
    async getInfo(id) {
      try {
        this.loading = true;
        const { data } = await ADS_GET_ID(id);
        this.form = data;
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    },
    // 表单提交
    async handleSubmit() {
      try {
        this.loading = true;
        const { _id, title, src, sort } = this.form;
        if (_id) {
          // 编辑
          await ADS_PUT(_id, {
            title,
            src,
            sort,
          });
        } else {
          // 新增
          await ADS_POST({
            title,
            src,
            sort,
          });
        }
        this.$router.push({
          path: "/operation/ads/list",
        });
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>