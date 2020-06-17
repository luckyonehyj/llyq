<template>
  <div id="detail">
    <el-page-header @back="goBack" content="详情页面"></el-page-header>
    <h1 class="title">{{title}}</h1>
    <p class="content">{{content}}</p>
  </div>
</template>

<script scoped>
export default {
  data() {
    return {
      title: "",
      content: ""
    };
  },
  components: {},
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  },
  created() {
    this.title = sessionStorage.getItem("title");
    this.content = sessionStorage.getItem("content");
  },
  watch: {
    $route() {
      this.title = sessionStorage.getItem("title");
      this.content = sessionStorage.getItem("content");
    }
  }
};
</script>

<style lang="stylus">
#detail {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  .el-page-header {
    padding: 0.3rem 0.18rem;
    position: sticky;
    top: 0;
    color: #666;

    .el-icon-back {
      font-size: 0.6rem !important;
      padding-right: 0.2rem;
      font-weight: 600
    }

    .el-page-header__title {
      font-size: 0.45rem !important;
      font-weight: 600
    }

    .el-page-header__content {
      color: #666;
      font-size: 0.45rem !important;

    }
  }
  .title {
    display: flex;
    font-weight: 700;
    padding: 0 0.5rem;
    font-size: 0.5rem;
  }

  .content {
    margin: 0.3rem 0.45rem;
    font-size: 0.4rem;
    line-height: 0.7rem;
  }
}
</style>