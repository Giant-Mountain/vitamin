<template>
  <div class="custormer-container">
    <div class="custormer-header">
      <div style="font-size:16px">顾客管理</div>
      <div>
        <span>批量导出</span>
        <span>查看已生成报表</span>
      </div>
      <div>
        <span :class="currentIndex===0?'tab-active':''" @click="handIndex(0)">有效顾客</span>
        <span :class="currentIndex===1?'tab-active':''" @click="handIndex(1)">潜在顾客</span>
      </div>
    </div>
    <div class="card-group">
      <CustormerFrom :froms="froms[currentIndex]" :form="form" />
    </div>
    <div class="customer-list">
      <CustormerTable :table-column="tableColumn[currentIndex]" :table-data="tableLists[currentIndex]" />
    </div>
  </div>
</template>
<script>
import CustormerFrom from '@/components/CustormerFrom/index.vue'
import CustormerTable from '@/components/CustermerTable/index.vue'
import { MergerList } from '@/api/custormer.js'
export default {
  components: {
    CustormerFrom,
    CustormerTable
  },
  data() {
    return {
      currentIndex: 0,
      form: {
        tel: '',
        name: '',
        nickname: '',
        vipnumber: '',
        vip: '',
        range: [],
        consumptionTime: '',
        EffectiveTime: ''
      },
      froms: [
        [
          {
            label: '手机号:',
            name: 'tel',
            placeholder: '请输入',
            is: 'el-input'
          },
          {
            label: '姓名:',
            name: 'name',
            placeholder: '请输入',
            is: 'el-input'
          },
          {
            label: '昵称:',
            name: 'nickname',
            placeholder: '请输入',
            is: 'el-input'
          },

          {
            label: '会员卡号:',
            name: 'vipnumber',
            placeholder: '请输入',
            is: 'el-input'
          },
          {
            label: '会员等级:',
            name: 'vip',
            is: 'el-select',
            placeholder: '请选择',
            options: [
              {
                label: '是',
                value: 1
              },
              {
                label: '否',
                value: 0
              }
            ]
          },
          {
            label: '总购买次数:',
            name: 'range',
            is: 'range-input'
          },
          {
            label: '客单价:',
            name: 'range',
            is: 'range-input'
          },
          {
            label: '最近消费时间:',
            name: 'consumptionTime',
            type: 'daterange',
            placeholder: '选择时间',
            rangeSeparator: '至',
            startPlaceholder: '开始日期',
            endPlaceholder: '结束日期',
            is: 'el-date-picker'
          },
          {
            label: '成为有效顾客:',
            name: 'EffectiveTime',
            type: 'daterange',
            placeholder: '选择时间',
            rangeSeparator: '至',
            startPlaceholder: '开始日期',
            endPlaceholder: '结束日期',
            is: 'el-date-picker'
          }
        ],
        [
          {
            label: '手机号:',
            name: 'tel',
            placeholder: '请输入',
            is: 'el-input'
          },
          {
            label: '会员卡号:',
            name: 'vipnumber',
            placeholder: '请输入',
            is: 'el-input'
          }
        ]
      ],
      tableColumn: [
        [
          {
            lable: '日期',
            prop: 'date'
          },
          {
            lable: '姓名',
            prop: 'name'
          },
          {
            lable: '省份',
            prop: 'province'
          },
          {
            lable: '市区',
            prop: 'city'
          },
          {
            lable: '地址',
            prop: 'address'
          },
          {
            lable: '邮编',
            prop: 'zip'
          }
        ]
      ],
      tableLists: [
        [
          {
            date: '2016-05-03',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
          {
            date: '2016-05-02',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
          {
            date: '2016-05-01',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
          {
            date: '2016-05-08',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
          {
            date: '2016-05-06',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
          {
            date: '2016-05-07',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }
        ]
      ]
    }
  },
  mounted() {
    MergerList().then(res => {
      console.log(res)
    })
  },
  methods: {
    handIndex(index) {
      this.currentIndex = index
    }
  }
}
</script>

<style lang="scss" scoped>
* {
  font-size: 12px;
}
%juzhong {
  display: flex;
  justify-content: center;
  align-items: center;
}
.custormer-container {
  padding: 24px;
}

.custormer-header {
  padding: 24px;
  background: #fff;
  border-bottom: 1px solid #f5f5f5;
  height: 150px;
  position: relative;
  display: flex;
  flex-direction: column;
  div:nth-child(1) {
    flex: 2;
  }
  div:nth-child(2) {
    flex: 6;
    display: flex;
    align-items: center;
    span {
      margin-right: 25px;
    }
  }
  div:nth-child(3) {
    height: 25px;
    span {
      margin-right: 25px;
      height: 100%;
      display: inline-block;
    }
    .tab-active {
      border-bottom: 2px solid #3ec6b6;
      color: #3ec6b6;
    }
  }
}
.card-group {
  padding: 24px;
  background: #fff;
  overflow: hidden;
  border-bottom: 1px solid #e8e8e8;
}
.customer-list {
  padding: 24px 24px 100px;
  background: #fff;
  margin-top: 24px;
}
</style>
