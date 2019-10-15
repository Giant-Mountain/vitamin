import { ManagerList, FloorList } from '@/api/manager'

const state = {
  ManagerList: [],
  FloorList: []
}
const mutations = {
  MANAGER_FN: (state, payload) => {
    state.ManagerList = payload.list
    // console.log(state.ManagerList)
  },
  FLOOR_FN: (state, payload) => {
    state.FloorList = payload.list
    // console.log(state.FloorList);
  }
}
const actions = {
  async getManagerList({ commit }, query) {
    const result = await ManagerList(query)
    commit('MANAGER_FN', result.data)
  },
  async getFloorList({ commit }, query) {
    const result = await FloorList(query)
    commit('FLOOR_FN', result.data)
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
