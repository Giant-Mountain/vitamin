<template>
  <div class="big">
    <el-tabs
      :tab-position="tabPosition"
      style="height:100%;"
    >
      <el-tab-pane
        label="域名"
        class="cont"
      >
        <h3>域名</h3>
        <div class="area">
          <span>{{ areaList.host }}</span>
          <el-button
            v-show="areaList.is_link===true"
            type="success"
            plain
          >已关联</el-button>
        </div>
      </el-tab-pane>
      <el-tab-pane
        label="短信"
        class="cont"
      >
        <h3>短信</h3>
        <div class="small">
          <div><span>维他命发送</span>
            <el-button
              v-show="areaList.is_link===true"
              type="success"
              plain
            >已关联</el-button>
          </div>
          <div>
            <h3>账号配置信息</h3>
            <div>
              <el-input
                :value="JSON.stringify(sorts.accountConfiguration)"
                type="textarea"
                :rows="4"
                placeholder="请输入内容"
                disabled
              />
            </div>
          </div>
          <div>
            <h3>注册登录</h3>
            <el-table
              :data="sorts.registerNoteList"
              style="width: 100%"
            />
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane
        label="CRM"
        class="cont"
      >
        <h3>CRM</h3>
        <div class="small">
          <div>IP:{{ crmList.ip }}</div>
          <div>Port:{{ crmList.port }}</div>
        </div>
      </el-tab-pane>
      <el-tab-pane
        label="ERP"
        class="cont"
      >
        <h3>ERP</h3>
        <div class="small">
          <div>IP:{{ erpList.ip }}</div>
          <div>Port:{{ erpList.port }}</div>
        </div>
      </el-tab-pane>
      <el-tab-pane
        label="支付/交易"
        class="cont"
      >
        <h3>支付/交易</h3>
        <div class="small">
          <div><span>微信支付商户号:</span>{{ payList.pay_sub_mch_id }}</div>
          <div><span>支付商户公众号AppId:</span>{{ payList.sub_appid }}</div>
        </div>
      </el-tab-pane>
      <el-tab-pane
        label="公众号管理"
        class="cont"
      >
        <h3>授权信息</h3>
        <div class="small">
          <div>
            <h4>LOGO</h4>
            <img
              :src="public.head_img"
              alt=""
              style="width:120px;height:120px"
            >
          </div>
          <div>
            <h4>昵称</h4>
            <span>{{ public.nick_name }}</span>
          </div>
          <div>
            <h4>微信号</h4>
            <span>{{public.app_id}}</span>
          </div>
          <div>
            <h4>已授权权限</h4>
            <span
              v-for="(item,index) in public.func_info"
              :key="index"
            >
              {{ item.value }}
            </span>
            <div>
              <el-button type="success">修改权限</el-button>
            </div>
          </div>
          <div>
            <h3>公众号设置</h3>
          </div>
          <div>
            <span>商场门店号</span>
            <div>
              <el-input
                v-model="input"
                placeholder="请输入"
              />
            </div>
            <div>
              <el-button :type="input===''?'success':''">修改</el-button>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane
        label="小程序管理"
        class="cont"
      >
        <h3>小程序管理</h3>
        <div class="small">
          <div>
            <h4>LOGO</h4>
            <img
              :src="small.head_img"
              alt=""
              style="width:120px;height:120px"
            >
          </div>
          <div>
            <h4>昵称</h4>
            <span>{{ small.nick_name }}</span>
          </div>
          <div>
            <h4>微信号</h4>
            <span>{{ small.app_id }}</span>
          </div>
          <div>
            <h4>已授权权限</h4>
            <span
              v-for="(item,index) in small.func_info"
              :key="index"
            >
              {{ item.value }}
            </span>
            <div>
              <el-button type="success">修改权限</el-button>
            </div>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'Shopset',
  computed: {
    ...mapState({
      areaList: state => state.team.areaList,
      crmList: state => state.team.crmList,
      erpList: state => state.team.erpList,
      payList: state => state.team.payList,
      public: state => state.team.public,
      small: state => state.team.small,
      sorts: state => state.team.sorts
    })
  },
  created() {
    this.$store.dispatch('team/getSeriveList')
    this.$store.dispatch('team/getSerivePublic', {
      plat_type: 1
    })
    this.$store.dispatch('team/getSeriveSmall', {
      plat_type: 2
    })
    this.$store.dispatch('team/getSeriveSort')
  },
  // eslint-disable-next-line vue/order-in-components
  data() {
    return {
      tabPosition: 'left',
      input: '611',
      tableColumn: [
        {

        }, {

        },
        {

        },
        {

        },
        {

        }
      ]
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
.small {
    div {
        margin: 10px 0;
        span {
            margin: 10px 30px 10px 0;
            line-height: 30px;
        }
    }
}
.el-input,
.el-textarea {
    width: 400px;
}
</style>
