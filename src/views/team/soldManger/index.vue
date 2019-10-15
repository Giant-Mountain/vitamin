<template>
  <TeamManger
    :title="title"
    :nav-list="navList"
    :form="form"
    :froms="froms"
    :table-column="tableColumn"
    :table-lists="tableLists"
  />
</template>

<script>
import TeamManger from '@/components/TeamManger'
export default {
  name: 'MemberManger',
  components: {
    TeamManger
  },
  data() {
    return {
      navList: ['员工管理', '邀请中', '角色描述'],
      title: '导购管理',
      form: {
        tel: '',
        shop: '',
        role: '',
        customer: '',
        status: ''
      },
      froms: [
        [
          {
            label: '手机号:',
            name: 'tel',
            placeholder: '请输入',
            is: 'el-input'
          },
          {
            label: '所属店铺:',
            name: 'shop',
            is: 'el-select',
            placeholder: '请选择',
            options: [
              {
                label: '是',
                value: 1
              },
              {
                label: '否',
                value: 0
              }
            ]
          },
          {
            label: '角色:',
            name: 'role',
            is: 'el-select',
            placeholder: '请选择',
            options: [
              {
                label: '是',
                value: 1
              },
              {
                label: '否',
                value: 0
              }
            ]
          },
          {
            label: '顾客账号:',
            name: 'customer',
            is: 'el-select',
            placeholder: '请选择',
            options: [
              {
                label: '是',
                value: 1
              },
              {
                label: '否',
                value: 0
              }
            ]
          },
          {
            label: '状态:',
            name: 'status',
            is: 'el-select',
            placeholder: '请选择',
            options: [
              {
                label: '是',
                value: 1
              },
              {
                label: '否',
                value: 0
              }
            ]
          }
        ]
      ],
      tableColumn: [
        [
          {
            lable: '日期',
            prop: 'date'
          },
          {
            lable: '姓名',
            prop: 'name'
          },
          {
            lable: '省份',
            prop: 'province'
          },
          {
            lable: '市区',
            prop: 'city'
          },
          {
            lable: '地址',
            prop: 'address'
          },
          {
            lable: '邮编',
            prop: 'zip'
          }
        ]
      ],
      tableLists: [
        [
          {
            date: '2016-05-03',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
          {
            date: '2016-05-02',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
          {
            date: '2016-05-01',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
          {
            date: '2016-05-08',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
          {
            date: '2016-05-06',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
          {
            date: '2016-05-07',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }
        ]
      ]
    }
  }
}
</script>

<style>
</style>
