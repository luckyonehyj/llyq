<template>
  <div id="tab">
    <el-tabs v-model="activeName" @tab-click="handleClick" stretch tab-position="top">
      <el-tab-pane label="零陵舆情" name="yuqing">零陵舆情</el-tab-pane>
      <el-tab-pane label="敏感信息" name="mingan">敏感信息</el-tab-pane>
      <el-tab-pane label="贴文信息" name="tiewen">贴文信息</el-tab-pane>
      <el-tab-pane label="社会热点" name="redian">社会热点</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script scoped>
export default {
  data() {
    return {
      activeName: "yuqing",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style lang="stylus" >
.el-tabs__item
  font-size: .35rem !important
  height: 1.3rem!important
  line-height: 1.3rem!important
.is-active
  font-weight: 700 !important
</style>