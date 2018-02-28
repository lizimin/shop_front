<template>
  <div id="littwo">
        <div class="pro">
            <flexbox :gutter="0">
                <div class="pro-img">        
                </div>
                <flexbox-item>
                    <div class="pro-body">
                    <flexbox orient="vertical">
                        
                            <flexbox-item>
                                  <div class="title"><p>
                                      666666677777777777777777777777777777
                                  </p></div>
                              </flexbox-item>
                              <flexbox-item>
                                <flexbox :gutter="0" wrap="wrap">
                                    <flexbox-item :span="1/2">
                                        <span class="price">￥10元</span>
                                    </flexbox-item>
                                    <flexbox-item :span="1/2">
                                        <span class="xiaoliang">月销售100笔</span>
                                    </flexbox-item>
                                </flexbox>
                              </flexbox-item>
                        
                      
                    </flexbox>
                    </div>
                </flexbox-item>
            </flexbox>
        </div>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem } from 'vux'
export default {
  name: 'littwo',
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
        padding:5px;
        width: auto;
        height:115px;
    }
    .pro-footer{
        background-color: #fff;
    }
    .pro-img{
        width: 115px;
        height:115px;
        /*padding-bottom: 100%;*/
        background-color: #EAEAEA;
    }
    .title{
        padding: 5px;
        font-size: 18px;
        overflow: hidden;
        vertical-align:text-top;
        height: 50%;
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
    .pro-body{
        background-color: #fff;
        height: 115px;
    }
</style>
