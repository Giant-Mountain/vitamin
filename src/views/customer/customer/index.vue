<template>
  <div class="custormer-container">
    <div class="custormer-header">
      <div style="font-size:16px">顾客管理</div>
      <div>
        <span class="el-icon-download">批量导出</span>
        <span>
          <i class="el-icon-document-remove" /> 查看已生成报表
        </span>
      </div>
      <div>
        <span :class="currentIndex===0?'tab-active':''" @click="handIndex(0,1)">有效顾客</span>
        <span :class="currentIndex===1?'tab-active':''" @click="handIndex(1,2)">潜在顾客</span>
      </div>
    </div>
    <div class="card-group">
      <CustormerFrom
        :froms="froms[currentIndex]"
        :form="form"
        :grade-level="gradeLevel"
        @handSearch="handSearchInput"
        @resetInputValue="resetFromsValue"
      />
    </div>
    <div class="customer-list">
      <CustormerTable
        :add-dialog="addDialog"
        :table-column="tableColumn[currentIndex]"
        :table-list="tableList.list"
        :table-component="tableComponent"
        @handSeeContent="handClickSee"
      />
    </div>
    <el-pagination
      :current-page="currentPage4"
      :page-sizes="[10, 15, 20, 25]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pagination.totalCount"
      style="float:right"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>
<script>
import CustormerFrom from '@/components/CustormerFrom/index.vue'
import CustormerTable from '@/components/CustermerTable/index.vue'
import { mapState } from 'vuex'

export default {
  name: 'Customer',
  components: {
    CustormerFrom,
    CustormerTable
  },
  data() {
    return {
      addDialog: false,
      currentIndex: 0,
      currentPage4: 1,
      currentType: 1,
      form: {
        tel: '',
        name: '',
        nickname: '',
        grade_code: '',
        cid: '',
        member_level: '',
        buy_times: [],
        lately_consume_time: '',
        lately_view_time: ''
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
            name: 'nickname',
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
            name: 'cid',
            placeholder: '请输入',
            is: 'el-input'
          },
          {
            label: '会员等级:',
            name: 'grade_code',
            is: 'el-select',
            placeholder: '请选择',
            options: null
          },
          {
            label: '总购买次数:',
            name: 'buy_times',
            is: 'range-input'
          },
          {
            label: '客单价:',
            name: 'buy_times',
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
            name: 'cid',
            placeholder: '请输入',
            is: 'el-input'
          }
        ]
      ],
      tableColumn: [
        [
          {
            lable: '姓名',
            prop: 'name'
          },
          {
            lable: '昵称',
            prop: 'nickname'
          },
          {
            lable: '手机号',
            prop: 'grade_code'
          },
          {
            lable: '会员卡号',
            prop: 'cid'
          },
          {
            lable: '会员等级',
            prop: 'member_level'
          },
          {
            lable: '总购买次数',
            prop: 'buy_times'
          },
          {
            lable: '客单价(￥)',
            prop: 'average_price'
          },
          {
            lable: '最近消费时间',
            prop: 'lately_consume_time'
          },
          {
            lable: '最近浏览时间',
            prop: 'lately_view_time'
          }
        ],
        [
          {
            lable: '姓名',
            prop: 'name'
          },
          {
            lable: '昵称',
            prop: 'nickname'
          },
          {
            lable: '手机号',
            prop: 'grade_code'
          },
          {
            lable: '会员卡号',
            prop: 'cid'
          },
          {
            lable: '会员等级',
            prop: 'member_level'
          },
          {
            lable: '最近浏览时间',
            prop: 'lately_view_time'
          }
        ]
      ],
      tableComponent: [
        {
          lable: '操作',
          content: ['查看']
        }
      ]
    }
  },
  computed: mapState({
    tableList: store => store.custormer.tableList,
    pagination: store => store.custormer.pagination,
    gradeLevel: store => store.custormer.gradeLevel
  }),
  mounted() {
    this.$store.dispatch('custormer/getTableList', {
      type: this.currentType,
      page: this.currentPage4
    })
    this.$store.dispatch('custormer/getSearchList')
  },
  methods: {
    handClickSee(id) {
      this.$router.push(`customer/${id}`)
    },
    // 用来tab切换以及切tab切换的数据
    handIndex(index, type) {
      this.currentIndex = index
      this.currentType = type
      this.$store.dispatch('custormer/getTableList', {
        type: this.currentType,
        page: this.currentPage4
      })
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    // 点击换页面并进行数据重新渲染
    handleCurrentChange(val) {
      this.currentPage4 = val
      this.$store.dispatch('custormer/getTableList', {
        type: 1,
        page: this.currentPage4
      })
    },
    handSearchInput(data) {
      const {
        tel,
        name,
        nickname,
        grade_code,
        cid,
        member_level,
        buy_times,
        lately_consume_time,
        lately_view_time
      } = data
      this.$store.dispatch('custormer/getTableList', {
        type: this.currentType,
        page: this.currentPage4,
        tel,
        name,
        nickname,
        grade_code,
        cid,
        member_level,
        buy_times,
        lately_consume_time,
        lately_view_time
      })
    },
    resetFromsValue() {
      this.form = {
        tel: '',
        name: '',
        nickname: '',
        grade_code: '',
        cid: '',
        member_level: '',
        buy_times: [],
        lately_consume_time: '',
        lately_view_time: ''
      }
    },
    handDialogShow(flag) {
      console.log(1)
      console.log(flag)
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
  padding: 24px 24px 24px;
  background: #fff;
  margin-top: 24px;
}
</style>
