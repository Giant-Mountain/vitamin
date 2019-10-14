<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <div v-for="(item, index) in forms" :key="index" type="flex">
        <el-col v-for="(value, key) in item" :key="key" :span="8" class="form-item">
          <!-- {{value}} -->
          <el-form-item :label="value.label" class="form-label">
            <component
              :is="value.is"
              v-model="form[value.name]"
              :placeholder="value.placeholder"
              :range.sync="form[value.name]"
            >
              <el-option
                v-for="(v, k) in value.options"
                v-show="value.label==='订单类型'"
                :key="k"
                :value="v.value"
              >{{ v.value }}</el-option>
              <el-option
                v-for="(v, k) in value.options"
                v-show="value.label==='楼层'"
                :key="k"
                :label="v.name"
                :value="v.name"
              >{{ v.name }}</el-option>
              <el-option-group
                v-for="(group,k) in value.options"
                v-show="value.label==='店铺'"
                :key="k"
                :label="group.label"
              >
                {{ group.title }}
                <el-option
                  v-for="(v, k) in group.children"
                  :key="k"
                  :label="v.title"
                  :value="v.title"
                >{{ v.title }}</el-option>
              </el-option-group>
            </component>
          </el-form-item>
        </el-col>
      </div>
    </el-form>
    <div class="ant-col ant-col-24">
      <span class="btn-info margin-10-left float-right">重置</span>
      <span class="btn-primary float-right">查询</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    forms: Array,
    form: Array
  }
}
</script>
