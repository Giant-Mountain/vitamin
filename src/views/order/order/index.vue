<template>
  <div>
    <div class="content-action">
      <div class="page-container">
        <div class="margin-24-top padding-24-top bg-white">
          <div class="nav-selected">
            <TeamManger
              :nav-list="navList"
              :title="title"
              :form="form"
              :froms="froms"
              :table-column="tableColumn"
              :table-lists="tableLists"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { floor } from '../api/order.js'
import TeamManger from '@/components/TeamManger'
export default {
  components: {
    TeamManger
  },
  data() {
    return {
      floor,
      form: {
        tel: '',
        shop: '',
        role: '',
        customer: '',
        status: '',
        options: []
      },
      navList: ['员工管理', '邀请中', '角色描述'],
      title: '订单管理',
      froms: [
        [
          {
            label: '订单号',
            name: 'name',
            placeholder: '请输入订单号',
            is: 'el-input'
          },
          {
            label: '姓名',
            name: 'name',
            placeholder: '请输入姓名',
            is: 'el-input'
          },
          {
            label: '手机号',
            name: 'name',
            placeholder: '请输入手机号',
            is: 'el-input'
          },
          {
            label: '订单类型',
            name: 'name',
            is: 'el-select',
            options: [
              {
                label: '全部',
                value: '全部'
              },
              {
                label: '电商订单',
                value: '电商订单'
              },
              {
                label: '线上poss',
                value: '电商订单'
              },
              {
                label: '电子卡卷',
                value: '电子卡卷'
              }
            ]
          },
          {
            label: '楼层',
            name: 'name',
            is: 'el-select',
            options: null
          },
          {
            label: '店铺',
            name: 'name',
            is: 'el-select',
            options: null
          },
          {
            label: '品牌',
            name: 'name',
            is: 'el-select'
          },
          {
            label: '商品单号',
            name: 'name',
            placeholder: '请输入',
            is: 'el-input'
          },
          {
            label: '商品名称',
            name: 'name',
            placeholder: '请输入',
            is: 'el-input'
          },
          {
            label: '下单时间',
            name: 'name',
            placeholder: '开始时间~结束事件',
            is: 'el-date-picker'
          },
          {
            label: '支付时间',
            name: 'name',
            placeholder: '开始时间~结束事件',
            is: 'el-date-picker'
          }
        ]
      ],
      tableColumn: [
        [
          {
            lable: '头像',
            prop: 'avatar'
          },
          {
            lable: '姓名',
            prop: 'create_user_name'
          },
          {
            lable: '手机号',
            prop: 'mobile'
          },
          {
            lable: '角色',
            prop: 'role'
          },
          {
            lable: '所属店铺',
            prop: 'store_name'
          },
          {
            lable: '',
            prop: ''
          },
          {
            lable: '',
            prop: ''
          },
          {
            lable: '顾客账号',
            prop: 'relation_user'
          },
          {
            lable: '状态',
            prop: 'status'
          },
          {
            lable: '操作',
            prop: 'option',
            render(record, text) {
              return <div>查看</div>
            }
          }
        ]
      ],
      tableLists: [
        [
          {
            avatar: this.avatar,
            create_user_name: '',
            mobile: '',
            role: '',
            store_name: '',
            relation_user: '',
            status: ''
          }
        ]
      ]
    }
  },
  mounted() {
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
          }
          return item
        })
      )
    })
  }
}
</script>
<style>
@import url("./style/index.css");
</style>
