<template>
  <div class="home-header">
    <h1 class="title">{{headTitle}}</h1>
    <span class="el-icon-monitor"></span>
    <h3 class="subtitile">中共永州市零陵区委网信办 报送>></h3>
  </div>
</template>

<script>
export default {
  name: "home-header",

  computed: {
    headTitle() {
      return this.$store.state.headTitle;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.home-header {
  position: relative;
  overflow: hidden;
  padding: 0.2rem 0.5rem 0.5rem;
  color: white;
  background-color: rgb(51, 133, 255);
  font-family: Helvetica, 'Hiragino Sans GB', 'Microsoft Yahei', '微软雅黑', Arial, sans-serif;

  .title {
    font-size: 0.7rem;
    font-weight: 700;
    padding: 0.3rem 0;
    margin: 0;
    box-sizing: border-box;
  }

  .subtitile {
    font-size: 0.35rem;
    font-weight: 500;
    margin: 0 0 0.2rem 0;
  }

  .el-icon-monitor {
    position: absolute;
    top: 0.75rem;
    right: 0.7rem;
    font-size: 0.9rem;
  }
}
</style>
