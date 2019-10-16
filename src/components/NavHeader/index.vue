<template>
  <div class="header">
    <div>{{ title }}</div>
    <div v-show="flag">
      <el-button
        type="text"
        class="el-icon-download"
      >批量导出</el-button>
      <el-button
        type="text"
        class="el-icon-document"
      >查看已生成报表</el-button>
    </div>
    <div v-show="flag===false" />
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['title', 'flag'],
  methods: {

  }
}
</script>

<style lang='scss' scoped>
.header {
    padding: 24px;
    background: #fff;
    overflow: hidden;
    div {
        flex: 1;
        .el-button {
            color: #000;
        }
    }
}
</style>
