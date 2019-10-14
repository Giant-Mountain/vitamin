<template>
  <div>
    <div class="dashboardCon">
      <ul>
        <li>你好，方超管！</li>
        <li>看看你店里发生了什么</li>
        <li>没有内容……快去推广你的店铺吧~</li>
      </ul>
      <div class="bind">
        <p>绑定您的账号</p>
        <img src="/images/1.png" alt="">
        <span>为了使用商户端全部功能，请扫描二维码，前往“国芳官微商城”，绑定你的账号</span>
      </div>
    </div>
  </div>
</template>

<script>
</script>
<style >
.dashboardCon{
   width: 100%;
  height: 100%;
  padding: 0 40px;
  position: relative;

}
.dashboardCon ul  li{
  list-style-type: none;
  margin:30px 0;
}
.dashboardCon ul  li:first-child{
  font-size: 20px;

}
.dashboardCon ul li:nth-child(2){
  color:#a0a0a0;
  font-size: 14px;
}
.bind{
  width:184px;
  text-align: center;
position: relative;
right:-900px;
}
.bind span{
  font-size: 12px;
  display: block;
}
.bind img{
  width:128px;
  height: 128px;
}
</style>
