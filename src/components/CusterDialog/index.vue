<template>
  <el-dialog :title="title" :visible.sync="dialogFormVisible" @close="onClose">
    <el-form :model="form">
      <DialogForm :form="form" :froms="froms" :dialog-form-visible="dialogFormVisible" />
    </el-form>
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

    onClose() {
      this.$store.commit('custormer/SET_DIALOG', this.dialogFormVisible)
    }

  }
}
</script>
<style lang="scss">
</style>
