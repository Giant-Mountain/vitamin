<template>
  <div class="content">
    <h3>{{ title }}</h3>
    <div class="small">
      <el-table
        :data="categoryList"
        style="width: 100%"
      >
        <el-table-column
          prop="name"
          label="分类名称"
          width="180"
        />
        <el-table-column
          prop="weight"
          label="权重"
          width="180"
        />
        <el-table-column
          prop="option"
          label="操作"
          width="180"
        />
      </el-table>
    </div>
  </div>
</template>

<script>
// import { mapState } from 'vuex'
export default {
  name: 'SetTable',
  // eslint-disable-next-line vue/require-prop-types
  props: ['title', 'categoryList'],
  data() {
    return {
    }
  },
  //   computed: {
  //     ...mapState({
  //       categoryList: state => state.team.categoryList
  //     })
  //   },
  //   created() {
  //     this.$store.dispatch('team/getCategoryList')
  //   },
  mounted() {
    console.log(this.categoryList)
  }
}
</script>

<style>
</style>
