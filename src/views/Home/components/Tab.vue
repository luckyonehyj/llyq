<template>
  <div id="tab">
    <el-tabs v-model="activeName" @tab-click="handleClick" stretch tab-position="top">
      <el-tab-pane label="涉零舆情" name="1">
        <list :list="list"></list>
      </el-tab-pane>
      <el-tab-pane label="敏感信息" name="2">
        <list :list="list"></list>
      </el-tab-pane>
      <el-tab-pane label="贴文信息" name="3">
        <list :list="list"></list>
      </el-tab-pane>
      <el-tab-pane label="社会热点" name="4">
        <list :list="list"></list>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script scoped>
import List from "@/components/List";

export default {
  data() {
    return {
      activeName: "1",
      list: []
    };
  },
  computed: {
    url() {
      return "FindDataType" + this.activeName + ".php";
    }
  },
  components: {
    List
  },
  methods: {
    handleClick() {
      this.activeName = event.target.id.substring(4);
      this.getList();
    },
    getList() {
      this.$http.post(this.url).then(function(res) {
        this.list = res.body;
        if (res.data.number) {
          this.number = res.data.number;
        }
      });
    }
  },
  mounted() {
    this.getList();
  }
};
</script>

<style lang="stylus">
.el-tabs__header {
  position: sticky !important;
  top: 0;
  background-color: #fff;
  z-index: 1;
}

.el-tabs__item {
  font-size: 0.4rem !important;
  height: 1.3rem !important;
  line-height: 1.3rem !important;
  padding: 0 !important;
}

.is-active {
  font-weight: 700 !important;
}
</style>