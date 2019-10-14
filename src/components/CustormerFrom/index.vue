<template>
  <div>
    <el-form
      ref="form"
      :model="form"
    >
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
            :range.sync="form[value.name]"
          >
            <el-option
              v-for="(v, k) in gradeLevel"
              v-show="value.name==='vip'"
              :key="k"
              :label="v.label"
              :value="v.value"
            />
          </component>
        </el-form-item>
      </div>
    </el-form>
    <div class="form-btns">
      <button @click="search">查询</button>
      <button @click="reset">重置</button>
    </div>
  </div>
</template>

<script>
import RangeInput from './components/RangInput'

export default {
  name: 'CustormerFrom',
  components: {
    RangeInput
  },
  // props: ['froms', 'form'],
  //   props: {
  //     froms: {
  //       type: Array
  //     },
  //     form: {
  //       type: Object
  //     }
  //   },
  props: {
    froms: {
      type: Array,
      default: function() {
        return {}
      }
    },
    form: {
      type: Object,
      default: function() {
        return {}
      }
    },
    gradeLevel: {
      type: Array,
      default: function() {
        return {}
      }
    }
  },
  data() {
    return {}
  },
  methods: {
    search() {
      this.$emit('handSearch', this.form)
    },
    reset() {
      console.log('重置')
    }
  }
}
</script>

<style lang="scss" scoped>
.from-content {
    display: flex;
    flex-wrap: wrap;
    padding: 46px 46px 20px 46px;
}

.from-content /deep/ .el-form-item {
    display: flex;
    width: 500px;
    height: 40px;
    line-height: 40px;
    display: inline-block;
}
.form-label /deep/ .el-form-item__label {
    font-size: 12px;
    display: inline-block;
    width: 120px;
    font-weight: normal;
}

.form-label /deep/ .el-input__inner {
    width: 250px;
}
.form-label /deep/ .el-form-item__content .el-input {
    font-size: 12px;
    width: 250px;
}
.form-label /deep/ .el-form-item__content .el-range-input {
    margin-left: 10px;
    font-size: 12px;
}
.form-label /deep/ .el-form-item__content .el-range-separator {
    font-size: 12px;
}
.form-btns {
    display: flex;
    justify-content: flex-end;
    button {
        margin-right: 15px;
        display: inline-block;
        background: #3ec6b6;
        border: 1px solid #3ec6b6;
        color: #fff;
        border-radius: 4px;
        padding: 6px 15px;
    }
    button:nth-child(2) {
        color: #3c3c3c;
        border-radius: 4px;
        border: 1px solid #e8e8e8;
        background-color: #fff;
    }
}
</style>
