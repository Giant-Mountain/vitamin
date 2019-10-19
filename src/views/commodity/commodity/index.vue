<template>
  <TeamFund
    :nav-list="navList"
    :title="title"
    :form="form"
    :froms="froms"
    :flag="flag"
    :table-column="tableColumn"
    :tableprops="tableprops"
    :multiple-selection="multipleSelection"
    :tablelist="tablelist"
    :current-page4="currentPage4"
    :current-type="currentType"
    :pagination="pagination"
    @search="searchSelect"
    @handReset="ResetClick"
    @hanleClick="handleSelectChange"
  />
</template>
<script>
import { prodSearch } from '../api'
import TeamFund from '@/components/TeamFund'
import { mapState } from 'vuex'
export default {
  name: 'MemberManger',
  components: {
    TeamFund
  },
  data() {
    return {
      flag: true,
      form: {
        prod_code: '',
        prod_name: '',
        category_id: '',
        brand_id: '',
        prod_src: '',
        prod_type: '',
        vm_store_id: '',
        delivery_type: '',
        up_time: ''
      },
      navList: ['销售中', '仓库中', '草稿箱', '待审核', '未通过审核', '商品库'],
      title: '店铺管理',
      froms: [
        [
          {
            label: '款号',
            name: 'prod_code',
            placeholder: '请输入店铺订单编号',
            is: 'el-input'
          },
          {
            label: '商品名称',
            name: 'prod_name',
            placeholder: '请输入',
            is: 'el-input'
          },
          {
            label: '分类',
            name: 'category_id',
            placeholder: '请输入',
            is: 'el-select'
          },
          {
            label: '品牌',
            name: 'brand_id',
            is: 'el-select'
          },
          {
            label: '商品来源',
            name: 'prod_src',
            is: 'el-select'
          },
          {
            label: '商品类型',
            name: 'prod_type',
            is: 'el-select'
          },
          {
            label: '店铺',
            name: 'vm_store_id',
            is: 'el-select'
          },
          {
            label: '配送方式',
            name: 'delivery_type',
            is: 'el-select'
          },
          {
            label: '上架时间',
            name: 'up_time',
            placeholder: '开始时间~结束事件',
            is: 'el-date-picker'
          }
        ]
      ],
      tableColumn: [
        [

          {
            lable: '商品名称',
            prop: 'name'
          },
          {
            lable: '吊牌价',
            prop: 'price'
          },
          {
            lable: '库存',
            prop: 'sku_discount_price'
          },
          {
            lable: '分类',
            prop: 'category_name'
          },
          {
            lable: '品牌',
            prop: 'brand_name'
          }
        ]
      ],
      tableprops: [
        [
          {
            lable: '缩略图',
            prop: 'image'
          },
          {
            lable: '商SKU编码名称',
            prop: 'code'
          },
          {
            lable: '原价',
            prop: 'price'
          },
          {
            lable: '促销价',
            prop: 'sku_discount_price'
          },
          {
            lable: '库存',
            prop: 'sku_stock_num'
          }
        ]],
      multipleSelection: [],
      currentPage4: 1,
      currentType: 5
    }
  },
  computed: mapState({
    tablelist: store => store.commodity.tablelist,
    pagination: store => store.commodity.pagination
  }),
  mounted() {
    this.$store.dispatch('commodity/getTableList', {
      page: 1,
      status: 4
    })
    prodSearch({
      status: 4
    }).then(res => {
      console.log(res.data)
      this.froms = this.froms.map(item =>
        item.map(item => {
          if (item.label === '分类') {
            return {
              ...item,
              options: res.data.category
            }
          } else if (item.label === '品牌') {
            return {
              ...item,
              options: res.data.brand
            }
          } else if (item.label === '商品来源') {
            return {
              ...item,
              options: res.data.source
            }
          } else if (item.label === '商品类型') {
            return {
              ...item,
              options: res.data.product_type
            }
          } else if (item.label === '配送方式') {
            return {
              ...item,
              options: res.data.delivery
            }
          } else if (item.label === '店铺') {
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
    // 单选框
    handleSelectChange(val) {
      this.multipleSelection = val
    },
    // 重置
    ResetClick(data) {
      console.log(1)
      this.$store.dispatch('commodity/getTableList', {
        page: 1,
        status: 4
      })
      let {} = data
    },
    searchSelect(data) {
      console.log(this.list)
      const {} = data
      console.log(data)
      this.$store.dispatch('commodity/getTableList', {
        page: 1,
        status: 4
      })
    }
  }
}
</script>
 <style>
@import url("../style/index.css");
</style>
