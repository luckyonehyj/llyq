<template>
  <div id="home">
    <el-backtop  :bottom="40" :right="20">
    </el-backtop>
    <home-header></home-header>
    <tab class="tab"></tab>
  </div>
</template>

<script scoped>
import HomeHeader from "./components/HomeHeader";
import Tab from "./components/Tab";
export default {
  data() {
    return {};
  },
  components: {
    HomeHeader,
    Tab
  }
};
</script>

<style lang="stylus" scoped>
.tab {
  position: sticky;
  top: 0;
  margin-top: -0.4rem;
  border-radius: 0.35rem 0.35rem 0 0;
  background-color: #fff;
}
</style>