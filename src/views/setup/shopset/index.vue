<template>
  <div>
    <el-tabs
      :tab-position="tabPosition"
      style="height: 200px;"
    >
      <el-tab-pane :label="title">
        <SetTable
          :title="title"
          :category-list="categoryList"
        />
      </el-tab-pane>
      <el-tab-pane label="楼层管理">配置管理</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import SetTable from '@/components/SetTable'
import { mapState } from 'vuex'
export default {
  name: 'Shopset',
  components: {
    SetTable
  },
  computed: {
    ...mapState({
      categoryList: state => state.team.categoryList
    })
  },
  created() {
    this.$store.dispatch('team/getCategoryList')
  },
  // eslint-disable-next-line vue/order-in-components
  data() {
    return {
      tabPosition: 'left',
      title: '店铺分类管理'
    }
  }
}
</script>
