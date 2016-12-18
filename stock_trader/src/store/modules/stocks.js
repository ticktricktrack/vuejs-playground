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
  randomize(state) {
    console.log('randomiziong');
    state.stocks.forEach(stock => {
      stock.price = Math.max(Math.round( stock.price + Math.random() * 20 - 10), 1);
    })
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
    commit('randomize');
  }
};

export default {
    state,
    mutations,
    actions,
    getters
};
