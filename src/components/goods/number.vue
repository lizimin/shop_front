<template>
  <div class="cpts-number">
    <div class="weui-cell__ft vux-cell-primary" :class="{'vux-number-round': buttonStyle === 'round'}" v-show="!readonly" style="font-size:0">
      <div :style="{float:align}">
        <a @click="sub" class="vux-number-selector vux-number-selector-sub" :class="{'vux-number-disabled':disabledMin}">
          <span class="fa fa-minus"></span>
        </a>
        <input v-model.number="currentValue" :name="name" class="vux-number-input" :style="{width: width}" :readonly="!fillable" pattern="[0-9]*" type="number" @blur="blur" />
        <a @click="add" class="vux-number-selector vux-number-selector-plus" :class="{'vux-number-disabled':disabledMax}">
          <span class="fa fa-plus"></span>

        </a>
      </div>
    </div>
    <div class="weui-cell__ft vux-cell-primary" v-show="readonly">
      {{value}}
    </div>
  </div>
</template>

<script>
const Big = require('big.js');
export default {
  name: 'x-number',
  props: {
    min: Number,
    max: Number,
    readonly: Boolean,
    step: {
      type: Number,
      default: 1
    },
    value: {
      validator(value) {
        if (typeof value === 'number') {
          return true;
        } else if (typeof value === 'string') {
          return value === '';
        }
        return false;
      },
      default: 0
    },
    name: String,
    title: String,
    fillable: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: '50px'
    },
    buttonStyle: {
      type: String,
      default: 'square'
    },
    align: {
      type: String,
      default: 'right'
    }
  },
  created() {
    this.currentValue = this.value;
  },
  data() {
    return {
      currentValue: 0
    };
  },
  computed: {
    disabledMin() {
      return typeof this.min === 'undefined'
        ? false
        : this.currentValue === '' ? true : this.currentValue <= this.min;
    },
    disabledMax() {
      return typeof this.max === 'undefined'
        ? false
        : this.currentValue === '' ? true : this.currentValue >= this.max;
    },
    labelClass() {
      return {
        'vux-cell-justify':
          this.$parent.labelAlign === 'justify' ||
          this.$parent.$parent.labelAlign === 'justify'
      };
    }
  },
  watch: {
    currentValue(newValue, old) {
      if (newValue !== '') {
        if (typeof this.min !== 'undefined' && this.currentValue < this.min) {
          this.currentValue = this.min;
        }
        if (this.max && this.currentValue > this.max) {
          this.currentValue = this.max;
        }
      }
      this.$emit('input', this.currentValue);
      this.$emit('on-change', this.currentValue);
    },
    value(newValue) {
      this.currentValue = newValue;
    }
  },
  methods: {
    add() {
      if (!this.disabledMax) {
        const x = new Big(this.currentValue);
        this.currentValue = x.plus(this.step) * 1;
      }
    },
    sub() {
      if (!this.disabledMin) {
        const x = new Big(this.currentValue);
        this.currentValue = x.minus(this.step) * 1;
      }
    },
    blur() {
      if (this.currentValue === '') {
        this.currentValue = 0;
      }
    }
  }
};
</script>

<style lang="less">
@number-button-font-color: #0e0e0e;
.cpts-number {
  padding-top: 0.05rem;
  .fa {
    vertical-align: middle;
    font-weight: lighter;
    font-size: 0.28rem;
  }
  .vux-number-input {
    float: left;
    height: 20px;
    font-size: 0.28rem;
    color: #333;
    appearance: none;
    border: 1px solid #ececec;
    padding: 3px 0;
    text-align: center;
    border-radius: 1px;
  }
}
.vux-cell-primary {
  flex: 1;
}

.vux-number-round .vux-number-input {
  border: none;
}
.vux-number-selector {
  float: left;
  height: 20px;
  font-size: 25px;
  line-height: 18px;
  // color: @number-button-font-color;
  // border:1px solid @number-square-button-enabled-border-color;
}
.vux-number-round .vux-number-selector {
  width: 20px;
  border-radius: 13px;
}
.vux-number-selector .fa {
  color: @number-button-font-color;
}
.vux-number-selector.vux-number-disabled .fa {
  color: #ccc;
}
.vux-number-round .vux-number-selector.vux-number-disabled {
}
.vux-number-round .vux-number-selector.vux-number-disabled svg {
}
.vux-number-selector-sub {
  border-right: none;
  padding: 4px 8px 2px 8px;
  border-radius: 2px 0 0 2px;
}
.vux-number-selector-plus {
  border-left: none;
  margin-right: 5px;
  padding: 3px 8px;
  border-radius: 0 2px 2px 0;
}
.vux-number-round .vux-number-selector-sub svg {
  position: relative;
  top: 1px;
}
.vux-number-round .vux-number-selector-sub,
.vux-number-round .vux-number-selector-plus {
  padding: 2px;
  text-align: center;
}
</style>
