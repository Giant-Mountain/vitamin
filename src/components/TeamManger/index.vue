<template>
  <div class="container">
    <NavHeader
      :title="title"
      :nav-list="navList"
      :current="current"
      :flag="flag"
      :paginations="paginations"
      @handleClicks="clicks"
    />
    <div class="main">
      <div v-show="current===0">
        <div class="inputList">
          <CustormerFrom
            :form="form"
            :froms="froms[current]"
            :shop-list="shopList"
            :role-lists="roleLists"
          />
        </div>
        <div class="add">
          <span>+</span>
        </div>
        <div class="tableList">
          <CustormerTable
            :table-column="tableColumn[0]"
            :table-list="tableList"
          />
          <el-pagination
            :current-page="currentPages"
            :page-sizes="[10,15,20,25,30]"
            :page-size="pagination.pageLimit"
            layout="total, sizes, prev, pager, next, jumper"
            :total="pagination.totalCount"
            style="float:right"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
        </div>
      </div>
      <div v-show="current===1">
        <Inviteing
          :list="list"
          :paginations="paginations"
          :current-pages="currentPages"
          :current-type="currentType"
          :table-columns="tableColumns"
        />
      </div>
      <div v-show="current===2">
        <Roleing
          :role-column="roleColumn"
          :role-list="roleList"
          :role-pagination="rolePagination"
          :current-pages="currentPages"
          :current-type="currentType"
        />
      </div>
    </div>
  </div>
</template>
<script>
import Inviteing from '@/components/Inviteing'
import Roleing from '@/components/Roleing'
import CustormerFrom from '@/components/CustormerFrom'
import CustormerTable from '@/components/CustermerTable'
import NavHeader from '@/components/NavHeader'
export default {
  name: 'MemberManger',
  components: {
    CustormerFrom,
    NavHeader,
    CustormerTable,
    Inviteing,
    Roleing
  },
  // eslint-disable-next-line vue/require-prop-types
  props: ['title', 'navList', 'form', 'froms', 'tableColumn', 'tableList', 'pagination', 'currentType', 'paginations', 'tableColumns', 'roleColumn', 'roleList', 'rolePagination', 'shopList', 'roleLists'],
  data() {
    return {
      current: 0,
      flag: false,
      currentPages: 1
    }
  },
  methods: {
    clicks(current) {
      this.current = current
    },
    handleSizeChange(val) {
      this.pagination.pageLimit = val
      console.log(`每页 ${val} 条`)
    },
    // 点击换页面并进行数据重新渲染
    handleCurrentChange(val) {
      //   console.log(val, '234343434')
      this.currentPages = val
      this.$store.dispatch('team/getTableList', {
        type: this.currentType,
        status: '0,1',
        page: this.currentPages
      })
    }
  }
}
</script>
<style lang="scss" scoped>
%juzhong {
    display: flex;
    align-items: center;
    justify-content: center;
}
.container {
    width: 100%;
    height: auto;
    color: rgba(0, 0, 0, 0.65);
}
.add {
    margin: 0 46px;
    width: 34px;
    height: 34px;
    background: #3ec6b6;
    border-radius: 50%;
    color: #fff;
    font-size: 30px;
    margin-bottom: 24px;
    text-align: center;
    line-height: 34px;
    font-weight: 200;
    cursor: pointer;
}
.tableList {
    margin: 0 46px;
}
</style>
