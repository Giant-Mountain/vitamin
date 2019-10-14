import { MergerList, SearchList } from '@/api/custormer'

const state = {
  tableList: [],
  pagination: {},
  gradeLevel: []
}

const mutations = {
  SET_TABLE: (state, payload) => {
    state.tableList = payload
    state.pagination = payload.pagination
  },
  SET_GRADELEVEL: (state, payload) => {
    for (const i in payload) {
      state.gradeLevel.push({
        label: payload[i],
        value: payload[i]
      })
    }
  }
}

const actions = {
  async getTableList({ commit }, payload) {
    const result = await MergerList(payload)
    commit('SET_TABLE', result.data)
  },
  async getSearchList({ commit }) {
    const result = await SearchList()
    commit('SET_GRADELEVEL', result.data.grade_level)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
