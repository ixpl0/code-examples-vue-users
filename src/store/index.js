import { createStore } from 'vuex';

export default createStore({
  state: {
    errors: [],
  },
  mutations: {
    addError(state, errorText) {
      state.errors = [...state.errors, errorText];
    },
    clearErrors(state) {
      state.errors = [];
    },
  },
  actions: {},
  modules: {},
});
