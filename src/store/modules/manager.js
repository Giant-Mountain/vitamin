import { ManagerList, FloorList, EList, BrandList } from '@/api/manager'

const state = {
  ManagerList: [],
  FloorList: [],
  elist: [],
  brandlist: []
}
const mutations = {
  MANAGER_FN: (state, payload) => {
    state.ManagerList = payload.list
  },
  FLOOR_FN: (state, payload) => {
    state.FloorList = payload.list
  },
  ELIST_FN: (state, payload) => {
    state.elist = payload
  },
  BRAND_FN: (state, payload) => {
    state.brandlist = payload
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
  },
  async getEList({ commit }, query) {
    const result = await EList(query)
    commit('ELIST_FN', result.data)
  },
  async getBrandList({ commit }, query) {
    const result = await BrandList(query)
    commit('BRAND_FN', result.data)
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
