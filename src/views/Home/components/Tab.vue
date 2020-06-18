<template>
  <div id="tab">
    <el-tabs v-model="activeName" @tab-click="handleClick" stretch tab-position="top">
      <el-tab-pane label="零陵舆情" name="yuqing">
        <list :list="list">
        </list>
      </el-tab-pane>
      <el-tab-pane label="敏感信息" name="mingan">
        <list :list="list"></list>
      </el-tab-pane>
      <el-tab-pane label="贴文信息" name="tiewen">
        <list :list="list"></list>
      </el-tab-pane>
      <el-tab-pane label="社会热点" name="redian">
        <list :list="list"></list>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script scoped>
import List from "@/components/List"

export default {
  data() {
    return {
      activeName: "yuqing",
      baseUrl:"https://www.fastmock.site/mock/e245ba9e3ea1b330d74bc296c086c5f5/specialreport/",
      list: [],
      number: ""
    };
  },
  computed: {
    url() {
      return  this.baseUrl + this.activeName
    }
  },
  components: {
    List
  },
  methods: {
    handleClick() {
      this.activeName = event.target.id.substring(4)
      this.getList()
    },
    getList() {
      this.$http.get(this.url).then(function(res) {
        this.list = res.data.data;
        if (res.data.number) {
          this.number = res.data.number;
        }
      });
    }
  },
  mounted() {
    this.getList()
  }
};
</script>

<style lang="stylus">
.el-tabs__header {
  position: sticky!important
  top: 0;
  background-color: #fff;
  z-index: 1
}
.el-tabs__item {
  font-size: .4rem !important
  height: 1.3rem!important
  line-height: 1.3rem!important
  padding: 0 !important
}
.is-active {
  font-weight: 700 !important
}
</style>