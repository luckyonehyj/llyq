<template>
  <div id="duty">
    <div>值班领导：张三</div>
    <div>处置值班：李四</div>
    <div>监看值班：王五</div>
  </div>
</template>

<script>
export default {
  name: "duty"
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