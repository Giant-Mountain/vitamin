<template>
  <div class="table-content">
    <div v-if="addDialog" class="addBtn">
      <span @click="handDialog">+</span>
    </div>
    <el-table :data="tableList" style="width: 100%;height:100%">
      <el-table-column
        v-for="(table,index) in tableColumn"
        :key="index"
        align="center"
        :label="table.lable"
        :prop="table.prop"
        :sortable="table.sortable?'':table.sortable"
      />
      <el-table-column v-for="(item) in tableComponent" :key="item.lable" align="center" :label="item.lable">
        <template slot-scope="scope" :render="item.render(scope.row)">
          <el-button
            v-for="(key,ind) in item.content"
            :key="ind"
            type="text"
            size="small"
            @click="handClick(scope.row)"
          >{{ key }}</el-button>
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
    tableComponent: {
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
      this.$store.commit('custormer/SET_DIALOG', this.addDialog)
    },
    handClick(row) {
      // 打印到的是当前行的数据
      console.log(row)
      this.$emit('handSeeContent', row.id)
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
