<template>
  <div id="myvcard">
    <box style="margin-top:10px;padding: 0 10px;background-color:#fff;" :key="index" v-for="(item,index) in use_record_list">
      <flexbox :gutter="0" style="padding:5px;" wrap="wrap">
        <flexbox-item :span="1/2"><span class="des">消费时间：</span></flexbox-item>
        <flexbox-item :span="1/2"><div class="des-value">6666</div></flexbox-item>
        <flexbox-item :span="1/2"><span class="des">消费地点：</span></flexbox-item>
        <flexbox-item :span="1/2"><div class="des-value">777777776</div></flexbox-item>
        <flexbox-item :span="1/2"><span class="des">洗车卡编号：</span></flexbox-item>
        <flexbox-item :span="1/2"><div class="des-value">777777776</div></flexbox-item>
        <flexbox-item :span="1/2"><span class="des">剩余次数：</span></flexbox-item>
        <flexbox-item :span="1/2"><div class="des-value">777777776</div></flexbox-item>
      </flexbox>
    </box>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { Qrcode, FlexboxItem, Flexbox, Box} from 'vux'
export default {
  directives: {
  },
  components: {
    Qrcode,
    FlexboxItem,
    Flexbox,
    Box
  },
  name: 'myvcard',
  data () {
    return {
      out_trade_no: '',
      use_record_list: []
    }
  },
  computed: {
  },
  created: function() {
    this.out_trade_no = this.$route.query.out_trade_no
    this.fetchData()
  },
  activated: function(){

  },
  deactivated: function(){
  },
  methods: {
    fetchData: function(){
      let self = this
      self.xarpost('Vcard/getMyVcard', {out_trade_no: this.out_trade_no}).then( d => {
        let {data, error, message} = d
        if(error == 0){
          self.use_record_list = data
          console.log(data)
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .des{
    color: #888888;
  }
  .des-value{
    float: right;
  }
</style>
