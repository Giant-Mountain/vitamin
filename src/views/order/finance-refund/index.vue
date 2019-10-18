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
     @handleDetail="handleComponent"
    :flag="flag"
    :tableComponent="tableComponent"
    @search="searchSelect"
    @handReset="ResetClick"
  />
</template>
<script>
import { Research } from '../api/order.js'
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
        return_number: '',
        vm_store_id: '',
        order_number: '',
        prod_code: '',
        submit_audit_time: '',
        delivery_tel: ''
      },
      navList: ['待审核', '全部'],
      title: '财务退款',
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
            label: '店铺',
            name: 'vm_store_id',
            is: 'el-select',
            options: null
          },
          {
            label: '商品款号',
            name: 'prod_code',
            placeholder: '请输入',
            is: 'el-input'
          },
          {
            label: '提交时间',
            name: 'submit_audit_time',
            placeholder: '开始时间~结束事件',
            is: 'el-date-picker'
          }
        ]
      ],
      tableColumn: [
        [
          {
            lable: '退单号',
            prop: 'return_number'
          },
          {
            lable: '退交时间',
            prop: 'created_at_str'
          },
          {
            lable: '店铺',
            prop: 'vm_store_name'
          },
          {
            lable: '退交金额',
            prop: 'amount'
          },
          {
            lable: '状态',
            prop: 'return_str'
          }
        ]
      ],
       tableComponent: [
        {
          lable: "操作",
          content: ["查看"]
        }
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
      org_type: this.currentType,
      return_status: 13,
      menu_type: 2
    })
    Research({
      org_id: 61500,
      org_type: 5,
      return_status: 13,
      menu_type: 2,
      menu_type: 1
    }).then(res => {
      this.froms = this.froms.map(item =>
        item.map(item => {
          if (item.label === '店铺') {
            return {
              ...item,
              options: res.data.store
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
    //查看
     handleComponent(id) {
      this.table = true;
      console.log(this.table );
    },
    // 重置
    ResetClick(data) {
      console.log(1)
      this.$store.dispatch('order/getReturnList', {
        org_id: 61500,
        page: 1,
        org_type: 5,
        return_status: 13,
        menu_type: 2
      })
      let {
        delivery_name,
        return_number,
        vm_store_id,
        order_number,
        prod_code,
        delivery_tel,
        submit_audit_time
      } = data;
      (prod_code = ''),
      (delivery_name = ''),
      (return_number = ''),
      (vm_store_id = ''),
      (order_number = ''),
      (submit_audit_time = ''),
      (delivery_tel = '')
    },
    searchSelect(data) {
      console.log(this.list)
      const {
        prod_code,
        delivery_name,
        return_number,
        vm_store_id,
        order_number,
        submit_audit_time,
        delivery_tel
      } = data
      console.log(data)
      this.$store.dispatch('order/getReturnList', {
        org_id: 61500,
        page: 1,
        org_type: 5,
        return_status: 13,
        menu_type: 2,
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
@import url("../style/index.css");
</style>
