<template>
  <el-dialog :title="title" :visible.sync="dialogFormVisible">
    <el-form :model="form">
      <DialogForm :form="form" :froms="froms" />
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="handCancel">取 消</el-button>
      <el-button type="primary" @click="handCancel">确 定</el-button>
    </div>
  </el-dialog>
</template>
<script>
import DialogForm from '@/components/DialogForm/index.vue'

export default {
  components: {
    DialogForm
  },
  props: {
    dialogFormVisible: {
      type: Boolean
    },
    froms: {
      type: Array,
      default: function() {
        return []
      }
    },
    form: {
      type: Object
    },
    title: {
      type: String
    }
  },
  data() {
    return {
      dialogTableVisible: false
    }
  },
  methods: {
    handCancel() {
      this.$store.commit('custormer/SET_DIALOG', this.dialogFormVisible)
    }
  }
}
</script>
<style lang="scss">
</style>
