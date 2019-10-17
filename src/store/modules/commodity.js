import { prodList } from '../../views/commodity/api'
const state = {
  list: []
}

const mutations = {
  SET_TABLE: (state, payload) => {
    state.list = payload.list
  }
}

const actions = {
  async getTableList({ commit }, query) {
    const result = await prodList(query)
    commit('SET_TABLE', result.data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
