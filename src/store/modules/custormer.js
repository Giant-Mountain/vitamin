import { MergerList, SearchList } from '@/api/custormer'

const state = {
  tableList: [],
  pagination: {},
  gradeLevel: [],
  dialogShow: false,
  addType: 1
}

const mutations = {
  SET_TABLE: (state, payload) => {
    state.tableList = payload
    state.pagination = payload.pagination
  },
  SET_GRADELEVEL: (state, payload) => {
    console.log(payload)
    for (const i in payload) {
      console.log(i)
      state.gradeLevel.push({
        label: payload[i],
        value: i
      })
    }
    console.log(state.gradeLevel)
  },
  SET_DIALOG: (state, payload) => {
    state.dialogShow = payload
  },
  SET_TYPE: (state, payload) => {
    state.addType = payload
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
