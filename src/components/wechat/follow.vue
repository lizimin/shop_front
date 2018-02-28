<template>
	<div>
    <div v-transfer-dom>
      <x-dialog v-model="showBox" hide-on-blur :dialog-style="{'max-width': '100%', width: '100%', height: '50%', 'background-color': 'transparent'}">
        <img src="../../../static/image/code.jpg">
        <p style="color:#fff;text-align:center;" @click="showDialogStyle = false">
          <span style="font-size:20px;">{{message}}</span>
        </p>
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
      default: '长按扫码关注'
    }
  },
  directives: {
    TransferDom
  },
  components: {
    XDialog,
    TransferDom,
  },
  name: 'follow',
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