<template>
  <Teamlist
    :nav-list="navList"
    :title="title"
    :form="form"
    :froms="froms"
    :tableList="list"
    :flag="flag"
    :table-column="tableColumn"
    :current-page4="currentPage4"
    :current-type="currentType"
   :pagination="Wholeination"
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
      title: '整单退',
      navList:[''],
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
            lable: '退款时间',
            prop: 'return_time_str'
          },
          {
            lable: '下单时间',
            prop: 'order_time_str'
          },
          {
            lable: '顾客',
            prop: 'name'
          },
          {
            lable: '退款金额',
            prop: 'return_total_amount'
          },
          {
            lable: 'ERP退单',
            prop: 'erp_status_str'
          }
        ]
      ],
      currentPage4: 1,
      currentType: 5
    }
  },
  computed: mapState({
    list: store => store.order.number,
    Wholeination: store => store.order.Wholeination
  }),
  mounted() {
    this.$store.dispatch('order/getWholeination',{
      mall_id: 61500,
      page: this.currentPage4,
      org_type: this.currentType
    })
    this.$store.dispatch('order/getWholeList', {
      mall_id: 61500,
      page: 1,
      org_type: 5
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
      this.$store.dispatch('order/getWholeList', {
        mall_id: 61500,
        page: 1,
        org_type: 5
      })
      let { delivery_name, delivery_tel, order_number } = data;
      (delivery_name = ''), (delivery_tel = ''), (order_number = '')
    },
    searchSelect(data) {
      console.log(this.list)
      const { delivery_name, delivery_tel, order_number } = data
      console.log(data)
      this.$store.dispatch('order/getWholeList', {
        mall_id: 61500,
        page: 1,
        org_type: 5,
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
