import { prodList, stockList } from '../../views/commodity/api'
const state = {
  tablelist: [],
  pagination: [],
  stacklist: [],
  stackpage: []
}

const mutations = {
  SET_TABLE: (state, payload) => {
    state.tablelist = payload.list,
    state.pagination = payload.pagination
  },
  STOCK_LIST: (state, payload) => {
    state.stacklist = payload.list,
    state.stackpage = payload.pagination
  }
}

const actions = {
  async getTableList({ commit }, query) {
    const result = await prodList(query)
    commit('SET_TABLE', result.data)
  },
  async getStockList({ commit }, query) {
    const result = await stockList(query)
    commit('STOCK_LIST', result.data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
