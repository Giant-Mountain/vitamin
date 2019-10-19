<template>
  <div class="big">
    <el-tabs
      :tab-position="tabPosition"
      style="height:100%;"
    >
      <el-tab-pane
        label="关于我们"
        class="cont"
      >
        <h3>关于我们</h3>
        <div class="small">
          <vue-ueditor-wrap
            v-model="serviceabort.about_us.value"
            :config="myConfig"
          />
          <Status :service-status="serviceabort.about_us.status" />
        </div>
      </el-tab-pane>
      <el-tab-pane
        label="联系我们"
        class="cont"
      >
        <h3>联系我们</h3>
        <div class="small">
          <el-input
            v-model="serviceabort.contact_us.value"
            placeholder="请输入客服电话"
          />
          <Status :service-status="serviceabort.contact_us.status" />
        </div>
      </el-tab-pane>
      <el-tab-pane
        label="常见问题及指南"
        class="cont"
      >
        <h3>常见问题及指南</h3>
        <div class="small">
          <vue-ueditor-wrap
            v-model="serviceabort.faq.value"
            :config="myConfig"
          />
          <Status :service-status="serviceabort.faq.status" />
        </div>
      </el-tab-pane>
      <el-tab-pane
        label="条款与条件"
        class="cont"
      >
        <h3>条款与条件</h3>
        <div class="small">
          <vue-ueditor-wrap
            v-model="serviceabort.condition.value"
            :config="myConfig"
          />
          <Status :service-status="serviceabort.condition.status" />
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import VueUeditorWrap from 'vue-ueditor-wrap'
import Status from '@/components/Status'
export default {
  name: 'Shopset',
  components: {
    VueUeditorWrap,
    Status
  },
  computed: {
    ...mapState({
      serviceabort: state => state.team.serviceabort
    })
  },
  created() {
    this.$store.dispatch('team/getServiceAbort', {
      key: 'about_us,contact_us,faq,condition,condition_login_display'
    })
  },
  // eslint-disable-next-line vue/order-in-components
  data() {
    return {
      tabPosition: 'left',
      //   serviceabort: {
      //     about_us: {},
      //     contact_us: {},
      //     faq: {},
      //     condition: {}
      //   },
      myConfig: {
        // 初始容器高度
        initialFrameHeight: 450,
        // 初始容器宽度
        initialFrameWidth: 400,
        // 上传文件接口
        enableAutoSave: false,
        elementPathEnable: false,
        wordCount: false
      }
    }
  },
  mounted() {
    console.log(this.$store.state.team, '/////////////')
  }
}
</script>

<style lang="scss" scoped>
.big {
    width: 100%;
    height: 100%;
    padding: 48px 0 0 48px;
}
.cont {
    padding: 0 30px;
}
.el-input {
    width: 250px;
}
</style>
