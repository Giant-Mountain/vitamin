<template>
  <TeamManger
    :title="title"
    :nav-list="navList"
    :form="form"
    :froms="froms"
    :table-column="tableColumn"
    :table-list="tableList"
    :pagination="pagination"
  />
</template>

<script>
import TeamManger from '@/components/TeamManger'
import { mapState } from 'vuex'
export default {
  name: 'MemberManger',
  components: {
    TeamManger
  },
  data() {
    return {
      navList: ['员工管理', '邀请中', '角色描述'],
      title: '员工管理',
      avatar: '',
      form: {
        tel: '',
        shop: '',
        role: '',
        customer: '',
        status: ''
      },
      froms: [[{
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
      }, {
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
      }, {
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
      }, {
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
      }]],
      tableColumn: [
        [
          {
            lable: '头像',
            prop: 'img'
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
          }
        ]
      ]
    }
  },
  computed: {
    ...mapState({
      tableList: state => state.team.tableList,
      pagination: state => state.team.pagination
    })
  },
  created() {
    this.$store.dispatch('team/getTableList', {
      type: 1,
      page: 1,
      status: '0, 1'
    })
  }
}
</script>

<style>
</style>

