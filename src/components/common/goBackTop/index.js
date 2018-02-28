import BackTop from './goBackTop';

const goBackTop = {
  install(Vue) {
    Vue.component('go-back-top', BackTop);
    Vue.prototype.$bgaBackTop = function() {
      if (Vue.prototype.$bagBacktopInstance) {
        Vue.prototype.$bagBacktopInstance.startScrollToTop();
      }
    };
  }
};

export default goBackTop;
