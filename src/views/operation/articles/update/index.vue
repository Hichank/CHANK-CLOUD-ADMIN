<!-- 添加/编辑文章 -->
<template>
  <div style="padding: 20px; background: #fff">
    <OperationArticlesForm
      :option="option"
      @upload-success="(response) => (form.src = response.url || '')"
      @submit="handleSubmit"
    />
  </div>
</template>
<script>
import OperationArticlesForm from "@/components/Form/Operation/Articles";
import { ARTICLES_GET_ID, ARTICLES_POST, ARTICLES_PUT } from "@/api";
export default {
  name: "OperationArticlesUpdate",
  props: {},
  filters: {},
  components: {
    OperationArticlesForm,
  },
  data() {
    return {
      loading: false,
      options: {},
      form: {
        title: "",
        subtitle: "",
        sort: 1,
        content: "",
      },
      rules: {
        title: [{ required: true, message: "请输入文章标题", trigger: "blur" }],
        subtitle: [
          { required: true, message: "请输入文章副标题", trigger: "blur" },
        ],
        sort: [{ required: true, message: "请输入文章排序", trigger: "blur" }],
        content: [
          { required: true, message: "请输入文章内容", trigger: "blur" },
        ],
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
        const { data } = await ARTICLES_GET_ID(id);
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
        const { _id, title, subtitle, sort, content } = this.form;
        if (_id) {
          // 编辑
          await ARTICLES_PUT(_id, {
            title,
            subtitle,
            sort,
            content,
          });
        } else {
          // 新增
          await ARTICLES_POST({
            title,
            subtitle,
            sort,
            content,
          });
        }
        this.$router.push({
          path: "/operation/articles/list",
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