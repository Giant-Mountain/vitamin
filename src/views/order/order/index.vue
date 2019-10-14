<template>
  <div>
    <breadcrumb id="breadcrumb-container" class="breadcrumb-container" />
    <div class="content-action">
      <div class="page-container">
        <div class="card-group">
          <h3>订单管理</h3>
          <div class="operate-actions margin-24-top">
            <div class="batch-btn">
              <i
                aria-label="图标: download"
                class="anticon anticon-download margin-8-right"
                style="font-size: 16px;"
              >
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  class
                  data-icon="download"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M505.7 661a8 8 0 0 0 12.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"
                  />
                </svg>
              </i>批量导出
            </div>
            <div class="batch-btn">
              <i
                aria-label="图标: file-excel"
                class="anticon anticon-file-excel margin-8-right"
                style="font-size: 16px;"
              >
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  class
                  data-icon="file-excel"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0 0 42 42h216v494zM514.1 580.1l-61.8-102.4c-2.2-3.6-6.1-5.8-10.3-5.8h-38.4c-2.3 0-4.5.6-6.4 1.9-5.6 3.5-7.3 10.9-3.7 16.6l82.3 130.4-83.4 132.8a12.04 12.04 0 0 0 10.2 18.4h34.5c4.2 0 8-2.2 10.2-5.7L510 664.8l62.3 101.4c2.2 3.6 6.1 5.7 10.2 5.7H620c2.3 0 4.5-.7 6.5-1.9 5.6-3.6 7.2-11 3.6-16.6l-84-130.4 85.3-132.5a12.04 12.04 0 0 0-10.1-18.5h-35.7c-4.2 0-8.1 2.2-10.3 5.8l-61.2 102.3z"
                  />
                </svg>
              </i>查看已生成报表
            </div>
          </div>
        </div>
        <div class="margin-24-top padding-24-top bg-white">
          <div class="nav-selected">
            <tabel :list="list" />
          </div>
          <div class="card-group">
            <el-form ref="form" :model="form" label-width="80px">
              <div v-for="(item, index) in forms" :key="index" type="flex">
                <el-col v-for="(value, key) in item" :key="key" :span="8" class="form-item">
                  <!-- {{value}} -->
                  <el-form-item :label="value.label" class="form-label">
                    <component
                      :is="value.is"
                      v-model="form[value.name]"
                      :placeholder="value.placeholder"
                      :range.sync="form[value.name]"
                    >
                      <el-option
                        v-for="(v, s) in value.options"
                        v-show="value.label==='订单类型'"
                        :key="s"
                        :value="v.value"
                      >{{ v.value }}</el-option>
                      <el-option
                        v-for="(v, ind) in value.options"
                        v-show="value.label==='楼层'"
                        :key="ind"
                        :label="v.name"
                        :value="v.name"
                      >{{ v.name }}</el-option>
                      <el-option-group
                        v-for="(group,k) in value.options"
                        v-show="value.label==='店铺'"
                        :key="k"
                        :label="group.label"
                      >
                        {{ group.title }}
                        <el-option
                          v-for="(v, id) in group.children"
                          :key="id"
                          :label="v.title"
                          :value="v.title"
                        >{{ v.title }}</el-option>
                      </el-option-group>
                    </component>
                  </el-form-item>
                </el-col>
              </div>
            </el-form>
            <div class="ant-col ant-col-24">
              <span class="btn-info margin-10-left float-right">重置</span>
              <span class="btn-primary float-right">查询</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { floor } from '../api/order.js'
import Breadcrumb from '../../../components/Breadcrumb'
import Tabel from '../component/tabel'
export default {
  components: {
    Breadcrumb,
    Tabel
  },
  data() {
    return {
      form: {
        name: '',
        isAlpha: '',
        date: '',
        options: []
      },
      list: [
        {
          id: 1,
          title: '全部'
        },
        {
          id: 2,
          title: '待付款'
        },
        {
          id: 3,
          title: '待发货'
        },
        {
          id: 4,
          title: '待收货'
        },
        {
          id: 5,
          title: '已完成'
        }
      ],
      forms: [
        [
          {
            label: '订单号',
            name: 'name',
            placeholder: '请输入订单号',
            is: 'el-input'
          },
          {
            label: '姓名',
            name: 'name',
            placeholder: '请输入姓名',
            is: 'el-input'
          },
          {
            label: '手机号',
            name: 'name',
            placeholder: '请输入手机号',
            is: 'el-input'
          },
          {
            label: '订单类型',
            name: 'name',
            is: 'el-select',
            options: [
              {
                label: '全部',
                value: '全部'
              },
              {
                label: '电商订单',
                value: '电商订单'
              },
              {
                label: '线上poss',
                value: '电商订单'
              },
              {
                label: '电子卡卷',
                value: '电子卡卷'
              }
            ]
          },
          {
            label: '楼层',
            name: 'name',
            is: 'el-select',
            options: null
          },
          {
            label: '店铺',
            name: 'name',
            is: 'el-select',
            options: null
          },
          {
            label: '品牌',
            name: 'name',
            is: 'el-select'
          },
          {
            label: '商品单号',
            name: 'name',
            placeholder: '请输入',
            is: 'el-input'
          },
          {
            label: '商品名称',
            name: 'name',
            placeholder: '请输入',
            is: 'el-input'
          },
          {
            label: '下单时间',
            name: 'name',
            placeholder: '开始时间~结束事件',
            is: 'el-date-picker'
          },
          {
            label: '支付时间',
            name: 'name',
            placeholder: '开始时间~结束事件',
            is: 'el-date-picker'
          }
        ]
      ]
    }
  },
  mounted() {
    floor({
      org_id: 61500,
      org_type: 5
    }).then(res => {
      console.log(res.data)
      this.forms = this.forms.map(item =>
        item.map(item => {
          if (item.label === '楼层') {
            return {
              ...item,
              options: res.data.floor
            }
          } else if (item.label === '店铺') {
            return {
              ...item,
              options: res.data.store
            }
          }
          return item
        })
      )
    })
  }
  // watch: {
  //   options: {
  //     handFloor() {
  //       console.log(this.options);
  //     }
  //   }
  // }
}
</script>
<style>
@import url("./style/index.css");
</style>
