<!--
 * @Author: your name
 * @Date: 2019-10-23 10:37:58
 * @LastEditTime: 2019-10-23 14:51:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxtdemo\components\MineDetail.vue
 -->
<template>
  <div class="app">
    <!-- 顶部登录注册 -->
    <div class="top">
      <p class="back">
        <a-icon type="left" />
      </p>
      <div class="top_detail" @click="login_register">
        <p class="icon">
          <img src="https://source.qunarzz.com/usercenter/touch/avatar.png" alt />
        </p>
        <p class="login">登录/注册</p>
      </div>
    </div>
    <!-- 我的钱包 -->
    <div class="wallet">
      <p class="wallet_title">
        <span class="span1">
          <a-icon type="money-collect" />
        </span>
        <span>我的钱包</span>
      </p>
      <table>
        <tr>
          <td>0.00</td>
          <td>0</td>
          <td>0张</td>
        </tr>
        <tr>
          <td>账户余额</td>
          <td>星劵</td>
          <td>银行卡</td>
        </tr>
      </table>
    </div>
    <!-- 业务项列表1 -->
    <div class="list_one">
      <ul>
        <li>
          <ul class="second_ul">
            <li>
              <a-icon type="menu-unfold" />
            </li>
            <li>我的订单</li>
            <li>
              <a-icon type="right" />
            </li>
          </ul>
          <ul class="second_ul">
            <li>
              <a-icon type="property-safety" />
            </li>
            <li>我的退款</li>
            <li>
              <a-icon type="right" />
            </li>
          </ul>
          <ul class="second_ul">
            <li>
              <a-icon type="credit-card" />
            </li>
            <li>我的发票</li>
            <li>
              <a-icon type="right" />
            </li>
          </ul>
          <ul class="second_ul">
            <li>
              <a-icon type="file-search" />
            </li>
            <li>我的攻略</li>
            <li>
              <a-icon type="right" />
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <!-- 业务项列表2 -->
    <div class="list_one">
      <ul>
        <li>
          <ul class="second_ul">
            <li>
              <a-icon type="form" />
            </li>
            <li>意见反馈</li>
            <li>
              <a-icon type="right" />
            </li>
          </ul>
          <ul class="second_ul">
            <li>
              <a-icon type="info-circle" />
            </li>
            <li>关于鲸游网</li>
            <li>
              <a-icon type="right" />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    login_register() {}
  }
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
}
/* 各种列表 */
.list_one {
  width: 100%;
  background: #ffffff;
  margin-top: 0.3rem;
  overflow: hidden;
}
.list_one ul {
  width: 100%;
  list-style: none;
  font-size: 16px;
}
.list_one ul li {
  width: 100%;
  height: 1.2rem;
}
.list_one ul li .second_ul {
  width: 100%;
  height: 1.2rem;
  line-height: 1.2rem;
}
.list_one ul li .second_ul li:nth-child(1) {
  width: 10%;
  color: #ff7043;
  margin-left: 0.2rem;
  text-align: center;
}
.list_one ul li .second_ul:nth-child(1) li:nth-child(1) {
  width: 10%;
  color: #0f76fd;
}
.list_one ul li .second_ul li:nth-child(2) {
  width: 80%;
  color: rgb(49, 48, 48);
  border-bottom: 1px solid #e0dede;
}
.list_one ul li .second_ul li:nth-child(3) {
  width: 8%;
  color: #b9b8b8;
  border-bottom: 1px solid #e0dede;
}
.list_one ul li .second_ul li {
  color: #0f76fd;
  float: left;
}

p {
  margin-bottom: 0;
}
.app {
  width: 100%;
  background-color: #ebeced;
}
/* 登录注册顶部 */
.top {
  width: 100%;
  height: 5rem;
  background: url("https://s.qunarzz.com/usercenter_mobile/images/my/mybgnew-20161111.jpg")
    no-repeat;
  background-size: 100% 100%;
}
.top .back {
  margin: 0 0 0 5%;
  color: #ffffff;
  font-size: 24px;
}
.top .top_detail {
  width: 1.8rem;
  background: rgba(red, green, blue, 0);
  /* text-align: center; */
  margin: 0 auto;
}
.top .top_detail .icon {
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 100%;
  border: 1px solid #075c7e;
  text-align: center;
}
.top .top_detail .icon img {
  width: 1.8rem;
  height: 1.8rem;
}
.top .top_detail .login {
  color: #ffffff;
  font-size: 14px;
  margin-top: 0.1rem;
  text-align: center;
}
/* 我的钱包部分 */
.wallet {
  width: 100%;
  background: #ffffff;
  margin-top: 0.3rem;
}
.wallet .wallet_title {
  width: 100%;
  height: 1.3rem;
  border-bottom: 1px solid #ececec;
  color: #4d4d4d;
  font-size: 18px;
  margin-bottom: 0.2rem;
  line-height: 1.3rem;
}
.wallet .wallet_title .span1 {
  color: #ff7043;
  margin-left: 10%;
}
.wallet table {
  width: 100%;
}
.wallet table tr {
  width: 100%;
  height: 0.7rem;
}
.wallet table tr td {
  width: 33%;
  height: 0.7rem;
  text-align: center;
  line-height: 0.7rem;
  color: #4d4d4d;
  font-size: 20px;
}
.wallet table tr:nth-child(2) td {
  color: #888888;
  font-size: 14px;
}
</style>