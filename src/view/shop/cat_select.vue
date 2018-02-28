<style lang="less" scoped>
.page-shop {
  ul {
    list-style: none;
  }
  ul li {
    list-style: none;
  }
  .bule {
    background: #0faeff;
  }

  .red {
    background: #f86161;
  }
  .vux-search-box {
    position: relative !important;
  }
  .search-bar {
    width: 100%;
  }

  .left-cat-scroller {
    float: left;
    width: 20%;
    height: 100%;
    background: #f3f4f5;
  }

  .left-cat-scroller .left-cat-content {
    width: 100%;
    height: 100%;
  }
  .left-cat-scroller .left-cat-content .active {
    background: #f3f4f5;
  }
  .left-cat-item {
    width: 100%;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #f3f4f5;
    text-align: center;
    background: #ffffff;
  }
  .right-cat-scroller {
    float: left;
    width: 77%;
    background: #f3f4f5;
    padding-left: 3%;
  }
  .ul-cat {
    width: 110%;
    height: auto;
    margin-right: -5%;
    margin-top: 10px;
  }
  .ul-cat li {
    float: left;
    width: 28%;
    margin-right: 2%;
  }
  .ul-cat li .cat-img {
    width: 100%;
    height: 100px;
  }
  .cat-item .cat-img {
    width: 100%;
    border-radius: 6px;
  }
  .cat-item .re-card-name {
    width: 96%;
    color: #272727;
    font-size: 13px;
    line-height: 20px;
    text-align: center;
  }
}
</style>
<template>
  <div class="page-shop">
    <div class="search-bar">
      <search></search>
    </div>
    <div>
      <scroller lock-x height="100%" :bounce="true" class="left-cat-scroller">
        <div class="left-cat-content">
          <div v-on:click="selectSecCat(index)" v-bind:class="[s_index != index ? activeClass : 'active', 'left-cat-item']" v-for="item, index in list">
            {{item.cat_name}}
          </div>
        </div>
      </scroller>
      <scroller lock-x height="100%" :bounce="true" class="right-cat-scroller">
        <div class="right-cat-content">
          <div>
            <ul class="ul-cat">
              <li v-for="item in list[s_index].sub">
                <router-link :to="'prolist/'+item.cat_id">
                  <div class="cat-item">
                    <div class="cat-img bule">

                    </div>
                    <div class="re-card-name">
                      {{item.cat_name}}
                    </div>
                  </div>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </scroller>
    </div>

  </div>
</template>

<script>
import { Search, Scroller } from 'vux';
export default {
  name: 'cat_select',
  components: {
    Search,
    Scroller
  },
  data() {
    return {
      currentFistCat: 0,
      firstLevelCats: [],
      list: [
        {
          sub: []
        }
      ],
      activeClass: '',
      s_index: 0
    };
  },
  activated: function() {
    var self = this;
    self.getFirstLevel();
  },
  methods: {
    selectSecCat: function(index) {
      var self = this;
      console.log(index);
      var pid = index;
      self.s_index = index;
      self.currentFistCat = pid;
    },
    getFirstLevel: function() {
      var self = this;
      self
        .xarpost('MallCat/getCatList', {
          pid: 0
        })
        .then(
          function(d) {
            let { data, error, message } = d;
            if (d.error != 0) {
              self.showtoast(d.message);
            }
            //如果都正常，正常加载页面
            var newData = d.data == undefined ? [] : d.data;
            self.setFirstData(newData);
          },
          function(e) {
            self.$vux.toast.show({
              text: e,
              type: 'cancel',
              time: 3000
            });
          }
        );
    },
    setFirstData: function(list) {
      this.list = list;
    },
    setSecData: function(list, pid) {
      this.list['sec_' + pid] = list;
    },
    setFocus() {
      this.$refs.search.setFocus();
    },
    onSubmit() {
      this.$refs.search.setBlur();
      this.$vux.toast.show({
        type: 'text',
        position: 'top',
        text: 'on submit'
      });
    },
    onFocus() {
      console.log('on focus');
    },
    onCancel() {
      console.log('on cancel');
    }
  }
};
</script>
