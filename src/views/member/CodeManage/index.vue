<template>
  <div class="custormer-container">
    <div class="custormer-header">
      <div style="font-size:16px">自拓二维码管理</div>
      <div>
        <span class="el-icon-download">批量上传</span>
      </div>
    </div>
    <div class="card-group">
      <CustormerFrom
        :froms="froms[currentIndex]"
        :form="form"
        @handSearch="handSearchInput"
        @resetInputValue="resetFromsValue"
      />
    </div>
    <div class="customer-list">
      <CustormerTable
        :add-dialog="addDialog"
        :table-column="tableColumn[currentIndex]"
        :table-list="qrcodeList"
      />
    </div>
    <el-pagination
      :current-page="currentPage4"
      :page-sizes="[10, 15, 20, 25]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pagination"
      style="float:right"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
import CustormerFrom from '@/components/CustormerFrom/index.vue'
import CustormerTable from '@/components/CustermerTable/index.vue'
import { mapState } from 'vuex'

export default {
  name: 'Customer',
  components: {
    CustormerFrom,
    CustormerTable
  },
  data() {
    return {
      addDialog: true,
      currentIndex: 0,
      currentPage4: 1,
      currentType: 1,
      form: {
        id: '',
        name: '',
        mobile: '',
        cid: '',
        hiredate: '',
        type: '',
        section: '',
        floor: '',
        brand: ''
      },
      froms: [
        [
          {
            label: '编号:',
            name: 'id',
            placeholder: '请输入',
            is: 'el-input'
          },
          {
            label: '姓名:',
            name: 'name',
            placeholder: '请输入',
            is: 'el-input'
          },
          {
            label: '电话号码:',
            name: 'mobile',
            placeholder: '请输入',
            is: 'el-input'
          },
          {
            label: '会员卡号:',
            name: 'cid',
            placeholder: '请输入',
            is: 'el-input'
          },
          {
            label: '员工类型:',
            name: 'type',
            is: 'el-select',
            placeholder: '请选择',
            options: [
              {
                label: '专柜员工',
                value: '2'
              },
              {
                label: '自营员工',
                value: '1'
              }
            ]
          },
          {
            label: '楼层:',
            name: 'floor',
            placeholder: '请输入',
            is: 'el-input'
          },
          {
            label: '区域:',
            name: 'section',
            placeholder: '请输入',
            is: 'el-input'
          },
          {
            label: '品牌:',
            name: 'brand',
            placeholder: '请输入',
            is: 'el-input'
          }
        ]
      ],
      tableColumn: [
        [
          {
            lable: '编号',
            prop: 'id'
          },
          {
            lable: '姓名',
            prop: 'name'
          },
          {
            lable: '电话号码',
            prop: 'mobile'
          },
          {
            lable: '会员卡号',
            prop: 'cid'
          },
          {
            lable: '入职时间',
            prop: 'hiredate'
          },
          {
            lable: '员工类型',
            prop: 'type'
          },
          {
            lable: '部门',
            prop: 'section'
          },
          {
            lable: '楼层',
            prop: 'floor'
          },
          {
            lable: '区域',
            prop: 'brand'
          }
        ]
      ]
    }
  },
  computed: mapState({
    qrcodeList: store => store.merge.qrcodeList,
    pagination: store => store.merge.pagination
  }),
  mounted() {
    this.$store.dispatch('merge/getQrcodeList', {
      page: this.currentPage4,
      page_size: 10
    })
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    // 点击换页面并进行数据重新渲染
    handleCurrentChange(val) {
      this.currentPage4 = val
      this.$store.dispatch('merge/getQrcodeList', {
        page: this.currentPage4,
        page_size: 10
      })
    },
    handSearchInput(data) {
      console.log(data)
      const {
        id,
        name,
        mobile,
        cid,
        hiredate,
        type,
        section,
        floor,
        brand
      } = data
      this.$store.dispatch('merge/getQrcodeList', {
        page: this.currentPage4,
        page_size: 10,
        id,
        name,
        mobile,
        cid,
        hiredate,
        type,
        section,
        floor,
        brand
      })
    },
    resetFromsValue() {
      this.form = {
        id: '',
        name: '',
        mobile: '',
        cid: '',
        hiredate: '',
        type: '',
        section: '',
        floor: '',
        brand: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
* {
  font-size: 12px;
}
%juzhong {
  display: flex;
  justify-content: center;
  align-items: center;
}
.custormer-container {
  padding: 24px;
}

.custormer-header {
  padding: 24px;
  background: #fff;
  border-bottom: 1px solid #f5f5f5;
  height: 150px;
  position: relative;
  display: flex;
  flex-direction: column;
  div:nth-child(1) {
    flex: 2;
  }
  div:nth-child(2) {
    flex: 6;
    display: flex;
    align-items: center;
    span {
      margin-right: 25px;
    }
  }
  div:nth-child(3) {
    height: 25px;
    span {
      margin-right: 25px;
      height: 100%;
      display: inline-block;
    }
    .tab-active {
      border-bottom: 2px solid #3ec6b6;
      color: #3ec6b6;
    }
  }
}
.card-group {
  padding: 24px;
  background: #fff;
  overflow: hidden;
  border-bottom: 1px solid #e8e8e8;
}
.customer-list {
  padding: 24px 24px 24px;
  background: #fff;
  margin-top: 24px;
}
</style>
