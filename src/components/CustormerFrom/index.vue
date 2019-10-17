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
                v-for="(v) in roleLists"
                v-show="value.name==='role'"
                :key="v.id"
                v-model="v.name"
                :label="v.label"
                :value="v.name"
              />
              <el-option
                v-for="(v) in shopList"
                v-show="value.name==='shop'"
                :key="v.id"
                v-model="v.name"
                :label="v.label"
                :value="v.name"
              />
              <el-option
                v-for="v in value.options"
                :key="v.label"
                :label="v.label"
                :value="v.value"
              />
              <el-option v-for="(v) in value.options" :key="v.id" :label="v.name" :value="v.id" />
              <el-option-group
                v-for="opt in value.options"
                v-show="opt.children"
                :key="opt.name"
                :label="opt.title"
              >
                <el-option
                  v-for="item in opt.children"
                  :key="item.name"
                  :label="item.name"
                  :value="item.id"
                />
                <el-option
                  v-for="v in value.options"
                  v-show="value.label==='楼层'"
                  :key="v.id"
                  :label="v.name"
                  :value="v.id"
                />
                <el-option
                  v-for="order in value.options"
                  v-show="value.label==='订单类型'"
                  :key="order.keb"
                  :value="order.id"
                  :label="order.keb"
                />
                <el-option
                  v-for="order in value.options"
                  v-show="value.label==='货源类型'"
                  :key="order.use"
                  :value="order.id"
                  :label="order.use"
                />
                <el-option
                  v-for="order in value.options"
                  v-show="value.label==='品牌'"
                  :key="order.name"
                  :value="order.id"
                  :label="order.name"
                />
                <el-option-group
                  v-for="group in value.options"
                  v-show="value.label==='店铺'"
                  :key="group.title"
                  :label="group.title"
                  :value="group.value"
                >
                  <el-option
                    v-for="item in group.children"
                    v-show="value.label==='店铺'"
                    :key="item.title"
                    :label="item.title"
                    :value="item.value"
                  />
                </el-option-group>
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
import RangeInput from "./components/RangInput";

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
    roleLists: {
      type: Array,
      default: function() {
        return [];
      }
    },
    shopList: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  data() {
    return {
      defaultProps: {
        children: "children",
        name: "name"
      }
    };
  },
  methods: {
    search() {
      this.$emit("handSearch", this.form);
    },
    reset() {
      this.$emit("resetInputValue");
      this.$emit("handlEmit", this.form);
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
  width: 33.3%;
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
  // padding: 46px 46px 20px 46px;
}
// .from-content {
//   display: flex;
//   flex-wrap: wrap;
//   padding: 46px 46px 20px 46px;
// }

// .from-content /deep/ .el-form-item {
//   display: flex;
//   width: 500px;
//   height: 40px;
//   line-height: 40px;
//   display: inline-block;
// }
// .form-label /deep/ .el-form-item__label {
//   font-size: 12px;
//   display: inline-block;
//   width: 120px;
//   font-weight: normal;
// }

// .from-content /deep/ .el-form-item {
//     display: flex;
//     // width: 33%;
//     height: 40px;
//     line-height: 40px;
//   width: 500px;
//   display: inline-block;
// }
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
