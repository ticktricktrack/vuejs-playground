const state = {
  funds: 10000,
  stocks: []
}

const getters = {
  portfolio(state, getters) {
    return state.stocks.map(stock => {
      const record = getters.stocks.find(element => element.id == stock.id);
      return {
        id: stock.id,
        quantity: stock.quantity,
        name: record.name,
        price: record.price
      }
    });
  },
  funds(state) {
    return state.funds;
  }
}

const mutations = {
  buy(state, { id, quantity, price }) {
    const record = state.stocks.find(element => element.id === id);
    if (record) {
      record.quantity += quantity;
    } else {
      state.stocks.push({
        id: id,
        quantity: quantity
      });
    }
    state.funds -= price * quantity;
  },

  sell(state, { id, quantity, price }) {
    const record = state.stocks.find(element => element.id === id);
    if (record.quantity > quantity) {
      record.quantity -= quantity;
    } else {
      state.stocks.splice(state.stocks.indexOf(record), 1);
    }
    console.log('selling', record);
    state.funds += price * quantity;
  },
};

const actions = {
  sell({commit}, order) {
    commit('sell', order)
  }
};

export default {
    state,
    mutations,
    actions,
    getters
};
