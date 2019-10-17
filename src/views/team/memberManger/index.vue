<template>

  <TeamManger
    :title="title"
    :nav-list="navList"
    :form="form"
    :froms="froms"
    :table-column="tableColumn"
    :table-columns="tableColumns"
    :table-list="tableList"
    :list="list"
    :paginations="paginations"
    :pagination="pagination"
    :current-type="currentType"
    :role-column="roleColumn"
    :role-list="roleList"
    :role-pagination="rolePagination"
    :shop-list="shopList"
    :role-lists="roleLists"
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
      currentType: 1,
      navList: ['员工管理', '邀请中', '角色描述'],
      title: '员工管理',
      avatar: '',
      shopLists: [],
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
        options: null
      },
      {
        label: '角色:',
        name: 'role',
        is: 'el-select',
        placeholder: '请选择',
        options: null
      }, {
        label: '顾客账号:',
        name: 'customer',
        is: 'el-select',
        placeholder: '请选择',
        options: [
          {
            label: '已关联',
            value: 1
          },
          {
            label: '未关联',
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
            label: '冻结',
            value: 1
          },
          {
            label: '正常',
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
            prop: 'user_name'
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
      ],
      tableColumns: [
        [
          {
            lable: '姓名',
            prop: 'user_name'
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
            lable: '邀请者',
            prop: 'create_user_name'
          },
          {
            lable: '发送时间',
            prop: 'created_at',
            sortable: 'sortable'
          }
        ]
      ],
      roleColumn: [
        [
          {
            lable: '角色',
            prop: 'role_name'
          },
          {
            lable: '权限',
            prop: 'description'
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
            lable: '店铺权限',
            prop: 'store_permission'
          },
          {
            lable: '手机App',
            prop: 'is_app'
          }
        ]
      ]
    }
  },
  computed: {
    ...mapState({
      tableList: state => state.team.tableList,
      pagination: state => state.team.pagination,
      list: state => state.team.list,
      paginations: state => state.team.paginations,
      roleList: state => state.team.roleList,
      rolePagination: state => state.team.rolePagination,
      shopList: state => state.team.shopList,
      roleLists: state => state.team.roleLists
    })
  },
  created() {
    this.$store.dispatch('team/getTableList', {
      type: this.currentType,
      page: 1,
      status: '0, 1'
    })
    this.$store.dispatch('team/getTableLists', {
      type: this.currentType,
      status: 3,
      page: 1
    })
    this.$store.dispatch('team/getRoleList', {
      mall_id: 61500,
      type: this.currentType,
      page: 1
    })
    this.$store.dispatch('team/getSelectList', {
      type: this.currentType
    })
  }
}
</script>

<style>
</style>

