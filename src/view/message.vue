<template>
  <div id="message">
    <msg :icon="icon" :title="title" :buttons="buttons" :description="description"></msg>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { Msg, TransferDom } from 'vux'
export default {
  directives: {
    TransferDom
  },
  components: {
    Msg
  },
  name: 'map',
  data () {
    let self = this;
    return {
      icon: 'success',
      description: '操作成功',
      title: '操作成功',
      buttons: [
        {
          text: '返回首页',
          type: 'primary',
          link: '/'
        },
        {
          text: '返回首页',
          type: 'default',
          link: '/'
        },
      ]
    }
  },
  computed: {
    ...mapState({
      openid: state => state.vux.openid,
    }),
  },
  activated: function () {
    console.log()
  },
  created: function() {

  },
  methods: {


  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#message{
  background-color: #fff;
}
</style>
