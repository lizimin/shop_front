<template>
  <div class="vux-actionsheet">
    <transition name="vux-actionsheet-mask">
      <div class="weui-mask weui-mask_transparent" @click="onClickingMask" v-show="show"></div>
    </transition>

    <div class="weui-actionsheet" :class="{'weui-actionsheet_toggle': show}">
      <div class="weui-actionsheet__action">
        <span class="weui-actionsheet__cell">{{titleText}}</span>
        <span class="btn-close" @click="emitEvent('on-click-menu', 'cancel')">
          <i class="fa fa-close fa-4x"></i>
        </span>
      </div>
      <div class="weui-actionsheet-content">
        <slot></slot>
      </div>
      <div class="weui-actionsheet-cancel" @click="emitEvent('on-click-menu', 'cancel')">
        {{cancelText}}
      </div>

    </div>
  </div>
</template>


<script>
export default {
  name: "actionsheet",
  mounted() {
    this.hasHeaderSlot = !!this.$slots.header;
    this.$nextTick(() => {
      this.$tabbar = document.querySelector(".weui-tabbar");
    });
  },
  props: {
    value: Boolean,
    showCancel: Boolean,
    cancelText: String,
    titleText: String,
    theme: {
      type: String,
      default: "ios"
    },
    menus: {
      type: [Object, Array],
      default: () => ({})
    },
    closeOnClickingMask: {
      type: Boolean,
      default: true
    },
    closeOnClickingMenu: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      hasHeaderSlot: false,
      show: false
    };
  },
  methods: {
    onMenuClick(text, key) {
      if (typeof text === "string") {
        this.emitEvent("on-click-menu", key, text);
      } else {
        if (text.type !== "disabled" && text.type !== "info") {
          if (text.value || text.value === 0) {
            this.emitEvent("on-click-menu", text.value, text);
          } else {
            this.emitEvent("on-click-menu", "", text);
            this.show = false;
          }
        }
      }
    },
    onClickingMask() {
      this.$emit("on-click-mask");
      this.closeOnClickingMask && (this.show = false);
    },
    emitEvent(event, menu, item) {
      if (event === "on-click-menu" && !/.noop/.test(menu)) {
        let _item = item;
        if (typeof _item === "object") {
          _item = JSON.parse(JSON.stringify(_item));
        }
        this.$emit(event, menu, _item);
        this.$emit(`${event}-${menu}`);
        this.closeOnClickingMenu && (this.show = false);
      }
    },
    fixIos(zIndex) {
      if (
        this.$el.parentNode &&
        this.$el.parentNode.className.indexOf("v-transfer-dom") !== -1
      ) {
        return;
      }
      if (this.$tabbar && /iphone/i.test(navigator.userAgent)) {
        this.$tabbar.style.zIndex = zIndex;
      }
    }
  },
  watch: {
    show(val) {
      this.$emit("input", val);
      if (val) {
        this.fixIos(-1);
      } else {
        setTimeout(() => {
          this.fixIos(100);
        }, 200);
      }
    },
    value: {
      handler: function(val) {
        this.show = val;
      },
      immediate: true
    }
  },
  beforeDestroy() {
    this.fixIos(100);
  }
};
</script>

<style lang="less" >
@import "../../styles/weui/widget/weui_tips/weui_mask";
@import "../../styles/weui/widget/weui_tips/weui_actionsheet";
.vux-actionsheet {
  z-index: 2000;
}
.weui-actionsheet {
  background: #fff;
  z-index: 2000;
  &-content {
    padding: 0.2rem;
    height: 7rem;
    position: relative;
    overflow: scroll;
    z-index: 2000;
    .slide-content {
      &-group {
        margin-bottom: 0.1rem;
      }
      h3 {
        color: #fe4d3d;
        font-size: 0.3rem;
      }
      p {
        margin-top: 0.15rem;
        .fa {
          font-size: 0.1rem;
          color: #fe4d3d;
          vertical-align: 2px;
          margin: 0 0.1rem;
        }
      }
      .txt-center {
        text-align: center;
        img {
          max-width: 4.2rem;
        }
      }
    }
  }
  &-cancel {
    text-align: center;
    background: #fe4d3d;
    line-height: 0.8rem;
    color: #fff;
  }
}

.weui-actionsheet__action {
  text-align: center;
  position: relative;
  height: 0.7rem;
  line-height: 0.7rem;
  .btn-close {
    position: absolute;
    color: #ccc;
    right: 0.1rem;
    top: 0;
    height: 0.7rem;
    width: 0.7rem;
    border-radius: 50%;
    // border: 1px solid #000;
  }
  .fa {
    font-size: 0.35rem;
    vertical-align: middle;
    color: #272727;
  }
}

.vux-actionsheet-menu-primary {
  color: @actionsheet-label-primary-color;
}
.vux-actionsheet-menu-warn {
  color: @actionsheet-label-warn-color;
}
.vux-actionsheet-menu-default {
  color: @actionsheet-label-default-color;
}
.vux-actionsheet-menu-disabled {
  color: @actionsheet-label-disabled-color;
}
.vux-actionsheet-mask-enter,
.vux-actionsheet-mask-leave-active,
.vux-android-actionsheet-enter,
.vux-android-actionsheet-leave-active {
  opacity: 0;
}
.vux-actionsheet-mask-leave-active,
.vux-actionsheet-mask-enter-active,
.vux-android-actionsheet-leave-active,
.vux-android-actionsheet-enter-active {
  transition: opacity 300ms !important;
}
</style>
