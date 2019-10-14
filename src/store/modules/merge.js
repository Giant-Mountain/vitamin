import { qrcodeList } from '@/api/merge'

const state = {
  qrcodeList: [],
  pagination: null
}

const mutations = {
  SET_QRCODELIST: (state, payload) => {
    state.qrcodeList = payload.list.map(item => {
      if (item.type === 1) {
        item.type = '自营员工'
      } else {
        item.type = '专柜员工	'
      }
      return item
    })
    state.pagination = payload.total
  }
}

const actions = {
  async getQrcodeList({ commit }, payload) {
    const result = await qrcodeList(payload)
    commit('SET_QRCODELIST', result.data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
