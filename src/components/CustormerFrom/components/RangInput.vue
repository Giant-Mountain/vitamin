<template>
  <div class="range-input">
    <el-input
      v-model="range[0]"
      placeholder="最小值"
    />-
    <el-input
      v-model="range[1]"
      placeholder="最大值"
    />
  </div>
</template>

<script>
export default {
  name: 'RangInput',
  // eslint-disable-next-line vue/require-prop-types
  props: ['range']
}
</script>

<style lang="scss" scoped>
.range-input {
    display: flex;
}
.range-input /deep/ .el-input__inner {
    margin: 0 5px 0 0;
    width: 80px !important;
}
.el-input {
    margin: 0 5px 0 0;
    width: 80px !important;
}
</style>
