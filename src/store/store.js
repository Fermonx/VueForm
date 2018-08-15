import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
      modalVisible: false,
      modalComponent: null

  },
  mutations: {
      showModal(state, modal){
          state.modalVisible = true;
          state.modalComponent = modal;
      },
      hideModal(state){
          state.modalVisible = false;
      }

  },
  actions: {

  },
  getters: {

  },
});
