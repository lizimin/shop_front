<template>
  <div class="cpts-verticalscroll-hd">
    <div class="hd-left" solt="left" @click="goback">
      <span class="fa fa-angle-left"></span>
    </div>
    <div class="hd-middle" solt="middle">
      {{title}}
    </div>
    <div class="hd-right" solt="right">

    </div>
  </div>
</template>

<script >
export default {
  name: 'verticalScrollHd',
  props: {
    title: {
      type: String,
      default: '列表'
    }
  },
  methods: {
    goback() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="less" >
.cpts-verticalscroll {
  height: 100%;
  // background: #000;
  &-hd {
    height: 1rem;
    display: flex;
    background: #fff;
    border-bottom: 1px solid #eee;
    line-height: 1rem;
    // text-align: center;
    .hd-left {
      flex: 0 0 1.7rem;
      padding-left: 0.3rem;
      font-size: 0.4rem;
    }
    .hd-middle {
      flex: 0 0 3.5rem;
      text-align: center;
    }
    .hd-right {
      flex: 0 0 2rem;
    }
  }
  &-bd {
    height: calc(~'100vh - 1rem');
    background: red;
  }
}
</style>
