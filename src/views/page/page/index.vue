<template>
  <div>
    <div class="pageCon">
      <div class="card-group">页面</div>
      <div class="btn-add">+</div>
      <el-table :data="pagelist" style="width: 100%" class="tablebox">
        <el-table-column prop="page_title" label="名称" width="180" class="column" />
        <el-table-column prop="page_url" label="url" width="180" class="column" />
        <el-table-column prop="address" label="状态" />
      </el-table>
      <div class="block">
        <el-pagination
          :current-page="currentPage4"
          :page-sizes="[1,2]"
          :page-size="1"
          layout="total, sizes, prev, pager, next, jumper"
          :total="2"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {

      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    },
    ...mapActions({
      getPageList: 'page/getPageList'
    })
  },
  computed: {
    ...mapState('page', ['pagelist'])
  },
  mounted() {
    this.getPageList({
      page: 1,
      page_size: 10
    })
  }
}
</script>
<style>
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.pageCon {
  width: 100%;
  height: 100%;
  padding: 20px 40px;
  position: relative;
}
.card-group {
  margin: 40px 0;
}
.tablebox {
}
.btn-add {
  width: 34px;
  height: 34px;
  background: rgb(62, 198, 182);
  text-align: center;
  line-height: 34px;
  border-radius: 50%;
  margin: 20px 0;
  color: #fff;
}
.pag {
  margin-left: 680px;
  margin-top: 30px;
}
</style>
