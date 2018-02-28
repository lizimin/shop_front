<template>
  <div id="my" class="page-my cpage-scroll-pb50 go-back-top">
    <div class="new-header">
      <span class="name">{{customer.cname}}</span>
      <div class="star">VIP会员</div>
      <img class="cavatar" :src="customer.cavatar">
      <img class="setting" src="../../static/image/setting.png">
      <img class="xingji" src="../../static/image/xingji.png">
      <div class="ad">
        <div class="ad-left">
          <span class="fa fa-calendar-check-o"></span>
        </div>
        <div class="ad-right" >
          <router-link to="/salaryRecord">
          <!-- <p></p> -->
            <p>我的收益</p>
          </router-link>
        </div>
      </div>
    </div>
    <!-- notice start-->
    <div class="notice">
      <div class="notice-logo">
        <div>
          <svg width="72px" height="56px" viewBox="0 0 72 56" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              
                <defs>
                    <path d="M42.0044602,40.2986924 L42.3555967,38.3833183 L47.6282745,38.3833183 L47.277138,40.2986924 L58.5569518,40.2986924 L58.106319,42.7567977 L46.8265052,42.7567977 L46.3249436,45.492708 L44.9599546,48 L39.6311186,48 L40.9553304,46.0214698 L41.5538274,42.7567977 L30.6051627,42.7567977 L31.0557956,40.2986924 L42.0044602,40.2986924 Z M36.9626758,28 L42.8306761,28 L41.8595997,28.9287455 L58.8677873,29.1658152 L58.2005829,32.8052721 L51.5916263,34.8396274 L59,37.3784434 L58.7285226,38.8592942 L51.3663586,38.8592942 L45.8872768,36.782764 L44.834645,36.782764 L38.6039439,38.8592942 L31.4364493,38.8592942 L31.7181983,37.3224139 L39.924229,34.8396274 L37.5894384,33.9025343 L37.0660014,34.8396274 L31.3028898,34.8396274 L36.9626758,28 Z M41.553286,31.4667268 L46.0322281,33.2674547 L51.171408,31.4667268 L41.553286,31.4667268 Z M32.4013952,43.5960132 L37.4835063,43.5960132 L35.3276627,47.9141875 L30,47.9141875 L32.4013952,43.5960132 Z M51.0096628,43.5170456 L56.0776188,43.5170456 L56.6871564,47.8792948 L51.6127161,47.8792948 L51.0096628,43.5170456 Z" id="path-1"></path>
                    <filter x="-22.4%" y="-27.5%" width="144.8%" height="165.0%" filterUnits="objectBoundingBox" id="filter-2">
                        <feOffset dx="0" dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                        <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                        <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
                    </filter>
                    <path d="M12.1992257,40.6908993 L1.66290646,40.6908993 L2.1168305,38.2232244 L16.0100006,38.2232244 L17.8905431,28 L23.0090795,28 L21.128537,38.2232244 L31,38.2232244 L30.546076,40.6908993 L23.0166857,40.6908993 L28.9066481,47.0434462 L28.7306918,48 L22.6840337,48 L17.3790049,42.8103621 L8.07917382,48 L1,48 L1.2120579,46.8471861 L12.1992257,40.6908993 Z M7.11505594,28.2958292 L12.7840837,28.2958292 L13.4818825,32.4880189 L8.23599153,32.4880189 L7.11505594,28.2958292 Z M3.55633415,33.3526696 L8.81187928,33.3526696 L10.0169235,37.3006654 L4.59289148,37.3006654 L3.55633415,33.3526696 Z" id="path-3"></path>
                    <filter x="-21.7%" y="-27.5%" width="143.3%" height="165.0%" filterUnits="objectBoundingBox" id="filter-4">
                        <feOffset dx="0" dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                        <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                        <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
                    </filter>
                    <path d="M9.41350991,0 L63.5256236,0 L60.3653461,19.4098796 C59.9268698,22.1029249 57.6217091,24 54.7878308,24 L0.675717093,24 L3.83599465,4.59012038 C4.27447086,1.89707509 6.57963159,3.55413818e-15 9.41350991,0 Z" id="path-5"></path>
                    <filter x="-10.3%" y="-22.9%" width="120.7%" height="154.2%" filterUnits="objectBoundingBox" id="filter-6">
                        <feOffset dx="0" dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                        <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                        <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
                    </filter>
                </defs>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="门店详情" transform="translate(-10.000000, -725.000000)">
                        <g id="Group-25" transform="translate(14.000000, 728.000000)">
                            <g id="Combined-Shape">
                                <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1"></use>
                                <use fill="#000000" fill-rule="evenodd" xlink:href="#path-1"></use>
                            </g>
                            <g id="Combined-Shape">
                                <use fill="black" fill-opacity="1" filter="url(#filter-4)" xlink:href="#path-3"></use>
                                <use fill="#000000" fill-rule="evenodd" xlink:href="#path-3"></use>
                            </g>
                            <g id="Group-7">
                                <g id="Rectangle-72">
                                    <use fill="black" fill-opacity="1" filter="url(#filter-6)" xlink:href="#path-5"></use>
                                    <use fill="#FE4D3D" fill-rule="evenodd" xlink:href="#path-5"></use>
                                </g>
                                <path d="M20.5324463,12.758704 L20.9769486,10.2229206 L13.6366547,10.2229206 L14.0255942,8.00411012 L21.3658881,8.00411012 L21.7707169,5.69465527 L15.170967,5.81205124 L15.5569649,3.61002213 L33.3874766,3.23044524 L32.9905047,5.49507832 L26.5728384,5.6092354 L26.1530363,8.00411012 L33.1741869,8.00411012 L32.7852474,10.2229206 L25.7640967,10.2229206 L25.3195944,12.758704 L31.7024586,12.758704 L30.2578261,21 L12.3858063,21 L13.8304388,12.758704 L20.5324463,12.758704 Z M18.2286475,14.9775144 L17.561894,18.7811895 L26.1787607,18.7811895 L26.8455142,14.9775144 L18.2286475,14.9775144 Z M8.9418792,3 L13.2653679,3 L13.6671433,7.58382391 L9.37864237,7.58382391 L8.9418792,3 Z M8.28453962,8.74499427 L12.6953285,8.74499427 L12.871361,12.7995484 L8.5369277,12.7995484 L8.28453962,8.74499427 Z M7.87517992,14.4613622 L12.5115261,14.4613622 L10.1631946,20.9205314 L5.48414837,20.9205314 L7.87517992,14.4613622 Z" id="Combined-Shape" fill="#FAFAFA"></path>
                                <path d="M48.3413672,5.22705897 L46.5088217,5.22583082 L46.1335463,7.37324784 L47.7542559,7.37324784 L44.046275,20.9277946 L48.5694916,20.9277946 L52.2728446,7.37324784 L53.721608,7.37324784 L51.7280861,18.7806647 L50.7361054,21 L55.4700845,21 L56.5318083,18.7806647 L58.8991544,5.23413473 L52.8583959,5.23008625 L53.4676968,3 L48.9506013,3 L48.3413672,5.22705897 Z M38.5683806,11.8323488 L44.9411195,11.8323488 L45.3297962,9.60824624 L32.5599901,9.60824624 L32.1713134,11.8323488 L34.1422222,11.8323488 L30.8243572,20.8938066 L43.152763,20.8938066 L43.8146965,14.0389728 L39.3557493,14.0389728 L38.9381071,18.884139 L36.3420098,18.884139 L38.5683806,11.8323488 Z M33.9342149,3.57139648 L46.0655307,3.57139648 L45.676854,5.79549902 L33.5455382,5.79549902 L33.9342149,3.57139648 Z" id="Combined-Shape" fill="#FAFAFA"></path>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        </div>
      </div>
      <div class="notice-marquee">
        <div class="notice-marquee-wraper">
          <div class="line line1">
            <marquee :item-height="20">
              <marquee-item v-for="(item,index) in activity_list1" :key="index">
                <router-link :to="'/'+item.link">
                  <span class="fa fa-circle"></span>{{item.title}}</router-link>
              </marquee-item>
            </marquee>
          </div>
          <div class="line">
            <marquee :item-height="20">
              <marquee-item v-for="(item,index) in activity_list2" :key="index">
                <router-link :to="'/'+item.link">
                  <span class="fa fa-circle"></span>{{item.title}}</router-link>
              </marquee-item>
            </marquee>
          </div>
        </div>
      </div>
      <!-- <div class="btn">
        <div class="icon">
          <i class="fa fa-drivers-license-o "></i>
        </div>
        <div class="txt">我的预约</div>
      </div> -->
    </div>
    <!-- notice end-->
    <!-- my-wallet start-->
    <my-vcards @updateData="update" :cardGoods="cardGoods" :myvcards="myvcards"></my-vcards>

    <!-- my-wallet end-->
    <!-- Coupon start-->
    <div class="coupon">
      <!-- <div class="coupon-wrapper">
        <div class="hd">
          <div class="title">
            <span class="icon">
              <i class="fa fa-credit-card"></i>
            </span>
            <span class="txt">
              我的优惠券
            </span>
          </div>
          <div class="link">
            更多优惠券
            <span class="fa fa-angle-right"></span>
          </div>
        </div>
        <div class="bd">
          <div class="card-list">
            <div class="mycard" slot="mycard">
              <div class="card-content">
                <svg width="130px" height="144px" viewBox="0 0 130 144" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <title>Combined Shape</title>
                  <desc>Created with Sketch.</desc>
                  <defs>
                    <path d="M150,1033 L150,1062 C150,1063.65685 148.656854,1065 147,1065 L23,1065 C21.3431458,1065 20,1063.65685 20,1062 L20,1033 C23.3137085,1033 26,1030.31371 26,1027 C26,1023.68629 23.3137085,1021 20,1021 L20,924 L20,924 C20,922.343146 21.3431458,921 23,921 L23,921 L147,921 C148.656854,921 150,922.343146 150,924 L150,1021 C146.686292,1021 144,1023.68629 144,1027 C144,1030.31371 146.686292,1033 150,1033 Z" id="path-1"></path>
                    <mask id="mask-2" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" x="0" y="0" width="130" height="144" fill="white">
                      <use xlink:href="#path-1"></use>
                    </mask>
                  </defs>
                  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-dasharray="5">
                    <g id="我的2" transform="translate(-20.000000, -921.000000)" stroke="#979797" stroke-width="2">
                      <use id="Combined-Shape" mask="url(#mask-2)" xlink:href="#path-1"></use>
                    </g>
                  </g>
                </svg>
                <div class="card-content-wrapper">
                  <p class="title">
                    还没有券
                  </p>
                  <p class="des">
                    去看优惠券
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="goods-list">
            <div class="shopcard" v-for="(item,index) in cardGoods" :key="index" :class="item.styleClass">

              <div class="card-content">
                <svg viewBox="0 0 130 144" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <title>Combined Shape</title>
                  <desc>Created with Sketch.</desc>
                  <defs></defs>
                  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="我的2" transform="translate(-181.000000, -921.000000)" fill="#FFFFFF">
                      <path d="M311,1033 L311,1062 C311,1063.65685 309.656854,1065 308,1065 L184,1065 C182.343146,1065 181,1063.65685 181,1062 L181,1033 C184.313708,1033 187,1030.31371 187,1027 C187,1023.68629 184.313708,1021 181,1021 L181,924 L181,924 C181,922.343146 182.343146,921 184,921 L184,921 L308,921 C309.656854,921 311,922.343146 311,924 L311,1021 C307.686292,1021 305,1023.68629 305,1027 C305,1030.31371 307.686292,1033 311,1033 Z" id="Combined-Shape"></path>
                    </g>
                  </g>
                </svg>
                <p class="title">
                  {{item.name}}
                </p>
              </div>
              <div class="btn">去购买</div>
            </div>
          </div>

        </div>
      </div> -->
      <given-vcards class="coupon-wrapper" @updateData="update" :type="2" :cardGoods="cardGoods" :givenvcards="givenvcards"></given-vcards>
      <div class="master" v-show="master.photo">
        <div class="qrcode-img">
          <img src="../assets/qrcode_zx1.jpg" alt="">
        </div>
        <div class="corner">
        </div>
        <div class="line user">
          <div class="avatar">
            <img :src="master.photo">
          </div>
          <div class="info">
            <div class="name">
              {{master.nickname}}
            </div>
            <div class="des">
              {{master.exp_str}}
            </div>
          </div>

        </div>
        <div class="line skill">
          <div class="skill-hd">
            擅长
          </div>
          <div class="skill-bd">
            {{master.skill}}
          </div>
        </div>
        <div class="line btn">
          <span class="fa fa-commenting"></span>
          <span>立即咨询</span>
        </div>
      </div>
    </div>
  
    <!-- Coupon end-->
    <!-- record start-->
    <!-- <div class="record">
      <div class="hd">
        <div class="title">
          <span class="txt">
            近期使用记录
          </span>
        </div>
        <div class="link">
          更多记录
          <span class="fa fa-angle-right"></span>
        </div>
      </div>
      <div class="bd">
        <div class="line">
          <div class="content">
            <p class="title">
              购买洗车卡 闲时卡*3
            </p>
            <p class="time">
              昨天 07:08
            </p>
          </div>
          <div class="price">
            -186.00
          </div>
        </div>
        <div class="line">
          <div class="content">
            <p class="title">
              购买洗车卡 闲时卡*3
            </p>
            <p class="time">
              昨天 07:08
            </p>
          </div>
          <div class="price">
            -186.00
          </div>
        </div>
        <div class="line">
          <div class="content">
            <p class="title">
              购买洗车卡 闲时卡*3
            </p>
            <p class="time">
              昨天 07:08
            </p>
          </div>
          <div class="price">
            -186.00
          </div>
        </div>
        <div class="line">
          <div class="content">
            <p class="title">
              购买洗车卡 闲时卡*3
            </p>
            <p class="time">
              昨天 07:08
            </p>
          </div>
          <div class="price">
            -186.00
          </div>
        </div>
      </div>

    </div> -->

    <consumption-list :consumptionList="consumptionList"></consumption-list>
    <!-- record end-->
    <recommend-list></recommend-list>
    <!-- <div class="add-car">
      <flexbox :gutter="0" style="padding:5px;" @click.native="kaifa">
        <flexbox-item :span="1/5">
          <div class="icon">
            <img class="icon-img" src="../../static/image/add.png">
          </div>
        </flexbox-item>
        <flexbox-item :span="7/10">
          <h2>添加我的爱车</h2>
          <p style="color:#9C9C9C;padding-top:5px;">想要更多服务？快来添加爱车</p>
        </flexbox-item>
        <flexbox-item :span="1/10">
          <span class="des">></span>
        </flexbox-item>
      </flexbox>
    </div> -->

    <!-- <div style="background-color:#fff;">
      <grid style="margin-top:5px;">
        <grid-item label="我的洗车卡" link="/my_wash_card_list">
          <img slot="icon" src="../../static/image/5.png">
        </grid-item>
        <grid-item label="服务记录" link="/order_detail/Snorder120171223151804A12345">
          <img slot="icon" src="../../static/image/6.png">
        </grid-item>
        <grid-item label="我的订单" @click.native="kaifa">
          <img slot="icon" src="../../static/image/7.png">
        </grid-item>
        <grid-item label="商城产品" link="/cat_select">
          <img slot="icon" src="../../static/image/8.png">
        </grid-item>
      </grid>
      <grid style="margin-top:5px;">
        <grid-item label="收货地址" link="/my_receive_address">
          <img slot="icon" src="../../static/image/5.png">
        </grid-item>
      </grid>
    </div> -->
    <common-bottom></common-bottom>

  </div>

