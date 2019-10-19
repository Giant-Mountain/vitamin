<template>
  <div>
    <el-form ref="form" :model="form" :rules="rules">
      <div class="from-content">
        <el-form-item
          v-for="(value,key) in froms"
          :key="key"
          :label="value.label"
          class="form-label"
          :rules="value.rules"
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
            autocomplete="off"
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
    <div slot="footer" class="dialog-footer" style="marginLeft:60%">
      <el-button @click="handCancel">取 消</el-button>
      <el-button type="primary" @click="submit('form')">确 定</el-button>
    </div>
  </div>
</template>

<script>
export default {
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
    dialogFormVisible: {
      type: Boolean
    }
  },
  data() {
    return {
      rules: {
        // 校验手机号码，主要通过validator来指定验证器名称
        name: [{ required: true, message: "姓名不能为空", trigger: "blur" }]
      }
    };
  },
  methods: {
    handChange() {
      this.$store.commit("custormer/SET_TYPE", this.form.type);
    },
    handCancel() {
      this.$store.commit("custormer/SET_DIALOG", !this.dialogFormVisible);
    },
    submit(formName) {
      const { name, mobile, cid, hiredate, type, section } = this.form;
      if (
        name === "" ||
        mobile === "" ||
        cid === "" ||
        hiredate === "" ||
        type === "" ||
        section === ""
      ) {
        alert("信息填入不完整");
      } else {
        this.$store.dispatch("merge/getaddQrcodeList", this.form);
        alert("添加成功");
        this.$store.commit("custormer/SET_DIALOG", !this.dialogFormVisible);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.from-content {
  padding: 0 40px;
}
.from-content /deep/ .el-form-item {
  display: flex;
  justify-content: center;
  width: 100%;
}
.from-content /deep/ .el-input__inner {
  width: 300px;
}
.form-label /deep/ .el-form-item__label {
  width: 100px;
  font-weight: normal;
}
</style>
