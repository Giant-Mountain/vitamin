<template>
  <div>
    <el-form ref="form" :model="form">
      <div>
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
              :range-separator="value.rangeSeparator"
              :start-placeholder="value.startPlaceholder"
              :end-placeholder="value.endPlaceholder"
              :placeholder="value.placeholder"
              :buy_times.sync="form[value.name]"
            >
              <el-option
                v-for="(v) in gradeLevel"
                v-show="value.name==='grade_code'"
                :key="v.label"
                v-model="v.value"
                :label="v.label"
                :value="v.value"
              />
              <el-option
                v-for="(v) in value.options"
                v-show="!value.children && !value.group"
                :key="v.id"
                :label="v.name"
                :value="v.id"
              />
              <el-tree
                v-if="value.children==='yes'"
                :data="value.options"
                :props="defaultProps"
                @node-click="handleNodeClick"
              ></el-tree>
              <el-option-group
                v-for="opt in value.options"
                v-show="value.group==='yes'"
                :key="opt.name"
                :label="opt.title"
              >
                <el-option
                  v-for="item in opt.children"
                  :key="item.name"
                  :label="item.title"
                  :value="item.id"
                />
              </el-option-group>
            </component>
          </el-form-item>
        </div>
      </div>
    </el-form>
    <div class="form-btns">
      <button @click="search">查询</button>
      <button @click="reset">重置</button>
    </div>
  </div>
</template>

<script>
import RangeInput from "@/components/CustormerFrom/components/RangInput";

export default {
  name: "CustormerFrom",
  components: {
    RangeInput
  },
  props: {
    froms: {
      type: Array,
      default: function() {
        return [];
      }
    },
    form: {
      type: Object,
      default: function() {
        return {};
      }
    },
    gradeLevel: {
      type: Array,
      default: function() {
        return [];
      }
    },
    defaultProps: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  methods: {
    search() {
      this.$emit("handSearch", this.form);
    },
    reset() {
      this.$emit("resetInputValue");
      this.$emit("handlEmit", this.form);
    },
    handleNodeClick() {
      console.log(123);
    }
  }
};
</script>

<style lang="scss" scoped>
.from-content {
  padding: 46px 46px 20px 46px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
}
.from-content /deep/ .el-form-item {
  height: 40px;
  line-height: 40px;
  display: flex;
}
.form-label /deep/ .el-form-item__label {
  display: inline-block;
  width: 120px;
  font-weight: normal;
}
.from-content {
  display: flex;
  flex-wrap: wrap;
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
