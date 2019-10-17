import { NavList } from '@/api/navigation'
const state = {
  navlist: []

}
const mutations = {
  Nav_FN: (state, payload) => {
    state.navlist = payload.list
  }
}
const actions = {
  async getNavList({ commit }, query) {
    const result = await NavList(query)
    commit('Nav_FN', result.data)
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
