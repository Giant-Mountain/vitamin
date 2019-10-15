<template>
  <div>
    <el-form ref="form" :model="form">
      <div class="from-content">
        <el-form-item
          v-for="(value,key) in froms"
          :key="key"
          :label="value.label"
          class="form-label"
        >
          <component
            :is="value.is"
            v-model="form[value.name]"
            :type="value.type"
            :range-separator="value.rangeSeparator"
            :start-placeholder="value.startPlaceholder"
            :end-placeholder="value.endPlaceholder"
            :placeholder="value.placeholder"
            :buy_times.sync="form[value.name]"
            @change="handChange"
          >
            <el-option
              v-for="(v, k) in value.options"
              :key="k"
              v-model="v.value"
              :label="v.label"
              :value="v.value"
            />
          </component>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    froms: {
      type: Array,
      default: function() {
        return []
      }
    },
    form: {
      type: Object,
      default: function() {
        return {}
      }
    }
  },
  methods: {
    handChange() {
      console.log(123)
      this.$emit('handSelect', this.form)
    }
  }
}
</script>

<style lang="scss" scoped>
.from-content {
  padding: 0 60px;
}
.from-content /deep/ .el-form-item {
  display: flex;
  width: 100%;
}
.from-content /deep/ .el-input {
  flex: 8;
}
.from-content /deep/ .el-input__inner {
  width: 300px;
}
.form-label /deep/ .el-form-item__label {
  width: 100px;
  font-weight: normal;
}
</style>
