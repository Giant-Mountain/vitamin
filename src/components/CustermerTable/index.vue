<template>
  <div class="table-content">
    <el-table :data="tableList.list" style="width: 100%;height:100%">
      <el-table-column
        v-for="(table,index) in tableColumn"
        :key="index"
        :label="table.lable"
        :prop="table.prop"
      />
      <el-table-column label="操作">
        <template>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'CustormerTable',
  // props: ['tableColumn', 'tableData'],
  props: {
    tableColumn: {
      type: Array
    }
  },
  data() {
    return {}
  },
  computed: mapState({
    tableList: store => store.custormer.tableList
  })
}
</script>
<style lang="scss" scoped>
.table-content {
  font-weight: normal;
}
.table-content /deep/ .el-table {
  font-size: 12px;
  text-align: center;
}
.table-content /deep/ .has-gutter {
  color: #000;
}
</style>
