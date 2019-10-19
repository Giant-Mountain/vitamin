<template>
  <el-table
    ref="multipleTable"
    :data="tablelist"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange"
  >
    <el-table-column type="selection" width="55" />
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form>
          <span>{{ props.row.label }}</span>
          <el-form-item
            v-for="(table,index) in tableprops"
            :key="index"
            :label="table.lable"
            :prop="table.prop"
          >{{ props.row.label }}</el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column label="主图">
      　　<template slot-scope="scope">
        　　　　<img :src="scope.row.image" width="40" height="40" class="head_pic">
      　　</template>
    </el-table-column>
    <el-table-column
      v-for="(table,index) in tableColumn"
      :key="index"
      align="center"
      :label="table.lable"
      :prop="table.prop"
      :sortable="table.sortable?'':table.sortable"
    />
  </el-table>
</template>
<script>
export default {
  props: ['tablelist', 'multipleSelection', 'tableColumn', 'tableprops'],
  methods: {
    handleSelectionChange(val) {
      this.$emit('handleChange', val)
    }
  }
}
</script>
<style>
</style>
