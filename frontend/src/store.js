import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    flashMessage: {}
  },
  getters: {
    displayMessage: state => {
      if (state.flashMessage.message) {
        return state.flashMessage.message;
      }
    }
  },
  mutations: {
    setFlash(state, payload) {
      state.flashMessage.message = payload.message;
      state.flashMessage.status = payload.status;
    },
    removeFlash(state) {
      state.flashMessage = {};
    }
  },
  actions: {
    setFlash(state, p) {
      state.commit("setFlash", p);
    },
    removeFlash(state) {
      state.flashMessage = {};
    }
  }
});
