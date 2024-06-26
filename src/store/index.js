import { createStore } from "vuex";
import createPersistedState from 'vuex-persistedstate';


export default createStore({
  plugins: [createPersistedState()],
  state: {
    token: null
  },
  getters: {
    getToken: state => state.token
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    clearToken(state) {
      state.token = null;
    }
  },
  actions: {
    login({ commit }, token) {
      commit("setToken", token);
    },
    logout({ commit }) {
      commit("clearToken");
    }
  },
  modules: {}
});
