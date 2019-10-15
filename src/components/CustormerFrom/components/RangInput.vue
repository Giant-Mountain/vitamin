<template>
  <div class="range-input">
    <el-input v-model="buy_times[0]" placeholder="最小值" />-
    <el-input v-model="buy_times[1]" placeholder="最大值" />
  </div>
</template>

<script>
export default {
  name: 'RangInput',
  props: {
    buyTimes: {
      type: Array,
      default: function() {
        return {}
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.range-input {
  display: flex;
}
.range-input /deep/ .el-input__inner {
  margin: 0 5px 0 0;
  width: 120px !important;
}
.el-input {
  margin: 0 5px 0 0;
  width: 120px !important;
}
</style>
