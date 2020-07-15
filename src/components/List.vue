<template>
  <div id="list">
    <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto" v-if="flag">
      <li
        v-for="(item,index) in list"
        :key="item.id"
        class="infinite-list-item"
        :data-title="item.title"
        :data-content="item.content"
        @click="goDetail"
      >
        <div class="title">{{index+1}}. {{item.title}}</div>
        <div class="introduction">{{item.introduction}}</div>
      </li>
    </ul>
    <div v-else class="no-list">
      <span>暂无内容</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "List",
  data() {
    return {
      count: 0,
      flag: 1
    };
  },
  props: {
    list: Array
  },

  methods: {
    load() {
      this.count += 4;
    },
    goDetail(e) {
      sessionStorage.setItem("title", e.currentTarget.dataset.title);
      sessionStorage.setItem("content", e.currentTarget.dataset.content);
      this.$router.push({
        name: "Detail"
      });
    }
  },
  watch: {
    list(newList) {
      this.flag = newList.length == 0 ? 0 : 1;
    }
  }
};
</script>
<style lang="stylus" scoped>
#list {
  position: relative;

  ul {
    list-style: none;
    padding-inline-start: 0.373333rem;
    padding-inline-end: 0.373333rem;
    margin-block-start: 0;

    .infinite-list-item:first-of-type {
      padding: 0 0.1rem 0.25rem;
    }

    .infinite-list-item {
      border-bottom: 1px dotted #ddd;
      color: #424242;
      padding: 0.25rem 0.1rem;

      .title {
        font-size: 0.38rem;
        line-height: 0.55rem;
        font-weight: 550;
        margin-bottom: 0.1rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      .introduction {
        font-size: 0.32rem;
        line-height: 0.5rem;
        padding: 0 0.1rem 0 0.3rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
      }
    }
  }

  .no-list {
    font-size: 0.4rem;
    height: 13.9rem;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    padding-top: 5.5rem;
  }
}
</style>