</template>

<script>
import {
  Grid,
  GridItem,
  Swiper,
  SwiperItem,
  GroupTitle,
  FlexboxItem,
  Cell,
  Marquee,
  MarqueeItem,
  TransferDom,
  Flexbox
} from "vux";
import api from "api/api";
import recommendList from "components/goods/recommend";
import myVcards from "components/vcard/vcardGroup";
import givenVcards from "components/vcard/givenVcardGroup";
import consumptionList from "components/vcard/consumptionGroup";

export default {
  name: "My",
  directives: {
    TransferDom
  },
  components: {
    Grid,
    recommendList,
    consumptionList,
    myVcards,
    givenVcards,
    GridItem,
    Swiper,
    SwiperItem,
    Marquee,
    MarqueeItem,
    GroupTitle,
    FlexboxItem,
    Cell,
    Flexbox
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      customer: {
        cname: "小矮人客户",
        cavatar: "../../static/image/cavatar.png"
      },
      showdetail: false,
      master: {
        exp_str: "",
        link: "",
        nickname: "",
        openid: "",
        photo: "",
        skill: ""
      },
      activity_list: [],
      cardGoods: [],
      myvcards: [],
      consumption: [],
      givenvcards: [],
      consumptionList: []
    };
  },
  activated: function() {},
  computed: {
    activity_list1: function() {
      return this.activity_list.filter((item, index) => index % 2 === 0);
    },
    activity_list2: function() {
      return this.activity_list.filter((item, index) => index % 2 !== 0);
    }
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      this.fetchData();
      const activeResult = await api.userHomeList();
      // const couponResult = await api.getCouponByUser();
      // const ReCouponResult = await api.getRecommendCoupon();
      const RemasterResult = await api.getMasterInMy();

      const { list: activity_list } = activeResult.data;
      this.activity_list = activity_list;
      this.master = RemasterResult.data;

      // -----我的卡片组件
      const cardResult = await api.getVcardsByUser();
      const ReCardResult = await api.getRecommendVcards();
      this.cardGoods = ReCardResult.data.list.map((item, index) => {
        item.styleClass = `card${index * 1 + 1}`;
        return item;
      });
      this.myvcards = cardResult.data.list.map((item, index) => {
        item.styleClass = `card${index * 1 + 1}`;
        return item;
      });
      // ----我获赠的卡片
      const givenCardResult = await api.getMyGive({ type: 0, status: 1 });

      if (givenCardResult.data.list) {
        this.givenvcards = givenCardResult.data.list.map((item, index) => {
          item.styleClass = `card${index * 1 + 1}`;
          item.card_code = item.card_code;
          item.vc_id = item.vc_id;
          return item;
        });
      }

      const consumptionResult = await api.getConsumptionList({
        type: "vcard"
      });
      // console.log(this.consumptionList, 'consumptionList');
      this.consumptionList = consumptionResult.data.list;
    },
    update() {
      // console.log('update');
    },
    fetchData: function() {
      var self = this;
      this.xarpost("Customer/getCustomer").then(d => {
        let { data, error, message } = d;
        self.customer = data;
      });
    },
    kaifa: function() {
      this.showtoast("功能开发中...");
    }
  },
  watch: {
    $router: function() {
      this.init();
    }
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "~styles/index.less"; // 全局自定义样式

.page-my {
  .new-header {
    height: 2.8rem;
    width: 100%;
    background-color: #ffd100;
    position: relative;
    .name {
      font-size: 0.38rem;
      color: #272727;
      letter-spacing: 0;
      line-height: 0.44rem;
      position: absolute;
      top: 1.11rem;
      left: 2.2rem;
    }
    .cavatar {
      width: 1.5rem;
      height: 1.5rem;
      border: 0.05rem solid #fff;
      border-radius: 50%;
      position: absolute;
      top: 0.89rem;
      left: 0.36rem;
    }
    .setting {
      width: 0.42rem;
      height: 0.42rem;
      position: absolute;
      left: 6.84rem;
      bottom: 2.19rem;
    }
    .xingji {
      width: 0.32rem;
      height: 0.32rem;
      position: absolute;
      left: 2.2rem;
      top: 1.7rem;
    }
    .star {
      position: absolute;
      left: 2.61rem;
      top: 1.72rem;
      font-size: 0.2rem;
    }
  }
  .add-car {
    margin: 5px 0;
    background-color: #fff;
  }
  .add-car .icon {
    margin: 10px;
    background-color: #ffd100;
    width: 50px;
    height: 50px;
    border-radius: 2px;
  }
  .add-car .icon .icon-img {
    width: 20px;
    height: 20px;
    padding: 15px;
  }
  .des {
    /*text-align: center;*/
    vertical-align: center;
    line-height: 32px;
    font-size: 16px;
  }
  .header {
    width: 100%;
    background-color: #fff;
  }
  .option {
    padding: 20px;
    text-align: center;
  }
  .option-item {
    width: 20%;
    display: inline-block;
  }
  .logo {
    position: absolute;
    text-align: center;
    width: 90px;
    height: 90px;
    top: 80px;
    left: 0;
    right: 0;
    margin: auto;
    background-color: #999;
    border-radius: 50%;
    border: 2px solid #fff;
  }
  .my-header {
    position: relative;
  }
  .my-header .name {
    position: absolute;
    top: 10px;
    left: 15px;
    font-size: 16px;
  }
  .my-header .star {
    position: absolute;
    top: 45px;
    left: 15px;
    font-size: 14px;
  }
  .my-header .cavatar {
    width: 17%;
    height: auto;
    position: absolute;
    top: 46px;
    left: 41.5%;
    border-radius: 50%;
  }
  .setting {
    position: absolute;
    right: 20px;
    top: 20px;
    width: 25px;
    height: 25px;
  }
  .my-header .back {
    background-color: #fff;
    margin: 0px;
    width: 100%;
    height: 110px;
  }
  .header-redis {
    background-color: #fff;
    bottom: 0px;
    width: 100%;
    text-align: center;
    vertical-align: center;
    margin: 0px;
  }
}
.page-my {
  .new-header {
    .ad {
      width: 1.5rem;
      padding: 0 0.1rem;
      height: 0.7rem;
      position: absolute;
      right: 0;
      top: 1.4rem;
      margin-top: -0.35rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: #272727;
      color: #ffffff;
      border-radius: 0.35rem 0 0 0.35rem;
      &-left {
        background: #000000;
        border-radius: 50%;
        width: 0.5rem;
        height: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      &-right {
        font-size: 0.2rem;
      }
    }
  }
  .notice,
  .wallet,
  .record,
  .recommend,
  .coupon {
    margin-bottom: 0.1rem;
    line-height: 0.7rem;
    font-size: 0.28rem;
    background: #fff;
    .hd {
      border-bottom: 1px solid #eaeaea;
      height: 0.7rem;
      line-height: 0.7rem;
      padding: 0 0.24rem;
      display: flex;
      justify-content: space-between;
      .link {
        color: @graycolor;
        font-size: 0.22rem;
        .fa {
          margin-left: 0.05rem;
          font-size: 0.4rem;
          vertical-align: -2px;
        }
      }
    }
  }
  .notice {
    font-size: 0.2rem;
    // margin-top: 2rem;
    display: flex;
    &-logo {
      font-size: 0.3rem;
      height: 1rem;
      color: #fe4d3d;
      flex: 0 0 0.86rem;
      line-height: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      border-right: 1px solid @gray;
      svg{
        width: .8rem;
      }
    }
    &-marquee {
      flex: 0 0 5.12rem;
      height: 1rem;
      display: flex;
      align-items: center;
      &-wraper {
        width: 100%;
        .line {
          padding-left: 10px;
          height: 20px;
          overflow: hidden;
          .fa {
            font-size: 0.14rem;
            margin-right: 3px;
            color: #fe4d3d;
            vertical-align: middle;
          }
          li {
            line-height: 20px;
            font-size: 0.24rem;
          }
          &.line1 {
            border-bottom: 1px solid @gray;
          }
        }
      }
    }
    .btn {
      text-align: center;
      border-left: 1px solid @gray;
      padding-left: 0.2rem;
      margin-left: 0.1rem;

      .icon {
        font-size: 0.4rem;
      }
      .txt {
        line-height: 1;
        font-size: 0.24rem;
      }
    }
  }

  .coupon {
    background: none;
    display: flex;
    justify-content: space-between;
    .coupon-wrapper {
      background: #fff;
      width: 4.9rem;
      .bd {
        height: 2.09rem;
        background: #fafafa;
        display: flex;
        padding-top: 0.3rem;
        padding-left: 0.3rem;

        .card-list {
          flex: 0 0 1.3rem;
          .mycard {
            overflow: auto;
            .card-content {
              // border: 1px dashed #979797;
              position: relative;
              svg {
                position: absolute;
                top: 0;
                left: 0;
                width: 99%;
                height: 100%;
              }
              // background: url('../assets/coupon.svg')
              border-radius: 7px;
              width: 1.3rem;
              height: 1.5rem;
              text-align: center;
              display: flex;
              align-items: center;
              justify-content: center;

              p.title {
                font-size: 0.24rem;
              }
              p.des {
                font-size: 0.2rem;
                line-height: 1;
              }
            }
          }
        }
        .goods-list {
          overflow: auto;
          display: flex;
          padding-left: 0.15rem;
          .shopcard {
            width: 1.3rem;
            margin: 0 0.15rem;
            height: 1.44rem;
            position: relative;
            svg {
              position: absolute;
              top: 1px;
              left: 0;
              width: 100%;
              height: 100%;
              box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
            }
            .title {
              text-align: center;
              width: 1.5rem;
              height: 1rem;
              line-height: 1rem;
              color: #fff;
              border-radius: 0.05rem;
              z-index: 100;
              position: relative;
            }
            .btn {
              position: relative;
              text-align: center;
              font-size: 0.2rem;
              color: @red;
              height: 0.4rem;
              line-height: 0.4rem;
              border-top: 1px dashed @gray;
              z-index: 100;
            }
            &.card1 .title {
              // background: @dark;
            }
            &.card2 .title {
              // background: @red;
            }
            &.card3 .title {
              // background: @yellow;
            }
          }
        }
        .master {
          width: 2.56rem;
          height: 2.6rem;
          background: #fff;
        }
      }
    }
    .master {
      width: 2.1rem;
      height: 2.72rem;
      background: #fff;
      border-radius: 4px;
      overflow: hidden;
      box-shadow: 0px 0px 10px #fff;
      padding: 0.2rem;
      position: relative;
      .qrcode-img {
        img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
      .corner {
        width: 0;
        height: 0;
        position: absolute;
        left: 0;
        top: 0;
        border-top: 0.26rem solid #37b3ff;
        border-right: 0.26rem solid transparent;
      }
      .line {
        width: 100%;
      }
      .user {
        display: flex;
        align-items: center;
        justify-content: space-between;
        display: none;
        .avatar {
          width: 0.9rem;
          height: 0.9rem;
          img {
            width: 100%;
            border-radius: 50%;
          }
        }
        .info {
          display: none;

          width: 1rem;
          .name {
            line-height: 2;
            font-size: 0.3rem;
          }
          .des {
            font-size: 0.22rem;
            color: @graycolor;
            line-height: 1;
          }
        }
      }
      .skill {
        
        display: flex;
        display: none;
        line-height: 1.5;
        font-size: 0.22rem;
        &-hd {
          flex: 0 0 0.6rem;
        }
        &-bd {
          padding-left: 0.1rem;
        }
      }
      .btn {
        display: none;

        width: 1.5rem;
        height: 0.4rem;
        line-height: 0.4rem;
        border-radius: 0.2rem;
        font-size: 0.2rem;
        margin: 0 auto;
        text-align: center;
        color: #fff;
        margin-top: 0.3rem;
        background: #fe4d3d;
      }
    }
  }
  .record {
    .bd {
      background: #fafafa;
      .line {
        padding: 0.2rem;
        display: flex;
        border-bottom: 1px solid @gray;
        justify-content: space-between;
        .time {
          color: @graycolor;
          line-height: 1;
        }
      }
    }
  }
  .recommend {
    .bd {
      padding: 0.1rem;
      background: #fafafa;
      .goods {
        width: 100%;
        display: flex;
        justify-content: space-between;
        .pic {
          width: 2.3rem;
          height: 2.3rem;
          background: #ccc;
          margin: 0 auto;
        }
        .title {
          font-size: 0.28rem;
          color: #909090;
          padding: 0.2rem 0;
          line-height: 1.2;
        }
        .price {
          color: @red;
          line-height: 1.5;
        }
      }
    }
  }
  // ===================vux-cpts
}
</style>
