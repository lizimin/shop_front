<template>
  <div id="map">
    <div class="amap-wrapper">
      <el-amap class="amap-box" :vid="'amap-vue'" :center="center" :zoom="zoom" :events="events" :amap-manager="amapManager">
      </el-amap>
    </div>
    <img class="tool-img tools-reflash" v-on:click="fetchData" src="../../static/image/reflash.png">
    <img class="tool-img tools-location" v-on:click="location" src="../../static/image/dingwei.png">
    <img class="tool-img tools-kefu" src="../../static/image/kefu.png">
    <img class="tool-img tools-hongbao" src="../../static/image/hongbao.png">
    <!--     <div class="shopinfo">
      <p>您的位置:{{address}}</p>
      <div v-on:click="pay">6666</div>
      <router-link to="/vcard/2" >
      此团详情
      </router-link>
    </div> -->
    <div v-transfer-dom>
      <popup v-model="show8" position="top" :show-mask="f">
        <div class="address" v-id="address">{{address}}</div>
        <div class="shop" v-if="thisrouter.shop_name">
          <div>{{thisrouter.shop_name}}</div>
          <div>{{juli}}公里，预计{{time}}分钟</div>
        </div>
      </popup>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { AMapManager } from 'vue-amap';
import VueAMap from 'vue-amap';
import { TransferDom, Popup } from 'vux';
const amapManager = new VueAMap.AMapManager();
export default {
  directives: {
    TransferDom
  },
  components: {
    Popup
  },
  name: 'map',
  data() {
    const self = this;
    return {
      zoom: 7,
      center: [102.720859, 25.087526],
      local: [],
      address: '',
      amapManager,
      thisrouter: {
        distance: 0
      },
      f: false,
      show8: true,
      markers: [],
      markerRefs: [],
      shop: [],
      driving: null,
      events: {
        click(e) {
          let { lng, lat } = e.lnglat;
          self.lng = lng;
          self.lat = lat;
          // 这里通过高德 SDK 完成。
        },
        init(o) {
          var map = self.amapManager.getMap();
          map.on('complete', function() {
            self.location();
          });
        }
      },
      lng: 0,
      lat: 0
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
    this.setWxShare(
      '全城洗车、随意分享。全家通用',
      '全城汽车服务，都在你的身边',
      this.site_url + '/index.html#/tmap'
    );
    var self = this;
    setTimeout(function() {
      self.location();
      self.$nextTick();
    }, 500);
  },
  methods: {
    fetchData: function() {
      var map = this.amapManager.getMap();
      var self = this;
      map.remove(this.markers);
      var lnglat = new AMap.LngLat(this.local[0], this.local[1]);
      this.xarpost('Shopinfo/shopList', {}).then(
        function(d) {
          let { data, error, message } = d;
          var min_juli = 0;
          var min_juli_index = 0;
          data.map(function(item, index) {
            var juli = lnglat.distance([item.shop_lng, item.shop_lat]);
            if (index == 0) min_juli = juli;
            if (juli < min_juli) {
              min_juli = juli;
              min_juli_index = index;
            }
          });
          self.driving = new AMap.Driving({
            map: map
          });
          data.map(function(item, index) {
            var icon = 'https://xcxcgj.gotomore.cn/static/image/shopimg.png';
            if (min_juli_index == index) {
              icon = 'https://xcxcgj.gotomore.cn/static/image/zuijin.png';
            }
            var marker = new AMap.Marker({
              map: map,
              position: [item.shop_lng, item.shop_lat],
              icon: icon
            });
            marker.on('click', function(e) {
              self.driving.clear();
              self.center = [e.lnglat.lng, e.lnglat.lat];
              // console.log(e.position, '1231');
              // 根据起终点经纬度规划驾车导航路线
              self.driving.search(
                new AMap.LngLat(self.local[0], self.local[1]),
                new AMap.LngLat(item.shop_lng, item.shop_lat),
                function(status, result) {
                  item.time = result.routes[0].time;
                  item.distance = result.routes[0].distance;
                  self.thisrouter = item;
                }
              );
            });
            self.markers.push(marker);
          });
          map.setFitView();
          self.shop = data;
        },
        function(e) {
          // console.log(e);
        }
      );
    },
    getAddress: function(lng, lat) {
      var self = this;
      var geocoder = new AMap.Geocoder({
        radius: 1000,
        extensions: 'all'
      });
      geocoder.getAddress([lng, lat], function(status, result) {
        if (status === 'complete' && result.info === 'OK') {
          if (result && result.regeocode) {
            // console.log(result, 21);
            var addressComponent = result.regeocode.addressComponent;
            self.address =
              addressComponent.city +
              addressComponent.district +
              addressComponent.township +
              addressComponent.street +
              addressComponent.streetNumber;
            self.$nextTick();
          }
        }
      });
    },
    pay: function() {
      this.xarpay('测试', '测试', 0.01, '额外信息测试');
      // this.location()
      // this.fetchData()
    },
    handler(index) {
      alert(`${index} - trigger`);
    },
    location() {
      var map = this.amapManager.getMap();
      var self = this;
      if (self.driving) self.driving.clear();
      this.getLocation().then(
        function(res) {
          self.local = [res.longitude, res.latitude];
          // self.center = [res.longitude, res.latitude]
          self.getAddress(res.longitude, res.latitude);
          new AMap.Marker({
            map: map,
            position: [res.longitude, res.latitude],
            icon: 'https://xcxcgj.gotomore.cn/static/image/location.png'
          });
          self.fetchData();
        },
        function(e) {
          self.fetchData();
        }
      );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.shop {
  background-color: #fff;
  padding: 10px;
  font-size: 14px;
}
.popup {
  background-color: #fff;
}
.address {
  font-size: 14px;
  padding: 5px;
  background-color: #f4f8fb;
}
.amap-box {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
}
.shopinfo {
  position: absolute;
  width: 100%;
  height: 20%;
  top: 80%;
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
