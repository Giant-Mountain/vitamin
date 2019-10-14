import { tableData } from '@/api/team'

const state = {
  tableList: [],
  pagination: {}
}

const mutations = {
  SET_TABLE: (state, payload) => {
    state.tableList = payload.list
    state.pagination = payload.pagination
  }
}

const actions = {
  async getTableList({ commit }, payload) {
    const result = await tableData(payload)
    commit('SET_TABLE', result.data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
