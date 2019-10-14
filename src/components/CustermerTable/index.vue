<template>
  <div class="table-content">
    <el-table :data="tableData" style="width: 100%;height:100%">
      <el-table-column
        v-for="(table,index) in tableColumn"
        :key="index"
        :label="table.lable"
        :prop="table.prop"
      />
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'CustormerTable',
  props: ['tableColumn', 'tableData'],
  data() {
    return {
    }
  }
}
</script>
<style lang="scss" scoped>
.table-content /deep/ .el-table {
  font-size: 12px;
}
.table-content /deep/  .has-gutter{
  color:#000;
  font-weight: normal;
}
</style>
