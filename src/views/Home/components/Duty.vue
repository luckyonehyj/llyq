<template>
  <div id="duty">
    <div>值班领导：{{zhiban}}</div>
    <div>处置值班：{{chuzhi}}</div>
    <div>监看值班：{{jiankan}}</div>
  </div>
</template>

<script>
export default {
  name: "duty",
  computed: {
    zhiban() {
      return this.$store.state.zhiban;
    },
    chuzhi() {
      return this.$store.state.chuzhi;
    },
    jiankan() {
      return this.$store.state.jiankan;
    }
  }
};
</script>

<style lang="stylus" scoped>
#duty {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  margin: 0.3rem 0;
  font-size: 0.35rem;

  div {
    margin: 0.15rem 0;
  }
}
</style>