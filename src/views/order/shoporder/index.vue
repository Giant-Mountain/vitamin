<template>
  <Teamlist
    :nav-list="navList"
    :title="title"
    :form="form"
    :froms="froms"
    :flag="flag"
    :table-list="list"
    :table-column="tableColumn"
    :current-page4="currentPage4"
    :current-type="currentType"
    :pagination="pagination"
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
        delivery_name: '',
        sub_number: '',
        order_type: '',
        delivery_tel: '',
        order_number: '',
        source_type: '',
        floor_id: '',
        vm_store_id: '',
        submit_time: '',
        order_pay_time: '',
        brand_id: '',
        prod_code: '',
        prod_name: ''
      },
      navList: ['全部', '待付款', '待发货', '待收货', '已完成'],
      title: '店铺管理',
      froms: [
        [
          {
            label: '店铺订单订单号',
            name: 'sub_number',
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
            label: '订单类型',
            name: 'order_type',
            is: 'el-select',
            options: [
              {
                id: 1,
                keb: '全部'
              },
              {
                id: 2,
                keb: '线上poss'
              },
              {
                id: 3,
                keb: '电商订单'
              },
              {
                id: 4,
                keb: '电子卡卷'
              }
            ]
          },
          {
            label: '订单编号',
            name: 'order_number',
            placeholder: '请输入订单编号',
            is: 'el-input'
          },
          {
            label: '货源类型',
            name: 'source_type',
            placeholder: '请选择',
            is: 'el-select',
            options: [
              {
                id: 1,
                use: '所有'
              },
              {
                id: 2,
                use: '总仓'
              },
              {
                id: 3,
                use: '店仓'
              }
            ]
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
            label: '下单时间',
            name: 'starttime',
            placeholder: '开始时间~结束事件',
            is: 'el-date-picker'
          },
          {
            label: '支付时间',
            name: 'order_pay_time',
            placeholder: '开始时间~结束事件',
            is: 'el-date-picker'
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
            lable: '下单时间',
            prop: 'created_at_str'
          },
          {
            lable: '顾客',
            prop: 'customer_name'
          },
          {
            lable: '订单类型',
            prop: 'order_type'
          },
          {
            lable: '售后',
            prop: 'status_str'
          }
        ]
      ],
      currentPage4: 1,
      currentType: 5
    }
  },
  computed: mapState({
    list: store => store.order.list,
    pagination: store => store.order.pagination
  }),
  mounted() {
    this.$store.dispatch('order/getMainorder', {
      org_id: 61500,
      page: this.currentPage4,
      org_type: this.currentType
    })
    this.$store.dispatch('order/getTableList', {
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
      this.$store.dispatch('order/getTableList', {
        org_id: 61500,
        page: 1,
        org_type: 5
      })
      let {
        delivery_name,
        sub_number,
        order_type,
        delivery_tel,
        order_number,
        source_type,
        floor_id,
        vm_store_id,
        submit_time,
        order_pay_time,
        brand_id,
        prod_code,
        prod_name
      } = data
      delivery_name = '',
      sub_number = '',
      order_type = '',
      delivery_tel = '',
      order_number = '',
      source_type = '',
      floor_id = '',
      vm_store_id = '',
      submit_time = '',
      order_pay_time = '',
      brand_id = '',
      prod_code = '',
      prod_name = ''
    },
    searchSelect(data) {
      console.log(this.list)
      const {
        delivery_name,
        sub_number,
        order_type,
        delivery_tel,
        order_number,
        source_type,
        floor_id,
        vm_store_id,
        submit_time,
        order_pay_time,
        brand_id,
        prod_code,
        prod_name
      } = data
      console.log(data)
      this.$store.dispatch('order/getTableList', {
        org_id: 61500,
        page: 1,
        org_type: 5,
        delivery_tel: delivery_tel,
        order_type: order_type,
        floor_id: floor_id,
        sub_number: sub_number,
        vm_store_id: vm_store_id,
        source_type: source_type,
        delivery_name: delivery_name,
        prod_code: prod_code,
        prod_name: prod_name,
        brand_id: brand_id,
        submit_time: submit_time,
        order_pay_time: order_pay_time
      })
    }
  }
}
</script>
 <style>
@import url("../style/index.css");
</style>
