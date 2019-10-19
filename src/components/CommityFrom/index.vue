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
            :placeholder="value.placeholder"
            :range.sync="form[value.name]"
          >
            <!-- <el-option
              v-for="v in value.options"
              v-show="value.label==='品牌'"
              :key="v.name"
              :value="v.id"
              :label="v.name"
            /> -->
            <!-- <el-option
              v-for="order in value.options"
              v-show="value.label==='分类'"
              :key="order.id"
              :value="order.id"
              :label="order.title"
            /> -->
            <!-- <el-option
              v-for="k in value.options"
              v-show="value.label==='商品来源'"
              :key="k.name"
              :value="k.id"
              :label="k.name"
            /> -->
            <!-- <el-option
              v-for="order in value.options"
              v-show="value.label==='商品类型'"
              :key="order.name"
              :value="order.id"
              :label="order.name"
            />-->
            <!-- <el-option
              v-for="item in value.options"
              v-show="value.label==='配送方式'"
              :key="item.name"
              :label="item.name"
              :value="item.id"
            /> -->
            <!-- <el-option-group
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
            </el-option-group> -->
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
export default {
  name: 'CustormerFrom',
  components: {},
  props: ['froms', 'form'],
  // gradeLevel: {
  //   type: Array,
  //   default: function() {
  //     return {}
  //   }
  // }
  data() {
    return {}
  },
  methods: {
    search() {
      this.$emit('handSearch', this.form)
    },
    reset() {
      this.$emit('handlEmit'), this.form
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
