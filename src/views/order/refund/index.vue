<template>
  <Teamlist
    :nav-list="navList"
    :title="title"
    :form="form"
    :froms="froms"
    :tableList="list"
    :table-column="tableColumn"
    :current-page4="currentPage4"
    :current-type="currentType"
    :pagination="Returnaction"
    :flag="flag"
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
      flag: true,
      form: {
        brand_id: '',
        sub_number: '',
        floor_id: '',
        prod_name: '',
        prod_code: '',
        delivery_name: '',
        return_number: '',
        vm_store_id: '',
        order_number: '',
        submit_time: '',
        delivery_tel: '',
        order_pay_time: ''
      },
      navList: ['全部', '待商家处理', '待买家处理', '待审核', '待财务确认', '退款成功', '退款关闭'],
      title: '店铺管理',
      froms: [
        [
          {
            label: '退单号',
            name: 'return_number',
            placeholder: '请输入店铺订单编号',
            is: 'el-input'
          },
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
            label: '订单号',
            name: 'order_number',
            placeholder: '请输入订单编号',
            is: 'el-input'
          },
          {
            label: '店铺订单号',
            name: 'sub_number',
            is: 'el-input'
          },
          {
            label: '楼层',
            name: 'floor_id',
            is: 'el-select',
            options: null
          },
          {
            label: '店铺',
            name: 'vm_store_id',
            is: 'el-select',
            options: null
          },
          {
            label: '品牌',
            name: 'brand_id',
            is: 'el-select'
          },
          {
            label: '商品单号',
            name: 'prod_code',
            placeholder: '请输入',
            is: 'el-input'
          },
          {
            label: '商品名称',
            name: 'prod_name',
            placeholder: '请输入',
            is: 'el-input'
          },
          {
            label: '申请时间',
            name: 'submit_time',
            placeholder: '开始时间~结束事件',
            is: 'el-date-picker'
          },
          {
            label: '退款时间',
            name: 'order_pay_time',
            placeholder: '开始时间~结束事件',
            is: 'el-date-picker'
          }
        ]
      ],
      tableColumn: [
        [
          {
            lable: '退款号',
            prop: 'return_number'
          },
          {
            lable: '退款方式',
            prop: 'type_str'
          },
          {
            lable: '订单编号',
            prop: 'order_number'
          },
          {
            lable: '店铺',
            prop: 'vm_store_name'
          },
          {
            lable: '顾客',
            prop: 'customer_name'
          },
          {
            lable: '退款',
            prop: 'refund_ing_str'
          }
        ]
      ],
      currentPage4: 1,
      currentType: 5
    }
  },
  computed: mapState({
    list: store => store.order.tablist,
    Returnaction: store => store.order.Returnaction
  }),
  mounted() {
    this.$store.dispatch('order/getReturnaction',{
      org_id: 61500,
      page: this.currentPage4,
      org_type: this.currentType
    })
    this.$store.dispatch('order/getReturnList', {
     org_id: 61500,
      page: this.currentPage4,
      org_type: this.currentType
    })
    floor({
      org_id: 61500,
      org_type: 5
    }).then(res => {
      console.log(res.data)
      this.froms = this.froms.map(item =>
        item.map(item => {
          if (item.label === '楼层') {
            return {
              ...item,
              options: res.data.floor
            }
          } else if (item.label === '店铺') {
            return {
              ...item,
              options: res.data.store
            }
          } else if (item.label === '品牌') {
            return {
              ...item,
              options: res.data.brand
            }
          }
          return item
        })
      )
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
      this.$store.dispatch('order/getReturnList', {
        org_id: 61500,
        page: 1,
        org_type: 5
      })
      let {
        brand_id,
        sub_number,
        floor_id,
        delivery_name,
        return_number,
        vm_store_id,
        prod_name,
        order_number,
        submit_time,
        prod_code,
        delivery_tel,
        order_pay_time
      } = data
      brand_id = '',
      sub_number = '',
      floor_id = '',
      delivery_name = '',
      return_number = '',
      prod_name = '',
      vm_store_id = '',
      order_number = '',
      submit_time = '',
      delivery_tel = '',
      order_pay_time = ''
      prod_code = ''
    },
    searchSelect(data) {
      console.log(this.list)
      const {
        brand_id,
        sub_number,
        floor_id,
        delivery_name,
        return_number,
        prod_name,
        prod_code,
        vm_store_id,
        order_number,
        submit_time,
        delivery_tel,
        order_pay_time
      } = data
      console.log(data)
      this.$store.dispatch('order/getReturnList', {
        org_id: 61500,
        page: 1,
        org_type: 5,
        delivery_tel: delivery_tel,
        sub_number: sub_number,
        floor_id: floor_id,
        return_number: return_number,
        vm_store_id: vm_store_id,
        order_number: order_number,
        prod_code: prod_code,
        prod_name: prod_name,
        brand_id: brand_id,
        delivery_name: delivery_name,
        submit_time: submit_time,
        order_pay_time: order_pay_time
      })
    }
  }
}
</script>
 <style>
@import url('../style/index.css');
</style>
