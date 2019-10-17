<template>
  <div>
    <div class="navigationCon">
      <div class="card-group">专柜导航设置</div>
      <!-- {{navlist}} -->
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
      <el-table :data="navlist" style="width: 100%">
        <el-table-column prop="name" label="店铺名称" width="180" />
        <el-table-column prop="floor_name" label="楼层" width="180" />
        <el-table-column prop="address" label="位置" />
        <el-table-column prop="category_data[0]" label="所属分类" />

        <el-table-column prop label="权重" />
      </el-table>
      <el-pagination background layout="prev, pager, next" :total="1000" class="page" />
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
      value: ''
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
      getNavList: 'navigation/getNavList'
    })
  },
  computed: {
    ...mapState('navigation', ['navlist'])
  },
  mounted() {
    this.getNavList({
      scene_type: 2,
      page: 1,
      store_type: 1
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
.page {
  margin-top: 30px;
  margin-left: 730px;
}
.btn-add {
  margin: 30px 0;
  color: #fff;
}
</style>
