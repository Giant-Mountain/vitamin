<template>
  <div class="tableList">
    <CustormerTable
      :table-column="tableColumns[0]"
      :table-list="list"
    />
    <el-pagination
      :current-page="currentPages"
      :page-sizes="[10,15,20,25,30]"
      :page-size="paginations.pageLimit"
      layout="total, sizes, prev, pager, next, jumper"
      :total="paginations.totalCount"
      style="float:right"
      @size-change="handleSizeChanges"
      @current-change="handleCurrentChanges"
    />
  </div>
</template>

<script>
import CustormerFrom from '@/components/CustormerFrom'
import CustormerTable from '@/components/CustermerTable'
export default {
  name: 'Inviteing',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    CustormerFrom,
    CustormerTable
  },
  // eslint-disable-next-line vue/require-prop-types
  props: ['paginations', 'list', 'currentPages', 'currentType', 'tableColumn', 'tableColumns'],
  methods: {
    handleSizeChanges(val) {
      this.paginations.pageLimit = val
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChanges(val) {
      this.currentPages = val
      this.$store.dispatch('team/getTableLists', {
        type: this.currentType,
        status: 3,
        page: this.currentPages,
        sort_time: ''
      })
    }
  }
}
</script>

<style>
</style>
