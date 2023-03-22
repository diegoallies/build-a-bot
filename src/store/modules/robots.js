import axios from 'axios';

export default {
  namespaced: true,
  state: {
    Cart: [],
    parts: null,
    foo: 'robots-foo',
  },
  mutations: {
    addRobotToProductCart(state, robot) {
      state.Cart.push(robot);
    },
    updateParts(state, parts) {
      state.parts = parts;
    },
  },
  actions: {
    getParts({ commit }) {
      axios.get('/api/parts')
        .then(result => commit('updateParts', result.data))
        .catch(console.error);
    },
    addRobotToProductCart({ commit, state }, robot) {
      const Cart = [...state.Cart, robot];
      return axios.post('/api/Cart', Cart)
        .then(() => commit('addRobotToProductCart', robot));
    },
  },
  getters: {
    ProductCartSaleItems(state) {
      return state.Cart.filter(item => item.head.onSale);
    },
    foo(state) {
      return `robots-getter/${state.foo}`;
    },

  },
};

