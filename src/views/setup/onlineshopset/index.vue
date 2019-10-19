<template>
  <div class="big">
    <el-tabs
      :tab-position="tabPosition"
      style="height:100%;"
    >
      <el-tab-pane
        label="菜单结构"
        class="cont"
      >
        <h3>菜单结构</h3>
        <div class="small" />
      </el-tab-pane>
      <el-tab-pane
        label="基本信息"
        class="cont"
      >
        <h3>基本信息</h3>
        <div class="small" />
      </el-tab-pane>
      <el-tab-pane
        label="访问限制"
        class="cont"
      >
        <h3>访问限制</h3>
        <div class="small" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'Shopset',
  computed: {
    ...mapState({
      category: state => state.team.category,
      floorList: state => state.team.floorList
    })
  },
  created() {
    this.$store.dispatch('team/getCategoryList')
    this.$store.dispatch('team/getFloorList')
  },
  // eslint-disable-next-line vue/order-in-components
  data() {
    return {
      tabPosition: 'left'
    }
  },
  mounted() {
    console.log(this.$store.state.team, '/////////////')
  }
}
</script>

<style lang="scss" scoped>
.big {
    width: 100%;
    height: 100%;
    padding: 48px 0 0 48px;
}
.cont {
    padding: 0 30px;
}
</style>
