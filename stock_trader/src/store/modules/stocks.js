import stocks from '../data/seed';

const state = {
  stocks: []
};

const getters = {
  stocks: state => {
    return state.stocks;
  }
};

const mutations = {
  setStocks(state, stocks) {
    state.stocks = stocks;
  },
  random(state) {

  }
};

const actions = {
  initStocks: ({commit}) => {
      commit('setStocks', stocks);
  },
  buy: ({ commit }, order) => {
    commit('buy', order);
  },
  randomize: ({ commit }) => {
    commit('random');
  }
};

export default {
    state,
    mutations,
    actions,
    getters
};
