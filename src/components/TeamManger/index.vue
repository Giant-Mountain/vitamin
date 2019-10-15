<template>
  <div class="container">
    <NavHeader
      :title="title"
      :nav-list="navList"
      :current="current"
      :flag="flag"
      :datalength="tableList.length"
      @handleClicks="clicks"
    />
    <div class="main">
      <div v-show="current===0">
        <div class="inputList">
          <CustormerFrom
            :form="form"
            :froms="froms[current]"
          />
        </div>
        <div class="add">
          <span>+</span>
        </div>
        <div class="tableList">
          <CustormerTable
            :table-column="tableColumn[current]"
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
      <div v-show="current===1">123234</div>
      <div v-show="current===2">123235</div>
    </div>
  </div>
</template>
<script>
import CustormerFrom from '@/components/CustormerFrom'
import CustormerTable from '@/components/CustermerTable'
import NavHeader from '@/components/NavHeader'
export default {
  name: 'MemberManger',
  components: {
    CustormerFrom,
    NavHeader,
    CustormerTable
  },
  // eslint-disable-next-line vue/require-prop-types
  props: ['title', 'navList', 'form', 'froms', 'tableColumn', 'tableList', 'pagination'],
  data() {
    return {
      datalength: 0,
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
      console.log(val, '234343434')
      this.currentPages = val
      this.$store.dispatch('team/getTableList', {
        type: 1,
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
