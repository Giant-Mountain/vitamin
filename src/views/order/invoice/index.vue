<template>
  <div>
    <Teamlist
      :nav-list="navList"
      :title="title"
      :form="form"
      :froms="froms"
      :table-list="list"
      :flag="flag"
      :table="table"
      :table-column="tableColumn"
      :table-component="tableComponent"
      :current-page4="currentPage4"
      :current-type="currentType"
      :pagination="operation"
      :direction="direction"
      :get-invoice="getInvoice"
      @search="searchSelect"
      @handleDetail="handleComponent"
      @handReset="ResetClick"
    />
  </div>
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
      table: false,
      flag: false,
      direction: 'rtl',
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
          }
        ]
      ],
      tableComponent: [
        {
          lable: '操作',
          content: ['详情']
        }
      ],
      currentPage4: 1,
      currentType: 5
    }
  },
  computed: mapState({
    list: store => store.order.invoice,
    operation: store => store.order.operation,
    getInvoice: store => store.order.getInvoice
  }),
  mounted() {
    this.$store.dispatch('order/getoperation', {
      org_id: 61500,
      page: 1,
      org_type: 5
    })
    this.$store.dispatch('order/invoiceList', {
      org_id: 61500,
      page: 1,
      org_type: 5
    })
  },
  methods: {
    // //点击切换
    // handleTab(current){
    //    this.current=current
    // },
    // 点击跳详情
    handleComponent(id) {
      this.table = true
      this.$store.dispatch('order/getInvoiceInfo', {
        id: id
      })
    },
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
