<template>
  <div>
    <div class="managementCon">
      <div class="card-group">店铺管理</div>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="全部店铺" name="first">
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
                    v-for="item in FloorList"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                  />
                </el-select>
              </div>
              <div>
                分类:
                <el-select v-model="value" placeholder="请选择" class="selectbox">
                  <el-option
                    v-for="item in FloorList"
                    :key="item.id"
                    :label="item.description"
                    :value="item.id"
                  />
                </el-select>
              </div>
            </div>
            <div class="totalInput2">
              <el-button type="primary" class="btn1" @click="onSubmit">查询</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </div>
          </div>
          <div class="table-layout">
            <!-- <div class="btn-add" >+</div> -->

            <!-- <el-button type="primary" style="margin-left: 16px;" @click="drawer = true">点我打开</el-button>

            <el-drawer
              title="我是标题"
              :visible.sync="drawer"
              :direction="direction"
              :before-close="handleClose"
            >
              <span>我来啦!</span>
            </el-drawer>-->

            <!-- 表格 -->
            <el-table :data="ManagerList" style="width: 100%">
              <el-table-column prop="name" label="店铺名称" width="180" />
              <el-table-column prop="floor_name" label="楼层" width="180" />
              <el-table-column prop="address" label="位置" />
              <el-table-column prop="category_data[0]" label="所属分类" />
              <el-table-column prop="shop_manager" label="店长" />
              <el-table-column prop="building" label="楼管" />
              <el-table-column prop="status_str" label="状态" />
              <el-table-column prop label="操作" />
            </el-table>
            <div class="block">
              <el-pagination
                :current-page="currentPage4"
                :page-sizes="[10, 15, 20, 25]"
                :page-size="10"
                layout="total, sizes, prev, pager, next, jumper"
                :total="789"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
              />
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="e店铺" name="second">
          <div class="totalInput">
            <div class="totalInput1">
              <div>
                店铺名:
                <el-input v-model="input" placeholder="请输入内容" class="Inputbox" />
              </div>
              <div>
                店铺权限:
                <el-select v-model="value" placeholder="请选择" class="selectbox">
                  <el-option
                    v-for="item in elist"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                  />
                </el-select>
              </div>
              <div>
                授权品牌:
                <el-select v-model="value" placeholder="请选择" class="selectbox">
                  <el-option
                    v-for="item in brandlist"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                  />
                </el-select>
              </div>
            </div>
            <div class="totalInput2">
              <el-button type="primary" class="btn1" @click="onSubmit">查询</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </div>
          </div>
          <!-- {{FloorList}} -->
          <!-- {{brandlist}} -->
          <el-table :data="ManagerList" style="width: 100%">
            <el-table-column prop="name" label="店铺名称" width="180" />
            <el-table-column prop="store_permission" label="店铺权限" width="180" />
            <el-table-column prop="address" label="授权品牌" />
            <el-table-column prop="category_data[0]" label="商品来源" class="Type" />
            <el-table-column prop="status_str" label="状态" />
          </el-table>
          <!-- e店铺分页器 -->
          <!-- {{elist}} -->
          <div class="block">
            <el-pagination
              :current-page="CurrentPage4"
              :page-sizes="[10, 15, 20, 25]"
              :page-size="10"
              layout="total, sizes, prev, pager, next, jumper"
              :total="548"
              @size-change="handleSizeChange1"
              @current-change="handleCurrentChange1"
            />
          </div>
        </el-tab-pane>
      </el-tabs>
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
      value: '',
      drawer: false,
      direction: 'rtl',
      currentPage4: 4,
      CurrentPage4: 4
    }
  },
  computed: {
    ...mapState('manager', ['ManagerList', 'FloorList', 'elist', 'brandlist'])
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
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
    ...mapActions({
      getManagerList: 'manager/getManagerList',
      getFloorList: 'manager/getFloorList',
      getEList: 'manager/getEList',
      getBrandList: 'manager/getBrandList'
    }),
    // 全部店铺分页器
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      this.currentPage4 = val
      console.log(`当前页: ${val}`)
      this.getManagerList({
        page: this.currentPage4,
        scene_type: 1
      })
    },
    // e店铺分页器
    handleSizeChange1(value) {
      console.log(`每页 ${value} 条`)
    },
    handleCurrentChange1(value) {
      console.log(`当前页: ${value}`)
      this.CurrentPage4 = value
      this.getManagerList({
        page: this.CurrentPage4,
        scene_type: 1
      })
    }
  },
  mounted() {
    this.getManagerList({
      page: this.currentPage4,
      scene_type: 1
    })

    this.getFloorList()
    this.getEList()
    this.getBrandList()
    // this.$store.dispatch('manager/getManagerList',{
    //   page:1,
    //   scene_type:1
    // });
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

.managementCon {
  width: 100%;
  height: 100%;
  padding: 20px 40px;
  position: relative;
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
  margin: 10px 0px;
}
.totalInput1 div .Inputbox {
  width: 65%;
}
.totalInput1 div .selectbox {
  width: 65%;
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

.btn-add {
  margin: 30px 0;
  color: #fff;
}
.block {
  margin-top: 30px;
  margin-left: 530px;
}
.el-table_1_column_4 .cell {
  font-size: 12px;
  border: 1px solid #d9d9d9;
  background: #fafafa;
  display: inline-block;
  border-radius: 4px;
}
.el-table_1_column_4 .cell label {
  border: none;
}
</style>
