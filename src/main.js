// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import "isomorphic-fetch";
import FastClick from "fastclick";
import VueRouter from "vue-router";
import GoBackTop from "components/common/goBackTop";
import Scroller from "vue-scroller";
import Promise from "promise";
import App from "./App";
import store from "./store";
import myfetch from "./utils/fetch.js";
import setWechatTitle from "./utils/setWechatTitle.js";

import request from "@/utils/request";

var VueCookie = require("vue-cookie");
import { WechatPlugin, AjaxPlugin, LoadingPlugin } from "vux";

import commonBottom from "components/common/commonBottom";
import slideUp from "components/common/slideUp";
//  页面加载时
import My from "./view/my";
import Tmap from "./view/tmap";
Vue.use(VueRouter);
Vue.use(WechatPlugin);
Vue.use(AjaxPlugin);
Vue.use(LoadingPlugin);

// 通用底部
Vue.use(GoBackTop);
Vue.use(commonBottom);
Vue.use(slideUp);

Vue.component("common-bottom", commonBottom);
Vue.component("slide-up", slideUp);
// Vue.use(ConfirmPlugin)
Vue.use(VueCookie);
var site_url = "http://mall.gotomore.cn/";
var api_url = "https://xcxcgj.gotomore.cn/";
Vue.prototype.home_url = "https://mall.gotomore.cn/index.html#/";
Vue.prototype.site_url = site_url;
Vue.prototype.api_url = api_url;

