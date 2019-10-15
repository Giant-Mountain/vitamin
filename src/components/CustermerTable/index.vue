<template>
  <div class="table-content">
    <div v-if="addDialog" class="addBtn">
      <span @click="handDialog">+</span>
    </div>
    <el-table :data="tableList" style="width: 100%;height:100%">
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
export default {
  name: 'CustormerTable',
  props: {
    tableColumn: {
      type: Array,
      default: function() {
        return []
      }
    },
    tableList: {
      type: Array,
      default: function() {
        return []
      }
    },
    addDialog: {
      type: Boolean
    }
  },
  methods: {
    handDialog() {
      this.$store.commit('custormer/SET_DIALOG', true)
    }
  }
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
.addBtn {
  span {
    display: inline-block;
    width: 30px;
    height: 30px;
    background: #3ec6b6;
    border-radius: 50%;
    color: #fff;
    font-size: 30px;
    margin-bottom: 24px;
    text-align: center;
    line-height: 30px;
    font-weight: 200;
    cursor: pointer;
  }
}
</style>
