<template>
  <div class="container">
    <NavHeader
      :title="title"
      :nav-list="navList"
      :current="current"
      :flag="flag"
      @handleClicks="clicks"
    />
    <div class="main">
      <div v-show="current===0">
        <div class="inputList">
          <CustormerFrom
            :form="form"
            :froms="froms[current]"
          />
        </div>
        <div class="add">
          <span>+</span>
        </div>
        <div class="tableList">
          <CustormerTable
            :table-column="tableColumn[current]"
            :table-list="tableLists[current]"
          />
        </div>
      </div>
      <div v-show="current===1">123234</div>
      <div v-show="current===2">123235</div>
    </div>
  </div>
</template>
<script>
import CustormerFrom from '@/components/CustormerFrom'
import CustormerTable from '@/components/CustermerTable'
import NavHeader from '@/components/NavHeader'
export default {
  name: 'MemberManger',
  components: {
    CustormerFrom,
    NavHeader,
    CustormerTable
  },
  // eslint-disable-next-line vue/require-prop-types
  props: ['title', 'navList', 'form', 'froms', 'tableColumn', 'tableLists'],
  data() {
    return {
      current: 0,
      flag: true
    }
  },
  methods: {
    clicks(current) {
      this.current = current
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
</style>
