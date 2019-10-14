<template>
  <div class="inputList">
    <label><span>手机号:</span>
      <el-input
        v-model="input"
        placeholder="请输入内容"
      /></label>
    <label><span>所属店铺:</span>
      <el-select
        v-model="value"
        placeholder="请选择"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </label>
    <label><span>角色:</span>
      <el-select
        v-model="value"
        placeholder="请选择"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </label>
    <label><span>顾客账号:</span>
      <el-select
        v-model="value"
        placeholder="请选择"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </label>
    <label><span>状态:</span>
      <el-select
        v-model="value"
        placeholder="请选择"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </label>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
.inputList {
    padding: 48px;
    display: flex;
    flex-wrap: wrap;
    label {
        width: 500px;
        height: 80px;
        line-height: 80px;
        display: inline-block;
        text-align: center;
        .el-input,
        .el-select {
            width: 250px;
        }
        span {
            width: 70px;
            display: inline-block;
            text-align: end;
        }
    }
}
</style>