Vue.prototype.xarpost = myfetch;
const routes = [
  {
    path: "/",
    component: function(resolve) {
      require(["./view/shop.vue"], resolve);
    },
    name: "门店"
  },
  {
    path: "/home/:token/:redirectUrl",
    redirect: to => {
      var token = to.params.token;
      var redirectUrl = to.params.redirectUrl;
      console.log(token);
      console.log(redirectUrl);
      // store.commit('updateOpenid', {openid: params_openid})
      store.commit("updatetoken", token);
      VueCookie.set("access_token", token, { expires: "12h" });
      // fetch('customer/syncLzUser', {openid: params_openid}).then((d) => {
      //   let {data, error, message} = d
      //   store.commit('updatetoken', data)
      // })
      return decodeURIComponent(redirectUrl);
    }
  },
  {
    path: "/my",
    component: My,
    name: "我的"
  }, {
    path: "/qr_activity",
    component: function(resolve) {
      require(["./view/activity/qr_activity.vue"], resolve);
    },
    name: "活动推广二维码"
  },
  {
    path: "/message",
    component: function(resolve) {
      require(["./view/message.vue"], resolve);
    },
    name: "消息提醒"
  },
  {
    path: "/myvcard",
    component: function(resolve) {
      require(["./view/vcard/myvcard.vue"], resolve);
    },
    name: "我的洗车卡"
  },
  {
    path: "/tmap",
    component: Tmap,
    name: "门店"
  },
  {
    path: "/shop",
    component: function(resolve) {
      require(["./view/shop.vue"], resolve);
    },
    name: "商城",
    meta: { keepAlive: true }
  },
  {
    path: "/vcard/:id",
    component: function(resolve) {
      // require(["./view/goods/goodsVcard.vue"], resolve);
      // 20180113 由于只有局部样式不一致 采用统一入口页面在获取到的proinfo中 通过type判断虚拟产品和实物产品
      require(["./view/goods/goods.vue"], resolve);
    },
    name: "全城洗车卡"
  },
  {
    path: "/goods/:id",
    component: function(resolve) {
      require(["./view/goods/goods.vue"], resolve);
    },
    name: "商品"
  },
  {
    path: "/comment/:out_trade_no/:extra_type/:extra_id",
    component: function(resolve) {
      require(["./view/goods/comment.vue"], resolve);
    },
    name: "评价"
  },
  {
    path: "/newcomment/",
    component: function(resolve) {
      require(["./view/goods/newcomment.vue"], resolve);
    },
    name: "评价"
  },
  {
    path: "/my_wash_card_list",
    component: function(resolve) {
      require(["./view/my/wash_card_list.vue"], resolve);
    },
    name: "我的卡包"
  },

  {
    path: "/my_receive_address",
    component: function(resolve) {
      require(["./view/my/my_receive_address.vue"], resolve);
    },
    name: "我的收货地址"
  },
  {
    path: "/my_receive_address_edit",
    component: function(resolve) {
      require(["./view/my/my_receive_address_edit.vue"], resolve);
    },
    name: "新增收货地址"
  },
  {
    path: "/my_receive_address_edit/:add_id",
    component: function(resolve) {
      require(["./view/my/my_receive_address_edit.vue"], resolve);
    },
    name: "编辑收货地址"
  },
  {
    path: "/cat_select",
    component: function(resolve) {
      require(["./view/shop/catSelect.vue"], resolve);
    },
    name: "卡片详情"
  },
  {
    path: "/prolist/:cat_id",
    component: function(resolve) {
      require(["./view/shop/prolist.vue"], resolve);
    },
    name: "商品列表"
  },
  {
    path: "/wash_card_detail/:id",
    component: function(resolve) {
      require(["./view/my/wash_card_detail.vue"], resolve);
    },
    name: "卡片详情"
  },
  {
    path: "/order_detail/:id",
    component: function(resolve) {
      require(["./view/carorder/order_detail.vue"], resolve);
    },
    name: "接车单详情"
  },
  {
    path: "/giveVcard/:card_code",
    component: function(resolve) {
      require(["./view/vcard/giveVcard.vue"], resolve);
    },
    name: "朋友赠送的洗车卡"
  },
  {
    path: "/useRecord",
    component: function(resolve) {
      require(["./view/vcard/useRecord.vue"], resolve);
    },
    name: "使用记录"
  },
  {
    path: "/buySuccess",
    component: function(resolve) {
      require(["./view/vcard/buySuccess1.vue"], resolve);
    },
    name: "购买成功"
  },
  {
    path: "/shopinfo",
    component: function(resolve) {
      require(["./view/shop/shopinfo.vue"], resolve);
    },
    name: "店铺信息"
  },
  {
    path: "/shopuser",
    component: function(resolve) {
      require(["./view/shop/shopUser.vue"], resolve);
    },
    name: "店铺信息"
  },
  {
    path: "/salaryRecord",
    component: function(resolve) {
      require(["./view/my/salary_record.vue"], resolve);
    },
    name: "我的收益"
  },

  {
    path: "/myVcards",
    redirect: "/myVcards/index",
    component: function(resolve) {
      require(["./view/vcard/index.vue"], resolve);
    },
    children: [
      {
        path: "index",
        component: function(resolve) {
          require(["./view/vcard/myVcards.vue"], resolve);
        },
        name: "我的卡包"
      },
      {
        path: "vcard/:id",
        component: function(resolve) {
          require(["./view/vcard/vcardDetail.vue"], resolve);
        },
        name: "卡片详情"
      },
      {
        path: "orderlist",
        component: function(resolve) {
          require(["./view/vcard/orderList.vue"], resolve);
        },
        name: "卡片详情"
      },
      {
        path: "vcardlist",
        component: function(resolve) {
          require(["./view/vcard/myVcardList.vue"], resolve);
        },
        name: "我的卡片列表"
      },
      {
        path: "givinglist",
        component: function(resolve) {
          require(["./view/vcard/myVcardList.vue"], resolve);
        },
        name: "我的赠送"
      },
      {
        path: "givenlist",
        component: function(resolve) {
          require(["./view/vcard/myVcardList.vue"], resolve);
        },
        name: "获赠列表"
      },
      {
        path: "givenVcard/:card_code",
        component: function(resolve) {
          require(["./view/vcard/givenVcardDetail.vue"], resolve);
        },
        name: "获赠卡片详情"
      }
    ]
  },
  {
    path: "/sale",
    redirect: "/sale/paintrepair",
    component: function(resolve) {
      require(["./view/vcard/index.vue"], resolve);
    },
    children: [
      {
        path: "paintrepair/",
        component: function(resolve) {
          require(["./view/vcard/paintRepair.vue"], resolve);
        },
        name: "做漆卡",
        meta: { keepAlive: true }
      },
      {
        path: "shopActivity0122/",
        component: function(resolve) {
          require(["./view/sale/shopActivity0122-1.vue"], resolve);
        },
        name: "老客户回馈",
        meta: { keepAlive: true }
      },
      {
        path: "shopActivity0122getBonus/",
        component: function(resolve) {
          require(["./view/sale/shopActivity0122-2.vue"], resolve);
        },
        name: "老客户回馈",
        meta: { keepAlive: true }
      }
    ]
  },
  {
    path: "/commentList",
    component: function(resolve) {
      require(["./view/comment/commentList.vue"], resolve);
    },
    name: "评价"
  },
  {
    path: "/activity/detail/:art_id",
    name: "活动",
    component: function(resolve) {
      require(["./view/activity/detail.vue"], resolve);
    }
  },
  {
    path: "/cat_select",
    name: "活动",
    component: function(resolve) {
      require(["./view/shop/cat_select.vue"], resolve);
    }
  },
  {
    path: "/esc/:id",
    component: function(resolve) {
      require(["./view/esc.vue"], resolve);
    },
    name: "二手车检测认证"
  },
  {
    path: "/receive_conpon/:id",
    component: function(resolve) {
      require(["./view/receive_conpon.vue"], resolve);
    },
    name: "小矮人中石化易捷加油礼包"
  }
];
const router = new VueRouter({
  routes: routes
});
if (process.env.NODE_ENV === "development") {
  // store.commit('updateOpenid', {openid: 'oux15wmbP9OGLXxbQ7qgff1zm7Fg'})
  // fetch('customer/syncLzUser', {openid: 'oux15wmbP9OGLXxbQ7qgff1zm7Fg'}).then((d) => {
  //   let {data, error, message} = d
  //   store.commit('updatetoken', data)
  // })
  var token = "0a9ef945f355880d44be9ac42ca56d48";
  store.commit("updatetoken", token);
  VueCookie.set("access_token", token, {
    expires: "12h"
  });

  store.commit("updateLocation", {
    latitude: 25.087526,
    longitude: 102.720859
  });
}
const history = window.sessionStorage;
history.clear();
let historyCount = history.getItem("count") * 1 || 0;
history.setItem("/", 0);
var is_request_wxinfo = 0;
const wx = Vue.wechat;
const url = document.location.href;
const http = Vue.http;
http
  .post(
    api_url +
      "api.php?s=Wechat/getJssdk&url=" +
      encodeURIComponent(url.split("#")[0])
  )
  .then(res => {
    var config = res.data.data;
    wx.config(config);
  });
