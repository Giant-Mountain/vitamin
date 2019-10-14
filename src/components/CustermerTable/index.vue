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
      // tableData: [
      //   {
      //     date: "2016-05-03",
      //     name: "王小虎",
      //     province: "上海",
      //     city: "普陀区",
      //     address: "上海市普陀区金沙江路 1518 弄",
      //     zip: 200333
      //   },
      //   {
      //     date: "2016-05-02",
      //     name: "王小虎",
      //     province: "上海",
      //     city: "普陀区",
      //     address: "上海市普陀区金沙江路 1518 弄",
      //     zip: 200333
      //   },
      //   {
      //     date: "2016-05-04",
      //     name: "王小虎",
      //     province: "上海",
      //     city: "普陀区",
      //     address: "上海市普陀区金沙江路 1518 弄",
      //     zip: 200333
      //   },
      //   {
      //     date: "2016-05-01",
      //     name: "王小虎",
      //     province: "上海",
      //     city: "普陀区",
      //     address: "上海市普陀区金沙江路 1518 弄",
      //     zip: 200333
      //   },
      //   {
      //     date: "2016-05-08",
      //     name: "王小虎",
      //     province: "上海",
      //     city: "普陀区",
      //     address: "上海市普陀区金沙江路 1518 弄",
      //     zip: 200333
      //   },
      //   {
      //     date: "2016-05-06",
      //     name: "王小虎",
      //     province: "上海",
      //     city: "普陀区",
      //     address: "上海市普陀区金沙江路 1518 弄",
      //     zip: 200333
      //   },
      //   {
      //     date: "2016-05-07",
      //     name: "王小虎",
      //     province: "上海",
      //     city: "普陀区",
      //     address: "上海市普陀区金沙江路 1518 弄",
      //     zip: 200333
      //   }
      // ]
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
