import { order, Return, Whole, invoice } from '../../views/order/api/order'

const state = {
  list: [],
  tablist: [],
  number: [],
  invoice: []
}

const mutations = {
  SET_TABLE: (state, payload) => {
    state.list = payload.list
  },
  RETURN: (state, payload) => {
    state.tablist = payload.list
    console.log(state.tablist)
  },
  WholeList: (state, payload) => {
    state.number = payload.list
  },
  invoiceList: (state, payload) => {
    state.invoice = payload.list
  }
}

const actions = {
  async getTableList({ commit }, query) {
    const result = await order(query)
    commit('SET_TABLE', result.data)
  },
  async getReturnList({ commit }, query) {
    const result = await Return(query)
    commit('RETURN', result.data)
  },
  async getWholeList({ commit }, query) {
    const result = await Whole(query)
    commit('WholeList', result.data)
  },
  async invoiceList({ commit }, query) {
    const result = await invoice(query)
    commit('invoiceList', result.data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
