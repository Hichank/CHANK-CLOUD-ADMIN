<script>
export default {
  name: "Redirect",
  created() {
    const { params } = this.$route;
    const { path } = params;
    this.$router.replace({ path: `/${path}` });
  },
  render: (h) => {
    return h(); // avoid warning message
  },
};
</script>