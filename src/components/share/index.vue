<template>
	<div>
    <div v-transfer-dom>
      <x-dialog v-model="showBox" hide-on-blur :dialog-style="{'max-width': '100%', width: '100%', height: '100%', 'background-color': 'transparent'}">
        <img @click="hide" src="../../../static/image/notice.png" style="width:100%;height:100%;">
      </x-dialog>
    </div>
	</div>
</template>

<script>
import { XDialog, TransferDomDirective as TransferDom } from 'vux'
export default {
  props: {
    message: {
      type: String,
    }
  },
  directives: {
    TransferDom
  },
  components: {
    XDialog,
    TransferDom,
  },
  name: 'share',
  data () {
    return {
    	showBox: false
    }
  },
  created: function() {
  },
  activated: function(){

  },
  deactivated: function(){

  },
  methods: {
    hide: function(){
      this.showBox = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .qrcode{
    text-align: center;
    padding: 30px;
    background-color: #fff;
  }
</style>