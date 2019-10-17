<template>
  <div class="custormer-container">
    <div class="custormer-header">
      <div style="font-size:16px">顾客管理</div>
    </div>
    <div class="card-group">
      <CustormerFrom
        :froms="promotionFroms[currentIndex]"
        :form="form"
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
      :total="pagination"
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
      addDialog: true,
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
      tableColumn: [
        [
          {
            lable: '店铺名称',
            prop: 'vm_store_name'
          },
          {
            lable: '楼层',
            prop: 'floor_name'
          },
          {
            lable: '店内促销',
            prop: 'summary'
          },
          {
            lable: '活动时间',
            prop: 'activity_time_str'
          },
          {
            lable: '状态',
            prop: 'promotion_status'
          }
        ]
      ],
      tableComponent: [
        {
          lable: '操作',
          content: ['查看', '编辑', '删除']
        }
      ]
    }
  },
  computed: mapState({
    tableList: store => store.marketing.tableList,
    pagination: store => store.marketing.pagination,
    promotionFroms: store => store.marketing.promotionFroms
  }),
  mounted() {
    this.$store.dispatch('marketing/getPromotionSelect')
    this.$store.dispatch('marketing/getPromotionData', {
      type: this.currentType,
      page: this.currentPage4
    })
    // this.$store.dispatch("marketing/getSearchList");
  },
  methods: {
    handClickSee(id) {
      this.$router.push(`customer/${id}`)
    },
    // 用来tab切换以及切tab切换的数据
    handIndex(index, type) {
      this.currentIndex = index
      this.currentType = type
      this.$store.dispatch('marketing/getPromotionData', {
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
      this.$store.dispatch('marketing/getPromotionData', {
        type: 1,
        page: this.currentPage4
      })
    },
    handSearchInput(data) {
      console.log(data)
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
      this.$store.dispatch('marketing/getPromotionData', {
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
