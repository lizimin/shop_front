<template>
  <div id="map">
    <div id="container"></div>
    <img class="tool-img tools-reflash" v-on:click="fetchData" src="../../static/image/reflash.png">
    <img class="tool-img tools-location" v-on:click="location" src="../../static/image/dingwei.png">
    <!-- <img class="tool-img tools-kefu" src="../../static/image/kefu.png"> -->
    <!-- <img class="tool-img tools-hongbao" src="../../static/image/hongbao.png"> -->
    <div class="shop-div" id="mapShopCon">
      <!-- <div class="address" v-if="address">{{address}}</div> -->
      <nearShop v-if="nearShop" :shop="nearShop"></nearShop>
    </div>
    <!-- <div class="tmap-icon">
      <router-link to="/vcard/2">
        <img src="../../static/image/tmap-icon.png" alt="">
      </router-link>
    </div> -->
  </div>
</template>

<script>
import { mapState } from "vuex";
import { AMapManager } from "vue-amap";
import { TransferDom, Popup } from "vux";
import { TMap } from "../utils/TMap";
import nearShop from "../components/goods/nearShop";
export default {
  directives: {
    TransferDom
  },
  components: {
    Popup,
    nearShop
  },
  name: "tmap",
  data() {
    return {
      zoom: 12,
      center: [25.049525, 102.702599],
      lat: 0,
      lng: 0,
      centerMarket: null,
      map: null,
      qq: null,
      drivingService: null,
      markerList: [],
      local: [],
      nearShop: {},
      shopStyle: "show",
      show8: true,
      f: false,
      address: ""
    };
  },
  computed: {
    ...mapState({
      openid: state => state.vux.openid
    }),
    juli: function() {
      var juli = 0;
      if (this.thisrouter.distance) juli = this.thisrouter.distance / 1000;
      return juli.toFixed(2);
    },
    time: function() {
      var time = 0;
      if (this.thisrouter.distance) time = this.thisrouter.time / 60;
      return time.toFixed(0);
    }
  },
  activated: function() {
    var self = this;
    this.show8 = true;
  },
  created: function() {
    var self = this;
    self.createMap();
  },
  beforeUpdate: function() {
    this.setWxShare(
      "离你最近的汽车服务专家",
      "全城汽车服务，都在您的身边",
      this.site_url + "index.html#/tmap"
    );
  },
  methods: {
    createMap: function() {
      var self = this;
      TMap("JAABZ-XNT3O-QP6WO-SFXYC-2XWBO-3KF6G").then(qq => {
        self.qq = qq;
        var center = new self.qq.maps.LatLng(self.center[0], self.center[1]);
        self.map = new self.qq.maps.Map(document.getElementById("container"), {
          // 地图的中心地理坐标。
          center: center,
          zoom: self.zoom,
          mapTypeControlOptions: {
            mapTypeIds: [],
            position: qq.maps.ControlPosition.TOP_RIGHT
          },
          zoomControl: false
        });
        //路线规划注释
        // self.drivingService = new self.qq.maps.DrivingService({
        //     map: self.map,
        // });
        self.fetchData();
        // self.addMarker(self.center[0], self.center[1], 'http://xcxcgj.gotomore.cn/static/image/location.png')
        self.location();
      });
    },
    addMarker: function(
      lat,
      lng,
      icon = "",
      cb = null,
      add = true,
      s_width = 42,
      s_height = 48
    ) {
      var self = this;
      var marker = null;
      if (lat && lng && self.qq) {
        marker = new self.qq.maps.Marker({
          //  设置Marker的位置坐标
          position: new self.qq.maps.LatLng(lat, lng),
          //  设置显示Marker的地图
          map: self.map
        });
        marker.setAnimation(self.qq.maps.MarkerAnimation.DOWN);
        const size = new self.qq.maps.Size(s_width, s_height),
          origin = null,
          anchor = null;
        if (icon) {
          var i = new self.qq.maps.MarkerImage(
            icon,
            size,
            origin,
            anchor,
            size
          );
          marker.setIcon(i);
        }
        self.qq.maps.event.addListener(marker, "click", function() {
          // marker.setMap(null)
          // console.log(self);

          self.map.panTo(new self.qq.maps.LatLng(lat, lng));
          const $div = document.getElementById("mapShopCon");
          $div.setAttribute("class", " shop-div slide-up");
          setTimeout(function() {
            $div.setAttribute("class", " shop-div");
          }, 500);

          if (typeof cb == "function") cb(lat, lng, marker);
        });
        if (add) self.markerList.push(marker);
      }
      return marker;
    },
    deleteMarker: function() {
      this.markerList.map(function(item) {
        item.setMap(null);
      });
      this.markerList = [];
    },
    fetchData: function() {
      var self = this;
      self.resetMap();
      this.xarpost("Shopinfo/shopList", {}).then(
        function(d) {
          let { data, error, message } = d;
          var min_juli = 0;
          var min_juli_index = 0;
          self.deleteMarker();
          data.map(function(item, index) {
            var juli = self.distance(self.center, [
              item.shop_lat,
              item.shop_lng
            ]);
            if (index == 0) min_juli = juli;
            if (juli < min_juli) {
              min_juli = juli;
              min_juli_index = index;
            }
            item.juli = juli;
          });
          data.map(function(item, index) {
            var icon = "../../static/image/WechatIMG4.png";
            if (min_juli_index == index) {
              icon = "../../static/image/near.png";
              self.nearShop = item;
            }
            self.addMarker(item.shop_lat, item.shop_lng, icon, function(
              lat,
              lng,
              marker
            ) {
              // self.driving(self.center, [lat, lng]);
              console.log(marker);
              var size = new self.qq.maps.Size(42, 48),
                origin = null,
                anchor = null;
              self.markerList.map(function(markerItem) {
                var icon = "../../static/image/WechatIMG4.png";
                if (marker == markerItem) {
                  icon = "../../static/image/near.png";
                  size = new self.qq.maps.Size(50, 58);
                } else {
                  size = new self.qq.maps.Size(42, 48);
                }

                var i = new self.qq.maps.MarkerImage(
                  icon,
                  size,
                  origin,
                  anchor,
                  size
                );
                markerItem.setIcon(i);
              });
              self.nearShop = item;
              // self.map.panTo(new self.qq.maps.LatLng(lat, lng));
              self.show8 = true;
            });
          });
          self.shop = data;
        },
        function(e) {
          console.log(e);
        }
      );
    },
    driving: function(latlng = [], latlng1 = []) {
      var self = this;
      var start = new self.qq.maps.LatLng(latlng[0], latlng[1]);
      var end = new self.qq.maps.LatLng(latlng1[0], latlng1[1]);

      self.drivingService.clear();
      self.drivingService.setPolicy(self.qq.maps.DrivingPolicy["LEAST_TIME"]);
      self.drivingService.search(start, end);
      self.drivingService.setComplete(function(result) {
        console.log(result);
        if (result.type == self.qq.maps.ServiceResultType.MULTI_DESTINATION) {
          //alert("起终点不唯一");
          var d = result.detail;
        }
      });
      self.drivingService.setComplete(function(result) {
        console.log(result);
      });
    },
    distance: function(latlng = [], latlng1 = []) {
      //根据两个坐标点计算距离
      var juli = 0;
      var self = this;
      if (latlng && latlng1) {
        console.log(latlng, latlng1);
        var start = new self.qq.maps.LatLng(latlng[0], latlng[1]);
        var end = new self.qq.maps.LatLng(latlng1[0], latlng1[1]);
        juli = self.qq.maps.geometry.spherical.computeDistanceBetween(
          start,
          end
        );
      }
      return juli;
    },
    getAddress: function(lat, lng) {
      var geocoder,
        map,
        marker = null;
      geocoder = new this.qq.maps.Geocoder();
      var latLng = new this.qq.maps.LatLng(lat, lng);
      //对指定经纬度进行解析
      geocoder.getAddress(latLng);
      //设置服务请求成功的回调函数
      var self = this;
      geocoder.setComplete(function(result) {
        console.log(result);
        self.address = result.detail.address;
      });
      //若服务请求失败，则运行以下函数
      geocoder.setError(function() {
        alert("出错了，请输入正确的经纬度！！！");
      });
    },
    handler(index) {
      alert(`${index} - trigger`);
    },
    location() {
      var self = this;
      self.resetMap();
      if (self.centerMarket) self.centerMarket.setMap(null);
      self.getLocation(false).then(
        function(res) {
          self.center = [res.latitude, res.longitude];
          self.lat = res.latitude;
          self.lng = res.longitude;
          // self.center = [res.longitude, res.latitude]
          self.map.panTo(
            new self.qq.maps.LatLng(self.center[0], self.center[1])
          );
          self.getAddress(res.latitude, res.longitude);
          self.centerMarket = self.addMarker(
            self.center[0],
            self.center[1],
            "../../static/image/position.png",
            null,
            false,
            30,
            30
          );
          self.fetchData();
        },
        function(e) {
          self.map.panTo(
            new self.qq.maps.LatLng(self.center[0], self.center[1])
          );
          self.getAddress(self.center[0], self.center[1]);
          self.centerMarket = self.addMarker(
            self.center[0],
            self.center[1],
            "../../static/image/position.png",
            null,
            false,
            30,
            30
          );
          self.fetchData();
        }
      );
    },
    resetMap() {
      var self = this;
      if (self.map) self.map.setZoom(self.zoom);
      if (self.drivingService) self.drivingService.clear();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.tmap-icon {
  position: absolute;
  right: 0.3rem;
  bottom: 1.8rem;
  width: 2rem;
  height: auto;
  img {
    width: 100%;
  }
}
.shop-div {
  position: relative;
  transition: all 0.3s;
  &.slide-up {
    transform: translateY(-100px);
  }
}
.address {
  font-size: 14px;
  padding: 5px;
  background-color: #f4f8fb;
}
#container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
}
.tools-reflash {
  position: absolute;
  top: 80%;
  z-index: 10;
}
.tools-location {
  position: absolute;
  top: 70%;
  z-index: 10;
}
.tools-kefu {
  position: absolute;
  top: 80%;
  right: 0px;
  z-index: 10;
}
.tools-hongbao {
  position: absolute;
  top: 70%;
  right: 0px;
  z-index: 10;
}
.tool-img {
  width: 44px;
  height: 44px;
  padding: 10px;
}
</style>
