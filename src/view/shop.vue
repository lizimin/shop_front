<template>
 <keep-alive>
  <div class="shopindex page-index cpage-scroll go-back-top" ref="bodyscroll">
    <!-- <img src="../../static/image/shopindex.png" style="width:100%;"> -->
    <div class="tips">
      <img src="../assets/index1.jpg" alt="">
      <img src="../assets/index2.jpg" alt="">
      <div class="links">
        <img src="../assets/index3.jpg" alt="">
        <div class="linkswrapper">
          <router-link :to="item.link" v-for="(item,index) in links" :key="index">
            <div class="link " :class="`link${index}`">
              <div class="link-pic">
                <img :src="item.src" alt="">
                <div class="layer" v-if="item.showLayer">
                  199抢完为止
                  <svg width="82px" height="82px" viewBox="0 0 82 82" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <!-- Generator: Sketch 47.1 (45422) - http://www.bohemiancoding.com/sketch -->
                    <title>限量(1)</title>
                    <desc>Created with Sketch.</desc>
                    <defs></defs>
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="朋友圈赠送的卡" transform="translate(-51.000000, -1441.000000)" fill-rule="nonzero" fill="#FFFFFF">
                            <g id="限量(1)" transform="translate(51.000000, 1441.000000)">
                                <path d="M41.0001602,0 C18.3562285,0 0,18.3565488 0,41.0001602 C0,63.6437715 18.3565488,82 41.0001602,82 C63.6440918,82 82,63.6437715 82,41.0001602 C82,18.3565488 63.6434512,0 41.0001602,0 Z M41.0001602,78.3505195 C20.3721152,78.3505195 3.64980078,61.6282051 3.64980078,41.0001602 C3.64980078,20.3724355 20.3721152,3.65012109 41.0001602,3.65012109 C61.6282051,3.65012109 78.3505195,20.3724355 78.3505195,41.0001602 C78.3501992,61.6282051 61.6282051,78.3505195 41.0001602,78.3505195 Z" id="Shape"></path>
                                <path d="M40,4 C20.1175362,4 4,20.1179225 4,40.0001578 C4,59.8823932 20.1178518,76 40,76 C59.8821482,76 76,59.8827088 76,40.0001578 C75.9996843,20.1179225 59.8821482,4 40,4 Z M40,74.7758999 C20.7938974,74.7758999 5.22441035,59.2063446 5.22441035,40.0001578 C5.22441035,20.7942867 20.7938974,5.22441571 40,5.22441571 C59.2061026,5.22441571 74.775274,20.793971 74.775274,40.0001578 C74.775274,59.2063446 59.2061026,74.7758999 40,74.7758999 L40,74.7758999 Z" id="Shape"></path>
                                <path d="M22.7081997,64 L11,41.8243827 L18.4317686,37.8011302 L19.4914498,39.8079635 C20.9126046,42.8241342 21.5645141,45.2655546 21.4487693,47.1350439 C23.3129363,47.932203 24.7752978,49.3333533 25.8349789,51.3401867 C27.6012998,54.6860635 26.9975178,57.1618803 24.0245876,58.771423 L22.7531452,56.3631102 C24.2768396,55.7115922 24.4581333,54.3655405 23.2977423,52.3264857 C22.4448107,50.552533 21.0538052,49.283249 19.1229757,48.5224196 C19.0232204,46.0826103 18.28667,43.6431233 16.9145974,41.2023474 L14.7342205,42.3827807 L25.3830573,62.5515646 L22.7081201,63.9999194 L22.7081997,64 Z M31.4742549,59.1251341 L19.8192739,37.0498867 L31.6111599,30.665848 L35.9023076,38.7935513 C37.1683406,41.032943 36.6954974,42.7087814 34.47988,43.821308 L28.6335363,46.9865835 L32.3948832,54.1104271 C32.9137061,53.487264 33.609368,52.5499416 34.4808346,51.3039375 L35.6993764,53.6118805 C34.5101089,55.5463766 33.1024775,57.3827584 31.4742549,59.1252147 L31.4742549,59.1251341 Z M23.7061503,37.6549253 L25.083871,40.263575 L31.4254909,36.8300558 L30.0480884,34.221406 L23.7061503,37.6549253 Z M32.5745064,42.1432947 C33.5344322,41.710641 33.6983841,40.9768777 33.0678734,39.9411187 L32.4848539,38.8372113 L26.1432339,42.2704084 L27.5206364,44.8790581 L32.5745064,42.1432947 Z M44.7458442,51.6820564 C38.9473098,52.9283827 34.1658975,51.4325817 30.3982661,47.1923981 L33.1729585,45.6902335 C34.2405151,46.7470169 35.2519891,47.6190103 36.2091307,48.3040387 C36.9393966,46.7919659 37.1495669,45.2588686 36.839005,43.7050691 L39.5145785,42.2567142 C39.9588634,45.0281629 39.4837132,47.3494778 38.0940601,49.2190477 C39.5834685,49.7896898 41.4652954,49.9744799 43.7390636,49.7756735 L44.7458442,51.682137 L44.7458442,51.6820564 Z M40.7280291,33.2133575 L37.5497017,27.1928575 L56.3768807,17 L58.1252233,20.3111582 C59.1792564,22.1497955 58.6990946,23.5707621 56.681715,24.5762329 L40.7279496,33.2133575 L40.7280291,33.2133575 Z M40.0252078,36.9488724 L39.1772879,35.343438 L62.1663464,22.8974141 L63.01363,24.5028485 L40.0252078,36.9488724 L40.0252078,36.9488724 Z M41.3629946,26.9347635 L41.8934318,27.9380594 L54.5769104,21.0710209 L54.0471096,20.0677251 L41.3629946,26.9347635 L41.3629946,26.9347635 Z M43.058198,30.1455519 L54.6521644,23.8688912 C55.4450359,23.4397013 55.6303071,22.9095777 55.2125122,22.2752981 L42.5287154,29.1420144 L43.058198,30.1456324 L43.058198,30.1455519 Z M46.3306327,43.340886 L42.7807288,36.6178774 L61.2115118,26.639776 L63.1716156,30.3524137 C64.3319271,32.3914685 63.9046658,33.9130466 61.8872862,34.9185174 L57.2305282,37.4399275 L57.8660505,38.6438825 L66.1894914,34.137308 L66.9845903,35.6426948 L58.660513,40.1492694 L59.2438507,41.2528545 L69.1527165,35.8879807 L70,37.4937374 L46.9118226,49.9932489 L46.0645391,48.3874922 L55.9734048,43.0229407 L55.3907035,41.9193555 L46.9678255,46.4794177 L46.173363,44.9740309 L54.5962409,40.4139687 L53.9604004,39.2100137 L46.3307122,43.3409665 L46.3306327,43.340886 Z M46.4951414,36.4133517 L47.1838824,37.7176766 L51.8412768,35.1962664 L51.1525358,33.8916193 L46.4951414,36.4133517 Z M48.5084639,40.2266009 L53.1658584,37.7051907 L52.5300179,36.5009135 L47.8726235,39.0226459 L48.5084639,40.2266009 Z M58.98078,29.6540135 L54.4225045,32.1215332 L55.1112455,33.4261803 L59.669521,30.9583383 L58.98078,29.6540135 Z M59.8047555,34.1108058 C60.6982573,33.7135152 60.8996771,33.1304678 60.4113217,32.3629525 L60.3578643,32.2629049 L55.8002252,34.7304246 L56.4360657,35.9347018 L59.8047555,34.1107253 L59.8047555,34.1108058 Z" id="Shape"></path>
                            </g>
                        </g>
                    </g>
                </svg>
                </div>
              </div>
              <div class="link-text">
                <div class="text-hd" v-html="item.hdText">
                </div>
                <div class="text-bd">
                  <i class="mallprice">¥</i>
                  <span class="mallprice">

                    {{item.mall_price}}
                  </span>
                  <i class="marketprice" v-if="item.market_price">¥</i>
                  <span class="marketprice">

                    {{item.market_price}}
                  </span>

                </div>
                <div class="text-btn">
                  <span>立即购买</span>
                </div>

              </div>
            </div>
          </router-link>

        </div>
      </div>
      <img src="../assets/index4.jpg" alt="">
      <img src="../assets/index5.jpg" alt="">
      <!-- <img src="../assets/index6.jpg" alt=""> -->
      <img src="../assets/index7.jpg" alt="">
      <!-- <img src="../assets/commonbottom.jpg" alt=""> -->
    </div>
  </div>
 </keep-alive>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "shop",
  mounted() {
    // this.meunScroll = new BScroll(this.$refs.bodyscroll, {
    //   click: true
    // });
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      links: [
        {
          src:
            "http://ma.gotomore.cn/public/uploads/image/20180113/d039c8dcbebbdba7dcd12149f4215430.jpg",
          hdText: "任意部位修复做漆",
          link: "/goods/51?code=P98",
          mall_price: "199.00",
          showLayer: false,
          market_price: "299"
        },
        {
          src:
            "http://ma.gotomore.cn/public/uploads/image/20180113/cc5b0fadd7edb19a2b3e3de1de3b2bb9.jpg",
          hdText: "无忧保养套餐",
          link: "/goods/48?code=P95",
          mall_price: "680.00",
          showLayer: false,
          market_price: "800"
        },
        {
          src:
            "http://ma.gotomore.cn/public/uploads/image/20180113/139a6360cc6276cbce198d503c6e8d59.jpg",
          hdText: "精细洗车*10次<br/>+任意部位做漆1次",
          link: "/goods/24?code=P1",
          mall_price: "350.00",
          showLayer: false,
          market_price: ""
        }
      ]
    };
  },
  watch: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  /*
  list-style-type: none;
  */
  padding: 2px;
}
li {
  /*
  display: inline-block;
  */
  margin: 0 10px;
}
a {
  color: #42b983;
}
.tips {
  padding-bottom: 50px;
  img {
    display: block;
    width: 100%;
  }
  .links {
    position: relative;
    .linkswrapper {
      width: 6.8rem;
      position: absolute;
      top: 2rem;
      left: 0.35rem;
      .link {
        display: flex;
        justify-content: space-between;
        padding: 0.3rem 0.2rem;
        border-bottom: 0.5px solid rgba(255, 255, 255, 0.2);
        &.link1 {
          flex-direction: row-reverse;
        }
        &.link2 {
          border: none;
          .link-pic {
            padding-top: 0.25rem;
          }
          .link-text .text-hd {
            font-size: 0.3rem;
          }
        }
        &-pic {
          flex: 0 0 3.6rem;
          position: relative;
          img {
            width: 100%;
            display: block;
            height: 100%;
            border-radius: 0.07rem;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
          }
          height: 2rem;
          .layer {
            position: absolute;
            bottom: 0;
            background: #fc4f44;
            text-align: center;
            height: 0.46rem;
            line-height: 0.46rem;
            width: 100%;
            color: #fff;
            font-size: 0.3rem;

            border-radius: 0 0  0.07rem 0.07rem;
            svg {
              position: absolute;
              left: 0.1rem;
              top: -0.82rem;
              width: 0.82rem;
            }
          }
        }
        &-text {
          text-align: left;
          flex: 0 0 2.5rem;
          padding-left: 0.5rem;
          padding-top: 0.1rem;
          .text-hd {
            font-size: 0.36rem;
            color: #fff;
          }
          .text-bd {
            font-size: 0.32rem;
            i {
              font-style: normal;
            }
            .mallprice {
              color: #f23030;
              font-size: 0.34rem;
            }
            .marketprice {
              color: #959595;
              font-size: 0.34rem;
              text-decoration: line-through;
            }
            i.marketprice {
              margin-left: 0.2rem;
            }
          }
          .text-btn {
            padding-top: 0.18rem;
            span {
              display: inline-block;
              width: 1.28rem;
              height: 0.65rem;
              background: #fa514a;
              text-align: center;
              color: #fff;
              line-height: 0.65rem;
              border-radius: 0.07rem;
            }
          }
        }
      }
    }
  }
}
.page-index {
  height: 100vh;
  overflow: scroll;
}
/*.shopindex {
  background:url(../../static/image/shopindex.png) no-repeat;
  width: 100%;
  height:100%;
  background-size:100% 100%;
  position:absolute;
}*/
</style>
