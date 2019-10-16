import { PageList } from '@/api/page'
const state = {
  pagelist: []
}
const mutations = {
  PAGE_FN: (state, payload) => {
    state.pagelist = payload.list
    console.log(state.pagelist)
  }
}
const actions = {
  async getPageList({ commit }, query) {
    const result = await PageList(query)
    commit('PAGE_FN', result.data)
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
