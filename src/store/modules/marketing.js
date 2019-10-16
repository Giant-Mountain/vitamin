import { MarketList, MarketSelectData } from '@/api/marketing'

const state = {
  tableList: [],
  pagination: {},
  froms: [
    [
      {
        label: '活动名称:',
        name: 'tel',
        placeholder: '请输入',
        is: 'el-input'
      },
      {
        label: '活动范围:',
        name: 'active_range',
        is: 'el-select',
        placeholder: '请选择',
        options: null
      },
      {
        label: '活动状态:',
        name: 'active_status',
        is: 'el-select',
        placeholder: '请选择',
        options: null
      },
      {
        label: '楼层:',
        name: 'floor',
        is: 'el-select',
        placeholder: '请选择',
        options: null
      },
      {
        label: '店铺分类:',
        name: 'store_category',
        is: 'el-select',
        placeholder: '请选择',
        options: null
      },
      {
        label: '店铺:',
        name: 'vm_store',
        is: 'el-select',
        placeholder: '请选择',
        options: null
      },
      {
        label: '开始时间:',
        name: 'consumptionTime',
        type: 'daterange',
        placeholder: '选择时间',
        rangeSeparator: '至',
        startPlaceholder: '开始日期',
        endPlaceholder: '结束日期',
        is: 'el-date-picker'
      },
      {
        label: '结束时间:',
        name: 'EffectiveTime',
        type: 'daterange',
        placeholder: '选择时间',
        rangeSeparator: '至',
        startPlaceholder: '开始日期',
        endPlaceholder: '结束日期',
        is: 'el-date-picker'
      }
    ]
  ]
}
const mutations = {
  SET_LIST: (state, payload) => {
    state.tableList = payload
    state.pagination = payload.pagination
  },
  SET_SELECTDATA: (state, payload) => {
    const arr = []
    for (const i in payload) {
      arr.push({
        label: i,
        value: payload[i]
      })
    }
    state.froms[0].map(key => {
      arr.map(item => {
        if (key.name === item.label) {
          key.options = item.value
        }
        return key
      })
    })
    console.log(state.froms)
  }
}
const actions = {
  async getMarketList({ commit }, query) {
    const result = await MarketList(query)
    commit('SET_LIST', result.data)
  },
  async getMarketSelectData({ commit }, query) {
    const result = await MarketSelectData(query)
    console.log(result)
    commit('SET_SELECTDATA', result.data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
