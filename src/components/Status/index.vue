<template>
  <div class="appear">
    <div>状态</div>
    <div>
      <el-radio
        v-model="radio"
        :label="Number('1')"
      >显示</el-radio>
      <el-radio
        v-model="radio"
        :label="Number('2')"
      >不显示</el-radio>
    </div>
    <div>
      <el-button type="success">保存</el-button>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['serviceStatus'],
  data() {
    return {
      radio: this.serviceStatus
    }
  }
}
</script>

<style lang='scss' scoped>
.appear {
    margin-top: 24px;
    div {
        margin-top: 24px;
    }
}
</style>
