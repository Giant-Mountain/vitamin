import { NavList, FloorList } from '@/api/navigation'
const state = {
  navlist: [],
  floorlist: []

}
const mutations = {
  Nav_FN: (state, payload) => {
    state.navlist = payload.list
  },
  FLOOR_LIST: (state, payload) => {
    state.floorlist = payload.list
  }
}
const actions = {
  async getNavList({ commit }, query) {
    const result = await NavList(query)
    commit('Nav_FN', result.data)
  },
  async getFloorList({ commit }, query) {
    const result = await FloorList(query)
    commit('FLOOR_LIST', result.data)
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
