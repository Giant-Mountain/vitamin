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
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </div>
              <div>
                分类:
                <el-select v-model="value" placeholder="请选择" class="selectbox">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
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
          <div class="table-layout">
            <div class="btn-add">+</div>
            <!-- 表格 -->
            <el-table :data="tableData" style="width: 100%">
              <el-table-column prop="date" label="店铺名称" width="180" />
              <el-table-column prop="name" label="楼层" width="180" />
              <el-table-column prop="address" label="位置" />
              <el-table-column prop="address" label="所属分类" />
              <el-table-column prop="address" label="店长" />
              <el-table-column prop="address" label="楼管" />
              <el-table-column prop="address" label="状态" />
              <el-table-column prop="address" label="操作" />
            </el-table>
            <el-pagination background layout="prev, pager, next" :total="1000" />
          </div>
        </el-tab-pane>
        <el-tab-pane label="e店铺" name="second">e店铺</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
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
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市'
        }
      ]
    }
    // 表格数据
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
    }
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
}
.totalInput2 {
  position: relative;
  left: 950px;
}
.btn1 {
  background: #3ec6b6;
}
.table-layout {
}
</style>
