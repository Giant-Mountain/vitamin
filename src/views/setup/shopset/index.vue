<template>
  <div class="big">
    <el-tabs
      :tab-position="tabPosition"
      style="height:100%;"
    >
      <el-tab-pane
        label="店铺分类管理"
        class="cont"
      >
        <h3>店铺分类管理</h3>
        <div class="small">
          <el-table
            :data="category"
            style="width: 100%"
            row-key="name"
          >
            <el-table-column
              prop="name"
              label="分类名称"
              width="800"
            />
            <el-table-column
              prop="weight"
              label="权重"
              width="600"
            />
            <el-table-column
              prop="option"
              label="操作"
              width="200"
            />
          </el-table>
        </div>
      </el-tab-pane>
      <el-tab-pane
        label="楼层管理"
        class="cont"
      >
        <h3>楼层管理</h3>
        <div class="small">
          <el-table
            :data="floorList"
            style="width: 100%;"
          >
            <el-table-column
              prop="name"
              label="楼层名称"
              width="410"
            />
            <el-table-column
              prop="description"
              label="楼层说明"
              width="650"
            />
            <el-table-column
              prop="weight"
              label="权重"
              width="410"
            />
            <el-table-column
              prop="option"
              label="操作"
              width="150"
            />
          </el-table>
        </div>
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

