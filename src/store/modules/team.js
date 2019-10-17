import { tableData, roleData, selectList, shopCategory } from '@/api/team'

const state = {
  list: [],
  tableList: [],
  pagination: {},
  paginations: {},
  roleList: [],
  rolePagination: {},
  shopList: [],
  roleLists: [],
  categoryList: []
}

const mutations = {
  SET_TABLE: (state, payload) => {
    state.tableList = payload.list
    state.pagination = payload.pagination
  },
  SET_TABLES: (state, payload) => {
    state.list = payload.list
    state.paginations = payload.pagination
  },
  ROLE_TABLE: (state, payload) => {
    state.roleList = payload.list
    state.rolePagination = payload.pagination
  },
  SELECT_LIST: (state, payload) => {
    state.shopList = payload.stores
    state.roleLists = payload.roles
  },
  CATEGORY_LIST: (state, payload) => {
    state.categoryList = payload
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
  },
  async getRoleList({ commit }, payload) {
    const result = await roleData(payload)
    commit('ROLE_TABLE', result.data)
  },
  async getSelectList({ commit }, payload) {
    const result = await selectList(payload)
    commit('SELECT_LIST', result.data)
  },
  async getCategoryList({ commit }, payload) {
    const result = await shopCategory(payload)
    commit('CATEGORY_LIST', result.data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
