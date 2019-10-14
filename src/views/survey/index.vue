<template>
  <div>
    <div class="surveyCon">
      <div class="card-group1">
        <p>概况</p>
      </div>
      <div class="card-group2">
        <p>数据统计</p>
        <div class="tab-right">
          <div class="day">今日</div>
          <div class="week">本周</div>
          <div class="month">本月</div>
          <div class="block">
            <el-date-picker
              v-model="value1"
              type="daterange"
              range-separator="~"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            />
          </div>
        </div>
      </div>
      <div id="main" style="width:600px;height:400px" />
    </div>
  </div>
</template>
<script>
import echarts from 'echarts'
// var myChart = echarts.init(document.getElementById('main'));
export default {
  data() {
    return {
      pickerOptions: {},
      value1: '',
      value2: '',
      charts: '',
      /*  opinion: ["1", "3", "3", "4", "5"],*/
      opinionData: ['3', '2', '4', '4', '5']
    }
  },
  // 调用
  mounted() {
    this.$nextTick(function() {
      this.drawLine('main')
    })
  },
  methods: {
    drawLine(id) {
      this.charts = echarts.init(document.getElementById(id))
      this.charts.setOption({
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['近七日收益']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },

        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['1', '2', '3', '4', '5']
        },
        yAxis: {
          type: 'value'
        },

        series: [
          {
            name: '近七日收益',
            type: 'line',
            stack: '总量',
            data: this.opinionData
          }
        ]
      })
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
  /* --antd-wave-shadow-color:#1890ff; */
}

.surveyCon {
  width: 100%;
  height: 100%;
  padding: 0 40px;
  position: relative;
}
.surveyCon .card-group1 {
  background: #fcfcfc;
  width: 100%;
  height: 72px;
  line-height: 72px;
  padding: 0 24px;
  margin: 30px 0;
}
.surveyCon .card-group2 {
  background: #fcfcfc;
  width: 100%;
  height: 72px;
  align-items: center;
  display: flex;
  justify-content: space-between;
}
.surveyCon .card-group2 p {
  padding: 0 24px;
}
.surveyCon .card-group2 .tab-right {
  display: flex;
  line-height: 72px;
  padding: 0 24px;
}
.surveyCon .card-group2 .tab-right div {
  padding: 0 18px;
}
#main{
  /* background: darkblue; */
}
</style>

