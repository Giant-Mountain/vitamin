<template>
  <div>
    <div class="card-group">
      <h3 v-text="title" />
    </div>
    <div class="card-header-nav">
      <div class="nav-selected">
        <span
          v-for="(item,index) in navList"
          :key="index"
          :class="currentIndex===item.id?'tab-active':null"
          @click="handClick(item.id)"
        >{{ item.nav }}</span>
      </div>
      <CustormerFrom :froms="froms" :form="form" />
    </div>
    <CustormerTable
      :table-column="tableColumn"
      :add-dialog="addDialog"
      :table-list="tableList"
      :table-component="tableComponent"
    />

  </div>
</template>

<script>
import CustormerFrom from '@/components/CustormerFrom/index.vue'
import CustormerTable from '@/components/CustermerTable/index.vue'
export default {
  components: {
    CustormerTable,
    CustormerFrom
  },
  props: {
    tableComponent: {
      type: Array
    },
    addDialog: {
      type: Boolean
    },
    currentIndex: {
      type: Number
    },
    tableList: {
      type: Array
    },
    tableColumn: {
      type: Array
    },
    title: {
      type: String
    },
    navList: {
      type: Array
    },
    froms: {
      type: Array
    },
    form: {
      type: Object
    }
  },

  methods: {
    handClick(id) {
      this.$emit('ChangeId', id)
    }
  }
}
</script>

<style lang="scss" scoped>
.card-group {
  padding: 10px 10px 10px 24px;
  background: #fff;
  h3 {
    font-size: 14px;
    font-weight: normal;
  }
}
.card-header-nav {
  margin-top: 24px;
  padding-top: 24px;
  background-color: #fff;
  height: auto;
  .nav-selected {
    height: 30px;
    span {
      margin: 0 25px;
      height: 100%;
      display: inline-block;
    }
    .tab-active {
      border-bottom: 2px solid #3ec6b6;
      color: #3ec6b6;
    }
  }
}
</style>
