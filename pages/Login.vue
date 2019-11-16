<!--
 * @Author: your name
 * @Date: 2019-10-23 14:54:51
 * @LastEditTime: 2019-10-30 09:25:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxtdemo\components\Login.vue
 -->
<template>
  <div class="app">
    <div class="top">
      <div class="top_detail" @click="login_register">
        <p class="icon">
          <img src="@/assets/images/person.png" alt />
        </p>
        <p class="login">鲸游</p>
      </div>
    </div>
    <div class="info">
      <label>
        <a-icon type="user" />
        <input type="text" name="username" placeholder="输入手机号/账号/用户名" />
      </label>
      <label>
        <a-icon type="eye" />
        <input type="password" name="password" placeholder="输入密码" />
      </label>
      <p class="span">
        <span>忘记密码</span>
        <span>还没有账号？注册</span>
      </p>
    </div>
    <div class="clear"></div>
    <div class="login_text">
      <p>登 录</p>
    </div>
    <div class="line">
      <p class="line_p1"></p>
      <p class="line_p2">第三方登录</p>
      <p class="line_p3"></p>
    </div>
    <div class="third">
      <div class="qq icon">
        <img src="../assets/images/qq.png" alt />
      </div>
      <div class="wx icon">
        <img src="../assets/images/wx.png" alt />
      </div>
      <div class="wb icon">
        <img src="../assets/images/wb.png" alt />
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.clear {
  clear: both;
}
p {
  margin-bottom: 0;
}
.app {
  width: 100%;
}
/* 图标 */
.third {
  width: 70%;
  margin: 0.2rem auto 63px auto;
  display: flex;
}
.third .icon {
  width: 33.3%;
  height: 2rem;
  overflow: hidden;
}
.third .icon:nth-child(1) img {
  height: 1rem;
}
.third .icon:nth-child(2) img {
  height: 1rem;
  margin-left: 0.5rem;
}
.third .wb img {
  height: 1rem;
  margin-left: 1.2rem;
}

/* 第三方登录 */
.line {
  width: 70%;
  font-size: 10px;
  color: #0698fa;
  margin: 1rem auto 0.3rem auto;
  overflow: hidden;
}
.line .line_p1 {
  width: 34%;
  float: left;
  height: 0.05rem;
  margin-top: 0.17rem;
  background: linear-gradient(
    to right,
    #ffffff 10%,
    #a1c9f7 25%,
    #408bfc 60%,
    #116ffd 100%
  );
}
.line .line_p2 {
  width: 21%;
  float: left;
  margin: 0 0.3rem;
}
.line .line_p3 {
  width: 35.5%;
  height: 0.05rem;
  float: left;
  margin-top: 0.17rem;
  background: linear-gradient(
    to left,
    #ffffff 10%,
    #a1c9f7 25%,
    #408bfc 60%,
    #116ffd 100%
  );
}
/* 登录框 */
.login_text {
  width: 70%;
  height: 1.2rem;
  overflow: hidden;
  border-radius: 1rem;
  background: #0698fa;
  background: linear-gradient(to right, #0294f5 40%, #78bbfa 100%);
  margin: 0.5rem auto;
}
.login_text p {
  font-size: 18px;
  color: #ffffff;
  text-align: center;
  line-height: 1.2rem;
}

/* 输入框 */
.info {
  width: 70%;
  overflow: hidden;
  text-align: center;
  margin: 0.5rem auto 0.1rem auto;
}
.info label {
  color: #0698fa;
  width: 65%;
  height: 2rem;
  font-size: 18px;
}
.info label input {
  width: 90%;
  border: none;
  outline: none;
  font-size: 12px;
  color: #7a7a7a;
  border-bottom: 1px solid #0698fa;
}
.info .span {
  width: 100%;
  margin-top: 0.2rem;
  color: black;
  font-size: 10px;
}
.info .span span:nth-child(1) {
  float: left;
  display: block;
  text-align: left;
}
.info .span span:nth-child(2) {
  float: right;
  display: block;
  text-align: right;
}

/* 登录注册顶部 */
.top {
  width: 100%;
  height: 8rem;
  background: url("../assets/images/up_bg.png") no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.top .top_detail {
  width: 1.8rem;
  height: 2.5rem;
}
.top .top_detail .icon {
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 100%;
  text-align: center;
  overflow: hidden;
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
</style>