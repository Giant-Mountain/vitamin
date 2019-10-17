<template>
  <div class="container">
    <NavHeader :title="title" :current="current" :flag="flag" />
    <div class="main">
      <div class="nav-selected">
        <span
          v-for="(item,index) in navList"
          :key="index"
          :class="current===index?'nav-show':''"
          @click="clicks(index)"
        >{{ item }}<i v-show="item===&quot;邀请中&quot;">3</i></span>
      </div>
      <div v-show="current===0">
        <div class="inputList">
          <CommityFrom
            :form="form"
            :froms="froms[current]"
            @handSearch="changeIpt"
            @handlEmit="handlrest"
          />
        </div>
        <!-- <div class="add">
          <span>+</span>
        </div>-->
        <!-- <div class="tableList">
          <CommityTabel :table-column="tableColumn[current]" :list="list" />
        </div> -->
      </div>
      <div v-show="current===1">123234</div>
      <div v-show="current===2">123235</div>
    </div>
  </div>
</template>
<script>
import CommityFrom from '@/components/CommityFrom'
import CommityTabel from '@/components/CommityTabel'
import NavHeader from '@/components/NavHeader'
export default {
  name: 'MemberManger',
  components: {
    CommityFrom,
    NavHeader,
    CommityTabel
  },
  props: {
    title: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  props: [
    'title',
    'navList',
    'form',
    'froms',
    'flag',
    'list'
  ],
  data() {
    return {
      current: 0
    }
  },
  mounted() {},
  methods: {
    changeIpt(data) {
      this.$emit('search', this.form)
    },
    clicks(index) {
      console.log(1)
      this.current = index
    },
    handlrest() {
      this.$emit('handReset', this.form)
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>
<style lang="scss" scoped>
%juzhong {
  display: flex;
  align-items: center;
  justify-content: center;
}
.nav-selected {
    width: 100%;
    font-size: 0;
    line-height: 0;
    border-bottom: 1px solid #e8e8e8;
}
.nav-selected span {
    display: inline-block;
    box-sizing: content-box;
    padding: 10px;
    margin: 10px 24px;
    border-bottom: 2px solid transparent;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #595959;
    text-align: center;
    line-height: 22px;
    cursor: pointer;
}
.nav-selected .nav-show {
    color: #3ec6b6;
    border-bottom: 2px solid #3ec6b6;
}
.container {
  width: 100%;
  height: auto;
  color: rgba(0, 0, 0, 0.65);
}
.add {
  margin: 0 46px;
  width: 34px;
  height: 34px;
  background: #3ec6b6;
  border-radius: 50%;
  color: #fff;
  font-size: 30px;
  margin-bottom: 24px;
  text-align: center;
  line-height: 34px;
  font-weight: 200;
  cursor: pointer;
}
.tableList {
  margin: 0 46px;
}
.el-pagination {
  float: right;
  white-space: nowrap;
  padding: 20px 15px;
  color: #303133;
  font-weight: bold;
}
</style>
