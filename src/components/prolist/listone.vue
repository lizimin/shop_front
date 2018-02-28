<template>
  <div id="listone">
        <div class="pro">
            <div class="pro-img">        
            </div>
            <div class="pro-footer">
                <p class="title">66666666666666666666666666666666</p>
                <flexbox :gutter="0" wrap="wrap">
                    <flexbox-item :span="1/2">
                        <span class="price">￥10元</span>
                    </flexbox-item>
                    <flexbox-item :span="1/2">
                        <span class="xiaoliang">月销售100笔</span>
                    </flexbox-item>
                </flexbox>
            </div>
        </div>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem } from 'vux'
export default {
  name: 'listone',
  components: {
    Flexbox,
    FlexboxItem,
  },
  props: {
    
  },
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .pro{
        padding:7px 3px 7px 7px;
        width: auto;
    }
    .pro-footer{
        background-color: #fff;
    }
    .pro-img{
        width: 100%;
        height:0;
        padding-bottom: 100%;
        background-color: #EAEAEA;
    }
    .title{
        font-size: 18px;
        padding: 5px;
        white-space: nowrap;
        overflow: hidden;
    }
    .xiaoliang{
        width: 100%;
        display: inline-block;
        text-align: right;
        font-family: MicrosoftYaHei;
        font-size: 14px;
        color: #ABABAB;
        letter-spacing: 0;
    }
    .price{
        width: 100%;
        display: inline-block;
        font-family: MicrosoftYaHei-Bold;
        font-size: 16px;
        color: #FE4D3D;
        letter-spacing: 0;
    }
</style>
