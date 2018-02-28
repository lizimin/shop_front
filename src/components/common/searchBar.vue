<template>
  <div class="vux-search-box cpts-searchbar" :class="{ 'vux-search-fixed':isFixed }" :style="{ top: isFixed ? top : '', position: fixPosition }">
    <div class="weui-search-bar" :class="{'weui-search-bar_focusing': !isCancel || currentValue}">
      <div class="slot-left">
        <slot name="left"></slot>
      </div>
      <form class="weui-search-bar__form" @submit.prevent="$emit('on-submit', value)" action=".">
        <label :for="`search_input_${uuid}`" class="vux-search-mask" @click="touch" v-show="!isFixed && autoFixed"></label>
        <div class="weui-search-bar__box">
          <i class="weui-icon-search"></i>
          <input v-model="currentValue" ref="input" type="search" autocomplete="off" class="weui-search-bar__input" :id="`search_input_${uuid}`" :placeholder="placeholder" :required="required" @focus="onFocus" @blur="onBlur" @compositionstart="onComposition($event, 'start')" @compositionend="onComposition($event, 'end')" @input="onComposition($event, 'input')" />
          <a href="javascript:" class="weui-icon-clear" @click="clear" v-show="currentValue"></a>
        </div>
        <label :for="`search_input_${uuid}`" class="weui-search-bar__label" v-show="!isFocus && !value">
          <i class="weui-icon-search"></i>
          <span>{{ placeholder || '输入关键词' }}</span>
        </label>
      </form>
      <div class="slot-right">
        <slot name="right">

          <router-link :to="'/my'">

            <span class="fa fa-user-circle-o"></span>
          </router-link>
        </slot>
      </div>
      <a href="javascript:" class="weui-search-bar__cancel-btn" @click="cancel">{{ cancelText || '取消' }}

      </a>
    </div>
    <div class="weui-cells vux-search_show" v-show="isFixed">
      <slot></slot>
      <div class="weui-cell weui-cell_access" v-for="item in results" @click="handleResultClick(item)">
        <div class="weui-cell__bd weui-cell_primary">
          <p>{{item.title}}</p>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import uuidMixin from "../../mixins/uuid";

export default {
  name: "search",
  mixins: [uuidMixin],
  props: {
    required: {
      type: Boolean,
      default: false
    },
    placeholder: String,
    cancelText: String,
    value: {
      type: String,
      default: ""
    },
    results: {
      type: Array,
      default() {
        return [];
      }
    },
    autoFixed: {
      type: Boolean,
      default: true
    },
    top: {
      type: String,
      default: "0px"
    },
    position: {
      type: String,
      default: "fixed"
    },
    autoScrollToTop: Boolean
  },
  created() {
    if (this.value) {
      this.currentValue = this.value;
    }
  },
  computed: {
    fixPosition() {
      if (this.isFixed) {
        return this.position === "absolute" ? "absolute" : "fixed";
      }
      return "static";
    }
  },
  methods: {
    emitEvent() {
      this.$nextTick(() => {
        this.$emit("input", this.currentValue);
        this.$emit("on-change", this.currentValue);
      });
    },
    onComposition($event, type) {
      if (type === "start") {
        this.onInput = true;
      }
      if (type === "end") {
        this.onInput = false;
        this.emitEvent();
      }
      if (type === "input") {
        if (!this.onInput) {
          this.emitEvent();
        }
      }
    },
    clear() {
      this.currentValue = "";
      this.isFocus = true;
      this.setFocus();
      if (this.autoFixed && !this.isFixed) {
        this.isFixed = true;
      }
    },
    cancel() {
      this.isCancel = true;
      this.currentValue = "";
      this.isFixed = false;
      this.$emit("on-cancel");
    },
    handleResultClick(item) {
      this.$emit("result-click", item); // just for compatibility
      this.$emit("on-result-click", item);
      this.isCancel = true;
      this.isFixed = false;
    },
    touch() {
      this.isCancel = false;
      if (this.autoFixed) {
        this.isFixed = true;
      }
      this.$emit("on-touch");
    },
    setFocus() {
      this.$refs.input.focus();
    },
    setBlur() {
      this.$refs.input.blur();
    },
    onFocus() {
      this.isFocus = true;
      this.$emit("on-focus");
      this.touch();
    },
    onBlur() {
      this.isFocus = false;
      this.$emit("on-blur");
    }
  },
  data() {
    return {
      onInput: false,
      currentValue: "",
      isCancel: true,
      isFocus: false,
      isFixed: false
    };
  },
  watch: {
    isFixed(val) {
      if (val === true) {
        this.setFocus();
        this.isFocus = true;

        if (this.autoScrollToTop) {
          setTimeout(() => {
            window.scrollTo(0, 0);
          }, 150);
        }
      } else {
      }
    },
    value(val) {
      this.currentValue = val;
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../styles/weui/icon/weui_icon_font";
@import "../../styles/weui/widget/weui_searchbar/weui_searchbar";
@import "../../styles/weui/widget/weui_cell/weui_cell_global";
@import "../../styles/weui/widget/weui_cell/weui_access";
.cpts-searchbar {
  .weui-search-bar {
    background: #fff;
    // display: flex;
    .weui-search-bar__form {
      background: none;
    }
    .weui-search-bar__form:after {
      display: none;
    }
    .weui-search-bar__label {
      background: #f3f4f5;
      border: none;
      border-radius: 0.07rem;
      text-align: left;
      padding-left: 0.2rem;
      display: flex;
      // justify-content: center;
      align-items: center;
    }
    .slot-left {
      flex: 0 0 1.5rem;
      background: url("~assets/logo-search.png") center center no-repeat;
      background-size: 1.5rem auto;
      margin-right: 0.5rem;
    }
    .slot-right {
      margin-left: 0.2rem;
      margin-right: 0.2rem;
      display: flex;
      align-items: center;
      color: #272727;
      .fa{
        font-size: .4rem;
      }
    }
    // form {
    //   flex: 0 0 4rem;
    // }
    // .weui-search-bar__box {
    //   position: relative;
    //   padding: 0;
    //   margin-left: 1rem;
    //   background: #f3f4f5;
    //   border: 1px solid #979797;
    //   text-align: left;
    // }
  }
  // 聚焦状态
  .weui-search-bar_focusing {
    .slot-left,
    .slot-right {
      display: none;
    }
  }
}
.vux-search-fixed {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 5;
  background: rgba(255, 255, 255, 1);
  backdrop-filter: blur(5px);
  .weui-search-bar__box {
    display: block;
    border: 1px solid #f3f3f3;
    border-radius: 0;
  }
}
.vux-search-box {
  width: 100%;
}
.weui-cells.vux-search_show {
  margin-top: 0 !important;
  overflow-y: auto;
  position: fixed;
  width: 100%;
  max-height: 100%;

  .weui-cell:last-child {
    margin-bottom: 150px;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  &::after {
    display: none;
  }
}
.vux-search-mask {
  position: absolute;
  left: 0;
  top: 0;
  width: 90%;
  height: 100%;
  z-index: 5;
}
</style>
