import {
  tableData,
  roleData,
  selectList,
  shopCategory,
  shopFloor,
  seriveList,
  seriveSort,
  serivePublic,
  seriveSmall,
  onlineShopmenu,
  onlineShopbase,
  onlineShoplimit,
  serviceAbort
} from '@/api/team'

const state = {
  list: [],
  tableList: [],
  pagination: {},
  paginations: {},
  roleList: [],
  rolePagination: {},
  shopList: [],
  roleLists: [],
  category: [],
  floorList: [],
  areaList: {},
  crmList: {},
  erpList: {},
  payList: {},
  sorts: {},
  public: {},
  small: {},
  shopmenu: [],
  shoplimit: {},
  shopbase: {},
  serviceabort: {}
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
    state.category = payload
  },
  FLOOR_LIST: (state, payload) => {
    state.floorList = payload.list
  },
  SERIVE_LIST: (state, payload) => {
    state.areaList = payload.serviceSetting
    state.crmList = payload.crmSetting
    state.erpList = payload.erpSetting
    state.payList = payload.paySetting
  },
  SERIVE_SORT: (state, payload) => {
    state.sorts = payload
  },
  SERIVE_PUBLIC: (state, payload) => {
    state.public = payload
  },
  SERIVE_SMALL: (state, payload) => {
    state.small = payload
  },
  SHOP_MENU: (state, payload) => {
    state.shopmenu = payload
  },
  SHOP_BASE: (state, payload) => {
    state.shopbase = payload
  },
  SHOP_LIMIT: (state, payload) => {
    state.shoplimit = payload
  },
  SERVICE_ABORT: (state, payload) => {
    state.serviceabort = payload
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
  },
  async getFloorList({ commit }, payload) {
    const result = await shopFloor(payload)
    commit('FLOOR_LIST', result.data)
  },
  async getSeriveList({ commit }, payload) {
    const result = await seriveList(payload)
    commit('SERIVE_LIST', result.data)
  },
  async getSeriveSort({ commit }, payload) {
    const result = await seriveSort(payload)
    commit('SERIVE_SORT', result.data)
  },
  async getSerivePublic({ commit }, payload) {
    const result = await serivePublic(payload)
    commit('SERIVE_PUBLIC', result.data)
  },
  async getSeriveSmall({ commit }, payload) {
    const result = await seriveSmall(payload)
    commit('SERIVE_SMALL', result.data)
  },
  async getShopMenu({ commit }, payload) {
    const result = await onlineShopmenu(payload)
    commit('SHOP_MENU', result.data)
  },
  async getShopBase({ commit }, payload) {
    const result = await onlineShopbase(payload)
    commit('SHOP_BASE', result.data)
  },
  async getShopLimit({ commit }, payload) {
    const result = await onlineShoplimit(payload)
    commit('SHOP_LIMIT', result.data)
  },
  async getServiceAbort({ commit }, payload) {
    const result = await serviceAbort(payload)
    commit('SERVICE_ABORT', result.data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
