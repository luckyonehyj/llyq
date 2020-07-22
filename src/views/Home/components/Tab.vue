<template>
  <div id="tab">
    <el-tabs v-model="activeName" @tab-click="handleClick" stretch tab-position="top">
      <el-tab-pane label="涉零舆情" name="1">
        <span slot="label">
          <div>
            涉零舆情
            <span class="num">{{yuqingNum}}</span>
          </div>
        </span>
        <list :list="list"></list>
      </el-tab-pane>
      <el-tab-pane label="敏感信息" name="2">
        <span slot="label">
          <div>
            敏感信息
            <span class="num">{{minganNum}}</span>
          </div>
        </span>
        <list :list="list"></list>
      </el-tab-pane>
      <el-tab-pane label="贴文信息" name="3">
        <span slot="label">
          <div>
            贴文信息
            <span class="num">{{tiewenNum}}</span>
          </div>
        </span>
        <list :list="list"></list>
      </el-tab-pane>
      <el-tab-pane label="社会热点" name="4">
        <span slot="label">
          <div>
            社会热点
            <span class="num">{{redianNum}}</span>
          </div>
        </span>
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
      list: [],
      url: "FindDataIndex.php" //获取title,number,duty的接口
    };
  },
  computed: {
    listUrl() {
      return "FindDataType" + this.activeName + ".php";
    },
    yuqingNum() {
      return this.$store.state.yuqingNum;
    },
    minganNum() {
      return this.$store.state.minganNum;
    },
    tiewenNum() {
      return this.$store.state.tiewenNum;
    },
    redianNum() {
      return this.$store.state.redianNum;
    }
  },
  components: {
    List
  },
  methods: {
    handleClick() {
      this.getList();
    },
    getList() {
      this.$http.post(this.listUrl).then(function(res) {
        this.list = res.body;
      });
    },
    getData() {
      this.$http.post(this.url).then(function(res) {
        const data = res.body[0];
        this.$store.commit("updateTitle", data.title);
        this.$store.commit("updateNum1", data.yuqing);
        this.$store.commit("updateNum2", data.mingan);
        this.$store.commit("updateNum3", data.tiewen);
        this.$store.commit("updateNum4", data.redian);
        this.$store.commit("updateZhiban", data.zhiban);
        this.$store.commit("updateChuzhi", data.chuzhi);
        this.$store.commit("updateJiankan", data.jiankan);
      });
    }
  },
  mounted() {
    this.getList();
    this.getData();
  },
  watch: {
    "$store.state.headTitle"(newTitle) {
      document.title = newTitle;
    }
  }
};
</script>

<style lang="stylus">
#tab {
  border-radius: 0.3rem;
  overflow: hidden;
  box-shadow: 0 0.2rem 0.2rem #eee;

  .el-tabs__content {
    min-height: 64vh;
  }

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

    .num {
      font-size: 0.3rem;
    }
  }

  .is-active {
    font-weight: 700 !important;
  }
}
</style>