<template>
  <div class="layout-vcard">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'vcardLayout',

  created() {
    // 显示
  },
  methods: {},
  computed: {}
};
</script>


<style lang="less">
@import '../../styles/index.less'; // 全局自定义样式
</style>
