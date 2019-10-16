<template>
  <Teamlist
    :nav-list="navList"
    :title="title"
    :form="form"
    :froms="froms"
    :list="list"
    :flag="flag"
    :table-column="tableColumn"
    :current-page4="currentPage4"
    :current-type="currentType"
    :total="pagination.totalCount"
    @search="searchSelect"
    @handReset="ResetClick"
  />
</template>
<script>
import { floor } from '../api/order.js'
import Teamlist from '@/components/Teamlist'
import { mapState } from 'vuex'
export default {
  name: 'MemberManger',
  components: {
    Teamlist
  },
  data() {
    return {
      flag: false,
      form: {
        delivery_name: '',
        delivery_tel: '',
        order_number: ''
      },
      navList: ['待发票', '全部'],
      title: '发票管理',
      froms: [
        [
          {
            label: '姓名',
            name: 'delivery_name',
            placeholder: '请输入姓名',
            is: 'el-input'
          },
          {
            label: '手机号',
            name: 'delivery_tel',
            placeholder: '请输入手机号',
            is: 'el-input'
          },
          {
            label: '订单编号',
            name: 'order_number',
            placeholder: '请输入订单编号',
            is: 'el-input'
          }
        ]
      ],
      tableColumn: [
        [
          {
            lable: '订单号',
            prop: 'number'
          },
          {
            lable: '付款时间',
            prop: 'created_at_str'
          },
          {
            lable: '实付金额',
            prop: 'pay_amount'
          },
          {
            lable: '发票状态',
            prop: 'invoiceStatus'
          },
          {
            lable: '详情',
            prop: 'return_total_amount'
          }
        ]
      ],
      currentPage4: 1,
      currentType: 5
    }
  },
  computed: mapState({
    list: store => store.order.invoice,
    pagination: store => store.custormer.pagination
  }),
  mounted() {
    this.$store.dispatch('custormer/getSearchList')
    this.$store.dispatch('order/invoiceList', {
      org_id: 61500,
      page: 1,
      org_type: 5,
      invoivce_status: 0
    })
  },
  methods: {
    // //点击切换
    // handleTab(current){
    //    this.current=current
    // },
    // 重置
    ResetClick(data) {
      console.log(1)
      this.$store.dispatch('order/invoiceList', {
        org_id: 61500,
        page: 1,
        org_type: 5,
        invoivce_status: 0
      })
      let { delivery_name, delivery_tel, order_number } = data;
      (delivery_name = ''), (delivery_tel = ''), (order_number = '')
    },
    searchSelect(data) {
      console.log(this.list)
      const { delivery_name, delivery_tel, order_number } = data
      console.log(data)
      this.$store.dispatch('order/invoiceList', {
        org_id: 61500,
        page: 1,
        org_type: 5,
        invoivce_status: 0,
        delivery_tel: delivery_tel,
        order_number: order_number,
        delivery_name: delivery_name
      })
    }
  }
}
</script>
 <style>
@import url("../style/index.css");
</style>
