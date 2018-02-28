import api from 'api/api';
export const mixinsScroll = {
  data() {
    return {
      page: {},
      list: new Array(5).join(0).split('')
    };
  },
  created() {
    this._scrollInit();
  },
  computed: {
    pullUpLoad: function() {
      return true;
    },

    pullDownLoad: function() {
      return true;
    }
  },
  methods: {
    async _scrollInit() {
      const { apiMethod } = this;
      if (apiMethod) {
        const result = await api[apiMethod]();
        if (result.data) {
          console.log(result);
          const { page_data, list } = result.data;
          this.page = page_data;
          this.list = list;
        }
      }
    },
    rebuildScroll() {
      Vue.nextTick(() => {
        this.$refs.scroll.destroy();
        this.$refs.scroll.initScroll();
      });
    }
  }
};
