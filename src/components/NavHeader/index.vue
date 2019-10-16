<template>
  <div class="header">
    <div>{{ title }}</div>
    <div v-show="flag===true">
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
    <div>
      <span
        v-for="(item,index) in navList"
        :key="index"
        :class="current===index?'active':''"
        @click="handleClick(index)"
      >{{ item }}<i v-show="item===&quot;邀请中&quot;">({{ datalength }})</i></span>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['title', 'navList', 'current', 'flag', 'datalength'],
  methods: {
    handleClick(ind) {
      // this.current = ind
      this.$emit('handleClicks', ind)
    }
  }
}
</script>

<style lang='scss' scoped>
.header {
    background: #fff;
    height: 180px;
    padding: 24px;
    // padding: 48px 0 0 48px;
    border-bottom: 4px solid #f5f5f5;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    div {
        flex: 1;
        .el-button {
            color: #000;
        }
        &:last-child {
            font-size: 14px;
            span {
                margin: 0 40px 0 0;
                cursor: pointer;
                i {
                    font-style: normal;
                }
            }
            .active {
                border-bottom: 4px solid #3ec6b6;
                color: #3ec6b6;
                padding: 0 0 15px 0;
            }
        }
    }
}
</style>
