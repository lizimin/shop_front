import Cookies from "js-cookie";
import api from "api/api";
// import { resolve } from "path";

const app = {
  state: {
    userInfo: {},
    currentGood: {
      code: [],
      pro_id: 0,
      pro_name: "",
      name: []
    },
    currentCard: {
      code: [],
      pro_id: 0,
      pro_name: "",
      name: []
    }
  },
  mutations: {
    SET_USERINFO: (state, payload) => {
      state.userInfo = payload;
    },
    SET_CURRENT_GOOD: (state, payload) => {
      state.currentGood = payload;
    },
    SET_CURRENT_CARD: (state, payload) => {
      state.currentCard = payload;
    }
  },
  actions: {
    async getUserInfo({ commit }, payload) {
      const result = await api.getCustomer(payload);
      // console.log("获取用户信息", result);
      commit("SET_USERINFO", result.data);
    }
  }
};

export default app;
