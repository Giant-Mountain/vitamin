import { order, Return, Whole, invoice,getInvoice } from '../../views/order/api/order'

const state = {
  list: [],
  tablist: [],
  number: [],
  invoice: [],
  pagination:[],
  Returnaction:[],
  Wholeination:[],
  operation:[],
  getInvoice:[]
}

const mutations = {
  SET_TABLE: (state, payload) => {
    state.list = payload.list
  },
  RETURN: (state, payload) => {
    state.tablist = payload.list
  },
  WholeList: (state, payload) => {
    state.number = payload.list
  },
  invoiceList: (state, payload) => {
    state.invoice = payload.list
  },
  Mainorder:(state, payload) => {
    state.pagination = payload.page
  },
  Returnaction:(state, payload) => {
    state.Returnaction = payload.page
  },
  Wholeination:(state, payload) => {
    state.Wholeination = payload.pagination
  },
  operation:(state, payload) => {
    state.operation = payload.page
  },
  getInvoice:(state, payload) => {
    state.getInvoice = payload.info
    console.log(state.getInvoice)
  },
}

const actions = {
  async getTableList({ commit }, query) {
    const result = await order(query)
    commit('SET_TABLE', result.data)
  },
  async getoperation({ commit }, query) {
    const result = await invoice(query)
    commit('operation', result.data)
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
  },
  async getMainorder({ commit }, query) {
    const result = await order(query)
    commit('Mainorder', result.data)
  },
  async getReturnaction({ commit }, query) {
    const result = await Return(query)
    commit('Returnaction', result.data)
  },
  async getWholeination({ commit }, query) {
    const result = await Whole(query)
    commit('Wholeination', result.data)
  },
  async getInvoiceInfo({ commit }, query) {
    const result = await getInvoice(query)
    commit('getInvoice', result.data)
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
