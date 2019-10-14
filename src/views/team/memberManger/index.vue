<template>
  <div class="container">
    <NavHeader
      :title="title"
      :nav-list="navList"
      :current="current"
      :flag="flag"
      @handleClicks="clicks"
    />
    <div class="main">
      <div v-show="current===0">
        <InputList />
      </div>
      <div v-show="current===1">123234</div>
      <div v-show="current===2">123235</div>
    </div>
  </div>
</template>
<script>
import InputList from '@/components/InputList'
import NavHeader from '@/components/NavHeader'
export default {
  name: 'MemberManger',
  components: {
    InputList,
    NavHeader
  },
  data() {
    return {
      navList: ['员工管理', '邀请中', '角色描述'],
      current: 0,
      title: '员工管理',
      flag: false
    }
  },
  methods: {
    clicks(current) {
      this.current = current
    }
  }
}
</script>
<style lang="scss" scoped>
%juzhong {
    display: flex;
    align-items: center;
    justify-content: center;
}
.container {
    width: 100%;
    height: auto;
    color: rgba(0, 0, 0, 0.65);
}
</style>

