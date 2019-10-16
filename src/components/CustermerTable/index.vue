<template>
  <div class="table-content">
    <el-table :data="list" style="width: 100%">
      <el-table-column
        v-for="(table,index) in tableColumn"
        :key="index"
        :label="table.lable"
        :prop="table.prop"
        @handInput="changeInput"
      />
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'CustormerTable',
  props: {
    tableColumn: {
      type: Array,
      default: function() {
        return {}
      }
    },
    list: {
      type: Array,
      default: function() {
        return {}
      }
    }
  },
  methods: {
    changeInput(val) {
      console.log(val)
    }
  }
}
</script>
<style lang="scss" scoped>
.ant-table table {
  width: 100%;
  text-align: left;
  border-radius: 4px 4px 0 0;
  border-collapse: separate;
  border-spacing: 0;
}
// .table-content {
//   font-weight: normal;
// }
// .table-content /deep/ .el-table {
//   font-size: 12px;
//   text-align: center;
// }
// .table-content /deep/ .has-gutter {
//   color: #000;
// }
</style>
