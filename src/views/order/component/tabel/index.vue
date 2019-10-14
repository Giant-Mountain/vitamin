<template>
  <div>
    <div v-for="(item,index) in list" :key="index" class="navselected">
      <span>{{ item.title }}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    list: {
      type: Array
    }
  }
}
</script>
<style >
    @import url('./index.css');
</style>
