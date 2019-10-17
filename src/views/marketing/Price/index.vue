<template>
  <div class="custormer-container">
    <PriceHeader
      :title="title"
      :nav-list="navList"
      :froms="froms[0]"
      :form="form"
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
      :total="pagination.totalCount"
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
      title: '一口价活动',
      currentIndex: 3,
      currentPage4: 1,
      navList: [
        {
          nav: '活动管理',
          id: 3
        },
        {
          nav: '待审核',
          id: 1
        },
        {
          nav: '审核不通过',
          id: 2
        }
      ],
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
      // froms: [
      //   [
      //     {
      //       label: "活动名称:",
      //       name: "tel",
      //       placeholder: "请输入",
      //       is: "el-input"
      //     },
      //     {
      //       label: "活动范围:",
      //       name: "grade_code",
      //       is: "el-select",
      //       placeholder: "请选择",
      //       options: [
      //         {
      //           label: "商场",
      //           value: "1"
      //         },
      //         {
      //           label: "门店",
      //           value: "2"
      //         }
      //       ]
      //     },
      //     {
      //       label: "活动状态:",
      //       name: "grade_code",
      //       is: "el-select",
      //       placeholder: "请选择",
      //       options: [
      //         {
      //           label: "商场",
      //           value: "1"
      //         },
      //         {
      //           label: "门店",
      //           value: "2"
      //         }
      //       ]
      //     },
      //     {
      //       label: "楼层:",
      //       name: "grade_code",
      //       is: "el-select",
      //       placeholder: "请选择",
      //       options: [
      //         {
      //           label: "商场",
      //           value: "1"
      //         },
      //         {
      //           label: "门店",
      //           value: "2"
      //         }
      //       ]
      //     },
      //     {
      //       label: "店铺分类:",
      //       name: "grade_code",
      //       is: "el-select",
      //       placeholder: "请选择",
      //       options: [
      //         {
      //           label: "商场",
      //           value: "1"
      //         },
      //         {
      //           label: "门店",
      //           value: "2"
      //         }
      //       ]
      //     },
      //     {
      //       label: "店铺:",
      //       name: "grade_code",
      //       is: "el-select",
      //       placeholder: "请选择",
      //       options: [
      //         {
      //           label: "商场",
      //           value: "1"
      //         },
      //         {
      //           label: "门店",
      //           value: "2"
      //         }
      //       ]
      //     },
      //     {
      //       label: "开始时间:",
      //       name: "consumptionTime",
      //       type: "daterange",
      //       placeholder: "选择时间",
      //       rangeSeparator: "至",
      //       startPlaceholder: "开始日期",
      //       endPlaceholder: "结束日期",
      //       is: "el-date-picker"
      //     },
      //     {
      //       label: "结束时间:",
      //       name: "EffectiveTime",
      //       type: "daterange",
      //       placeholder: "选择时间",
      //       rangeSeparator: "至",
      //       startPlaceholder: "开始日期",
      //       endPlaceholder: "结束日期",
      //       is: "el-date-picker"
      //     }
      //   ]
      // ],
      tableColumn: [
        [
          {
            lable: '活动名称',
            prop: 'active_name'
          },
          {
            lable: '活动范围',
            prop: 'active_range_str'
          },
          {
            lable: '开始时间',
            prop: 'start_time_str'
          },
          {
            lable: '结束时间',
            prop: 'end_time_str'
          },
          {
            lable: '参加店铺/数',
            prop: 'join_store_nums'
          },
          {
            lable: '商品数',
            prop: 'join_prod_nums'
          },
          {
            lable: '活动状态',
            prop: 'active_status_str'
          },
          {
            lable: '创建时间',
            prop: 'created_at_str'
          },
          {
            lable: '创建者',
            prop: 'created_by_str'
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
    pagination: store => store.marketing.pagination,
    froms: store => store.marketing.froms
  }),
  mounted() {
    this.getMarketList()
    this.$store.dispatch('marketing/getMarketSelectData', {
      tag_status: this.currentIndex,
      type: 2
    })
  },
  methods: {
    handClick(id) {
      this.currentIndex = id
      this.getMarketList()
    },
    getMarketList() {
      this.$store.dispatch('marketing/getMarketList', {
        page: this.currentPage4,
        pageSize: 10,
        tag_status: this.currentIndex,
        type: 2
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
