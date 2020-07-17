<template>
  <div id="tab">
    <el-tabs v-model="activeName" @tab-click="handleClick" stretch tab-position="top">
      <el-tab-pane label="涉零舆情" name="1">
        <span slot="label">
          <div>
            涉零舆情
            <span class="num">{{num.yuqing}}</span>
          </div>
        </span>
        <list :list="list"></list>
      </el-tab-pane>
      <el-tab-pane label="敏感信息" name="2">
        <span slot="label">
          <div>
            敏感信息
            <span class="num">{{num.mingan}}</span>
          </div>
        </span>
        <list :list="list"></list>
      </el-tab-pane>
      <el-tab-pane label="贴文信息" name="3">
        <span slot="label">
          <div>
            贴文信息
            <span class="num">{{num.tiewen}}</span>
          </div>
        </span>
        <list :list="list"></list>
      </el-tab-pane>
      <el-tab-pane label="社会热点" name="4">
        <span slot="label">
          <div>
            社会热点
            <span class="num">{{num.redian}}</span>
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
      num: [],
      titleUrl: "getDate.php",
      numUrl: "FindDataType.php",
      dutyUrl: "FindDataName.php"
    };
  },
  computed: {
    listUrl() {
      return "FindDataType" + this.activeName + ".php";
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
        if (res.data.number) {
          this.number = res.data.number;
        }
      });
    },
    getTitle() {
      this.$http.post(this.titleUrl).then(function(res) {
        sessionStorage.setItem("headTitle", res.body);
      });
    },
    getNum() {
      this.$http.post(this.numUrl).then(function(res) {
        this.num = res.body[0];
      });
    },
    getDuty() {
      this.$http.post(this.dutyUrl).then(function(res) {
        sessionStorage.setItem("duty", JSON.stringify(res.body[0]));
      });
    }
  },
  mounted() {
    this.getList();
    this.getTitle();
    this.getNum();
    this.getDuty();
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