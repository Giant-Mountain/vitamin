<template>
  <div>
    <div class="navigationCon">
      <div class="card-group">专柜导航设置</div>
      <!-- {{navlist}} -->
      <!-- {{floorlist}} -->
      <div class="totalInput">
        <div class="totalInput1">
          <div>
            店铺名:
            <el-input v-model="input" placeholder="请输入内容" class="Inputbox" />
          </div>
          <div>
            楼层:
            <el-select v-model="value" placeholder="请选择" class="selectbox">
              <el-option
                v-for="item in floorlist"
                :key="item.value"
                :label="item.name"
                :value="item.value"
              />
            </el-select>
          </div>
          <div>
            分类:
            <el-select v-model="value" placeholder="请选择" class="selectbox">
              <el-option
                v-for="item in floorlist"
                :key="item.value"
                :label="item.description"
                :value="item.value"
              />
            </el-select>
          </div>
        </div>
        <div class="totalInput2">
          <el-button type="primary" class="btn1" @click="onSubmit">查询</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </div>
      </div>
      <el-table :data="navlist" style="width: 100%">
        <el-table-column prop="name" label="店铺名称" width="180" />
        <el-table-column prop="floor_name" label="楼层" width="180" />
        <el-table-column prop="address" label="位置" />
        <el-table-column prop="category_data[0]" label="所属分类" />

        <el-table-column prop="weight" sortable label="权重" />
      </el-table>
      <div class="block">
        <el-pagination
          :current-page="currentPage4"
          :page-sizes="[10, 15, 20, 25]"
          :page-size="10"
          layout="total, sizes, prev, pager, next, jumper"
          :total="764"
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
      activeName: 'second',
      input: '',
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      value: '',
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    },
    onSubmit() {
      console.log('submit!')
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    ...mapActions({
      getNavList: 'navigation/getNavList',
      getFloorList: 'navigation/getFloorList'
    }),
    // 专业导航分页
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
      this.currentPage4 = val
      this.getNavList({
        scene_type: 2,
        page: this.currentPage4,
        store_type: 1
      })
    }
  },
  computed: {
    ...mapState('navigation', ['navlist', 'floorlist'])
  },
  mounted() {
    this.getNavList({
      scene_type: 2,
      page: this.currentPage4,
      store_type: 1
    })
    this.getFloorList()
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
  background: #fcfcfc;
}

.navigationCon {
  width: 100%;
  height: 100%;
  padding: 20px 40px;
  position: relative;
  /* background: aqua; */
}
.card-group {
  margin: 20px 0;
}
.totalInput {
  margin: 25px 0;
}
.totalInput1 {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
.totalInput1 div {
  margin: 10px 3px;
}
.totalInput1 div .Inputbox {
  width: 75%;
}
.totalInput1 div .selectbox {
  width: 75%;
}
.totalInput1 div .selectbox el-option {
  display: inline-block;
  width: 100%;
}
.card-group {
  margin: 20px 0;
}
.btn-add {
  width: 34px;
  height: 34px;
  background: #3ec6b6;
  border-radius: 50%;
  text-align: center;
  line-height: 34px;
  display: inline-block;
}
.totalInput2 {
  position: relative;
  left: 950px;
}
.btn1 {
  background: #3ec6b6;
}
.block {
  margin-top: 30px;
  margin-left: 450px;
}
.btn-add {
  margin: 30px 0;
  color: #fff;
}
</style>