Vue.prototype.setWxShare = function(
  title = "离你最近的汽车服务专家",
  desc = "您的爱车，服务交给我们啦！",
  link = site_url + "index.html#/",
  imgUrl = "https://xcxcgj.gotomore.cn/static/image/xarlogo.jpg"
) {
  wx.ready(() => {
    wx.onMenuShareTimeline({
      title: title + " - 小矮人汽车", // 分享标题
      desc: desc,
      link: link,
      imgUrl: imgUrl
    });
    wx.onMenuShareAppMessage({
      title: title + " - 小矮人汽车", // 分享标题
      desc: desc,
      link: link,
      imgUrl: imgUrl
    });
  });
};
function directRightUrl () {
  let paths = window.location.href.split('#')
  paths[1] = paths[1] || '/'
  if (paths[0].charAt(paths[0].length - 1) !== '?') {
    paths[0] = `${paths[0]}?`
  }
  if (paths[1].charAt(0) === '!') {
     paths[1] = paths[1].substr(1)
  }
  let url = `${paths[0]}#${paths[1]}`
  if (window.location.href !== url) {
    window.location.href = url
  }
}
router.beforeEach((to, from, next) => {
  var openid = VueCookie.get("openid");
  var userinfo = VueCookie.get("userinfo");
  var access_token = VueCookie.get("access_token");
  var openid = store.state.vux.openid;
  var userinfo = store.state.vux.userinfo;
  if (!access_token) {
    var url_path = encodeURIComponent(to.fullPath);
    location.href =
      "https://xcxcgj.gotomore.cn/api.php?s=Customer/wxLogin&state=" + url_path;
    return;
  }
  directRightUrl();
  const toIndex = history.getItem(to.path);
  const fromIndex = history.getItem(from.path);
  if (toIndex) {
    if (
      !fromIndex ||
      parseInt(toIndex, 10) > parseInt(fromIndex, 10) ||
      (toIndex === "0" && fromIndex === "0")
    ) {
      store.commit("updateDirection", { direction: "forward" });
    } else {
      store.commit("updateDirection", { direction: "reverse" });
    }
  } else {
    ++historyCount;
    history.setItem("count", historyCount);
    to.path !== "/" && history.setItem(to.path, historyCount);
    store.commit("updateDirection", { direction: "forward" });
  }
  if (!store.getters.userInfo.unionid) {
    // 判断是否有token

    Vue.prototype.setWxShare();
    // next({ path: "/errorFailed" });
    store.dispatch("getUserInfo").then(() => {
      if (/\/https/.test(to.path)) {
        const url = to.path.split("https")[1];
        window.location.href = `https${url}`;
      } else {
        // next();
      }
    });
  } else {
    if (/\/https/.test(to.path)) {
      const url = to.path.split("https")[1];
      window.location.href = `https${url}`;
    } else {
      // next();
    }
  }
  next();
});
Vue.prototype.getLocation = function(showLoading = true) {
  var self = this;
  return new Promise(function(resolve, reject) {
    var location = store.state.vux.location;
    if (location.latitude && location.longitude) {
      resolve(location);
    } else {
      if (showLoading) {
        self.$vux.loading.show({
          text: "定位中..."
        });
      }
      wx.ready(() => {
        wx.getLocation({
          type: "gcj02", // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
          success: function(d) {
            // console.log(d);
            resolve(d);
          },
          cancel: function(res) {
            showtoast("用户拒绝获取地理位置信息");
            reject(res);
          },
          complete: function(res) {
            self.$vux.loading.hide();
          }
        });
      });
    }
  });
};

