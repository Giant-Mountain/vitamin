<template>
  <el-drawer title="发票详情" :visible.sync="table" :direction="direction" size="50%">
    <div class="ant-drawer-body">
      <div class="card-group">
        <p class="bold">发票信息</p>
        <p>
          <span class="width-per-22">发票抬头：</span>
          <span class="col-xs-6">{{ getInvoice.invoice_info.order_invoice_info.title }}</span>
        </p>
        <p>
          <span class="width-per-22">纳税人识别号:</span>
          <span class="col-xs-6">{{ getInvoice.invoice_info.order_invoice_info.number }}</span>
        </p>
      </div>
      <div class="card-group">
        <p>
          <span class="width-per-22">实付金额:</span>
          <span class="col-xs-6">￥{{ getInvoice.order_info.amount }}</span>
        </p>
        <p>
          <span class="width-per-22">订单编号:</span>
          <span class="col-xs-6">{{ getInvoice.order_info.number }}</span>
        </p>
        <p>
          <span class="width-per-22">微信订单编号:</span>
          <span class="col-xs-6">{{ getInvoice.pay_info.transaction_id }}</span>
        </p>
        <p>
          <span class="width-per-22">订单类型:</span>
          <span class="col-xs-6">{{ getInvoice.order_info.type_str }}</span>
        </p>
        <p>
          <span class="width-per-22">下单时间:</span>
          <span class="col-xs-6">{{ getInvoice.order_info.created_at_str }}</span>
        </p>
        <p>
          <span class="width-per-22">付款时间:</span>
          <span class="col-xs-6">{{ getInvoice.order_info.updated_at_str }}</span>
        </p>
        <p>
          <span class="width-per-22">付款方式:</span>
          <span class="col-xs-6">{{ getInvoice.pay_info.payment_type_str }}</span>
        </p>
      </div>
      <div class="card-group">
        <p class="bold">订单信息</p>
      </div>
      <div class="card-group">
        <p class="bold">SNIDEL</p>
      </div>
      <div class="card-group">
        <p class="margin-8-top">
          <i aria-label="图标: clock-circle" class="anticon anticon-clock-circle">
            <svg
              viewBox="64 64 896 896"
              focusable="false"
              class
              data-icon="clock-circle"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
              />
              <path
                d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"
              />
            </svg>
          </i>待发货
        </p>
        <div class="product-detail justify-between padding-10-tnb border-btm-grey">
          <div class="product-img">
            <img src="https://img.weitaming.com/test/product/image/20190930/ca6be48f9fb97aad2a9ebb26ce7690ee.jpg" class="img">
          </div>
          <div class="product-list float-left col-xs-8">
            <p>商品名称:{{ getInvoice }}</p>
            <p>商品款号:{{ getInvoice }}</p>
            <p>SKU编码:{{ getInvoice }}</p>
            <p>颜色:{{ getInvoice }}</p>
            <p>¥5760.00:{{ getInvoice }}</p>
          </div>
        </div>
      </div>
    </div>
  </el-drawer>
</template>
<script>
import { mapState } from 'vuex'
export default {
  props: ['table', 'direction', 'getInvoice'],
  mounted() {}
}
</script>
<style>
.img{
    /* width: 62px;
    height: 140px; */
    background-size: 10ch 10ch;
}
.el-drawer__header {
  position: relative;
  padding: 12px 24px 10px 24px;
  border-bottom: 1px solid #e8e8e8;
  border-radius: 4px 4px 0 0;
}
.el-drawer {
  overflow: auto;
}
.col-xs-8 {
    width: 80%;
}
.float-left {
    float: left;
}
.justify-between {
  display: flex;
  justify-content: space-between;
}
.product-img {
  width: 105px;
  height: 140px;
  margin-right: 8px;
  overflow: hidden;
  white-space: nowrap;
}
.padding-10-tnb {
  padding: 10px 0;
}
.border-btm-grey {
  border-bottom: 1px solid #e8e8e8;
}
.ant-drawer-body {
  padding: 0px 24px 0px 24px;
  font-size: 14px;
  line-height: 1.5;
  word-wrap: break-word;
}
.card-group {
  border-bottom: 1px solid #e8e8e8;
}
.card-group,
.card-item {
  padding: 0px 24px 24px;
  background: #fff;
  overflow: hidden;
}
.card-group p,
.card-item p {
  margin-bottom: 8px;
  overflow: hidden;
}
.bold {
  font-weight: 700;
}
.card-group p span,
.card-item p span {
  display: inline-block;
}
.width-per-22 {
  width: 22%;
}
.col-xs-6 {
  width: 60%;
}
</style>
