<template>
  <div class="tableList">
    <CustormerTable
      :table-column="roleColumn[0]"
      :table-list="roleList"
    />
    <el-pagination
      :current-page="currentPages"
      :page-sizes="[10,15,20,25,30]"
      :page-size="rolePagination.pageLimit"
      layout="total, sizes, prev, pager, next, jumper"
      :total="rolePagination.totalCount"
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
  props: ['roleColumn', 'roleList', 'rolePagination', 'currentPages', 'currentType'],
  methods: {
    handleSizeChanges(val) {
      this.rolePagination.pageLimit = val
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChanges(val) {
      this.currentPages = val
      this.$store.dispatch('team/getRoleList', {
        mall_id: 61500,
        type: this.currentType,
        page: this.currentPages
      })
    }
  }
}
</script>

<style>
</style>
