import { tableData } from '@/api/team'

const state = {
  list: [],
  tableList: [],
  pagination: {},
  paginations: {}
}

const mutations = {
  SET_TABLE: (state, payload) => {
    state.tableList = payload.list
    state.pagination = payload.pagination
  },
  SET_TABLES: (state, payload) => {
    state.list = payload.list
    state.paginations = payload.paginations
  }
}

const actions = {
  async getTableList({ commit }, payload) {
    const result = await tableData(payload)
    commit('SET_TABLE', result.data)
  },
  async getTableLists({ commit }, payload) {
    const result = await tableData(payload)
    commit('SET_TABLES', result.data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
