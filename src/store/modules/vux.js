const vux = {
  state: {
    isLoading: false,
    showtabbar: true,
    direction: "forward",
    openid: "",
    userinfo: {},
    toastdata: {
      status: false,
      text: ""
    },
    location: {},
    token: {
      access_token: "",
      expire_time: 0
    },
    is_minprogram: 0
  },
  mutations: {
    updateLoadingStatus(state, payload) {
      state.isLoading = payload.isLoading;
    },
    updateDirection(state, payload) {
      state.direction = payload.direction;
    },
    updateOpenid(state, payload) {
      state.openid = payload.openid;
    },
    updateuserinfo(state, payload) {
      state.userinfo = payload.userinfo;
    },
    updateshowtabbar(state, payload) {
      state.showtabbar = payload.showtabbar;
    },
    updatetoastdata(state, payload) {
      state.toastdata = payload.toastdata;
    },
    updateLocation(state, payload) {
      state.location = payload;
    },
    updatetoken(state, payload) {
      state.token = payload;
    },
    updateIsMinprogram(state, payload) {
      state.is_minprogram = payload;
    }
  }
};

export default vux;
