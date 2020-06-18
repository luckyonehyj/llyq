<template>
  <div class="home-header">
    <h1 class="title">零陵舆情专报</h1>
    <span class="el-icon-chat-line-round"></span>
    <h5 class="subtitile">零陵区委网信办 报送>></h5>
  </div>
</template>

<script>
export default {
  name: "home-header",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.home-header {
  position: relative;
  padding: 0.2rem .5rem .5rem;
  color: white;
  background-color: rgb(51, 133, 255);

  .title {
    font-size: 0.48rem;
    font-family: Fantasy;
    font-weight: 550
  }

  .subtitile {
    font-size: 0.2rem; 
    font-weight: 550
  }

  .el-icon-chat-line-round {
    position: absolute;
    top: 0.6rem;
    right: 0.7rem;
    font-size: .9rem;
  }
}
</style>