Vue.prototype.setWechatTitle = setWechatTitle;
router.afterEach(transition => {
  let title = transition.name + " - 小矮人汽车";
  setWechatTitle(title);
  store.commit("updateLoadingStatus", { isLoading: false });

  (function (m, ei, q, i, a, j, s) {
    m[i] = m[i] || function () {
      (m[i].a = m[i].a || []).push(arguments)
    };
    j = ei.createElement(q),
      s = ei.getElementsByTagName(q)[0];
    j.async = true;
    j.charset = 'UTF-8';
    j.src = 'https://static.meiqia.com/dist/meiqia.js?_=t';
    s.parentNode.insertBefore(j, s);
  })(window, document, 'script', '_MEIQIA');
  _MEIQIA('entId', 96332);

});

Vue.prototype.get_user_info = function(cb) {
  myfetch("Customer/getCustomer").then(res => {
    let { data, error, message } = res;
    if (error == 0) {
      store.commit("updateuserinfo", { userinfo: data });
      console.log("updateuserinfo", data);
      typeof cb == "function" && cb(res);
    }
  });
};
// Vue.prototype.get_user_info();
function showtoast(msg = "") {
  if (msg) {
    store.commit("updatetoastdata", { toastdata: { status: true, text: msg } });
  }
}
Vue.prototype.showtoast = showtoast;
wx.ready(function() {
  if (window.__wxjs_environment === "miniprogram")
    store.commit("updateIsMinprogram", 1);
});
Vue.prototype.xarpay = function(
  subject = "",
  body = "",
  product_id = 0,
  proinfo = "",
  return_param = ""
) {
  if (store.state.vux.is_minprogram == 1) {
    showtoast("小程序中暂时不支持支付，请关注ynxarjt享受更多服务。");
    return;
  }
  return new Promise(function(resfun, rejfun) {
    // console.log(subject);
    // console.log(body);
    // console.log(product_id);
    // console.log(product_id);
    if (subject && body && proinfo && product_id) {
      var data = {};
      data.subject = subject.length > 15 ? subject.substr(0, 15) : subject;
      data.body = body;
      data.proinfo = proinfo;
      data.pay_type = "wx_pub";
      var api_url = "https://xcxcgj.gotomore.cn/pay.php";
      data.return_param = return_param;
      data.access_token = VueCookie.get("access_token");

      request.post(api_url, data).then(function(d) {
        if (d.error) {
          showtoast(d.message);
          rejfun(d);
        } else {
          var pay = d.data;
          wx.chooseWXPay({
            timestamp: pay.timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
            nonceStr: pay.nonceStr, // 支付签名随机串，不长于 32 位
            package: pay.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
            signType: pay.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
            paySign: pay.paySign, // 支付签名
            success: function(res) {
              resfun(res);
            },
            cancel: function(res) {
              showtoast("取消支付");
              rejfun(res);
            },
            fail: function(res) {
              console.log(res);
              showtoast("支付失败,请联系管理员");
              // console.log(res);
              alert(res.errMsg);
              rejfun(res);
            }
          });
        }
      });
    } else {
      showtoast("支付发起失败，请联系管理员");
      rejfun(res);
    }
  });
};
// $(document).ajaxStart(function(e) {
//   // console.log(e, 'ajaxStart');
//   store.commit("updateLoadingStatus", { isLoading: true });
// });
// $(document).ajaxComplete(function(e) {
//   // console.log(e, 'ajaxComplete');
//   store.commit("updateLoadingStatus", { isLoading: false });
// });
// 
// 
FastClick.attach(document.body);
Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app-box");
