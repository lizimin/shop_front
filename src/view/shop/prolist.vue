<template>
  <div id="prolist">
    <div class="header">
      <flexbox>
        <flexbox-item :span="7/8">
          <div class="menu">
            <span class="fenlei selectMenu">综合</span>
            <span class="fenlei">销量</span>
            <span class="fenlei">上新</span>
            <span class="fenlei">价格</span>
            <span class="fenlei">价格</span>
            <span class="fenlei">价格</span>
            <span class="fenlei">价格</span>
            <span class="fenlei">价格</span>
            <span class="fenlei">价格</span>
            <span class="fenlei">价格</span>
            <span class="fenlei">价格</span>
            <span class="fenlei">价格</span>
            <span class="fenlei">价格</span>
            <span class="fenlei">价格</span>
          </div>
        </flexbox-item>
        <flexbox-item :span="1/8">
          11
        </flexbox-item>
      </flexbox>
      
    </div>
    <flexbox :gutter="0" wrap="wrap">
        <flexbox-item :span="1/2">
          <listone></listone>
        </flexbox-item>
        <flexbox-item :span="1/2">
          <listone></listone>
        </flexbox-item>
        <flexbox-item :span="1/2">
          <listone></listone>
        </flexbox-item>
      </flexbox>
      <listtwo></listtwo>
      <listtwo></listtwo>
      <listtwo></listtwo>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { TransferDom, Popup, Flexbox, FlexboxItem } from 'vux'
import listone from '../../components/prolist/listone'
import listtwo from '../../components/prolist/listtwo'
export default {
  directives: {
    TransferDom
  },
  components: {
    Popup,
    Flexbox,
    FlexboxItem,
    listone,
    listtwo
  },
  name: 'prolist',
  data () {
    let self = this;
    return {
    }
  },
  activated: function () {

  },
  created: function() {

  },
  methods: {


  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header{
    height: auto;
    background-color: #fff;
    padding: 10px;
    margin-bottom: 10px;
  }
  .fenlei{
    padding: 10px;
    font-size: 18px;
    color: #000;
  }
  .menu{
    width: 100%;
    height: auto;
    white-space: nowrap;
    overflow: hidden;
    overflow-x: scroll;
    -webkit-backface-visibility: hidden;
    -webkit-perspective: 1000;
    -webkit-overflow-scrolling: touch; /* 2 */
    text-align: justify; /* 3 */
    border-right: 1px solid #e0e0e0;
  }
  .menu::-webkit-scrollbar {
    display: none;
  }
  .selectMenu{
    color: #FE4D3D;
  }



</style>
