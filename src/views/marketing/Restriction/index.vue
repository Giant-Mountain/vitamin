<template>
  <div class="custormer-container">
    <PriceHeader
      :title="title"
      :current-index="currentIndex"
      :table-column="tableColumn[0]"
      :add-dialog="addDialog"
      :table-list="tableList.list"
      :table-component="tableComponent"
      @ChangeId="handClick"
    />
    <el-pagination
      :current-page="currentPage4"
      :page-sizes="[10, 15, 20, 25]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pagination.total"
      style="float:right"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
import PriceHeader from '@/components/PriceHeader/index.vue'
import { mapState } from 'vuex'
export default {
  data() {
    return {
      addDialog: true,
      title: '限购活动',
      currentIndex: 3,
      currentPage4: 1,
      tableColumn: [
        [
          {
            lable: '活动名称',
            prop: 'name'
          },
          {
            lable: '每用户总限购数',
            prop: 'total_count'
          },
          {
            lable: '每用户每日限购数',
            prop: 'day_count'
          },
          {
            lable: '开始时间',
            prop: 'start_time'
          },
          {
            lable: '结束时间',
            prop: 'end_time'
          },
          {
            lable: '状态',
            prop: 'status'
          },
          {
            lable: '商品数',
            prop: 'product_num'
          },
          {
            lable: '创建者',
            prop: 'created_by_name'
          },
          {
            lable: '创建时间',
            prop: 'created_at_time'
          }
        ]
      ],
      tableComponent: [
        {
          lable: '操作',
          content: ['查看', '失效']
        }
      ]
    }
  },
  computed: mapState({
    tableList: store => store.marketing.tableList,
    pagination: store => store.marketing.pagination
  }),
  mounted() {
    this.getMarketList()
    this.$store.dispatch('marketing/getMarketRestrictList', {
      page: this.currentPage4,
      page_size: 10
    })
  },
  methods: {
    handClick(id) {
      this.currentIndex = id
      this.getMarketList()
    },
    getMarketList() {
      this.$store.dispatch('marketing/getMarketRestrictList', {
        page: this.currentPage4,
        page_size: 10
      })
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    // 点击换页面并进行数据重新渲染
    handleCurrentChange(val) {
      this.currentPage4 = val
      this.getMarketList()
    }
  },
  components: {
    PriceHeader
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
  width: 100%;
  height: auto;
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
