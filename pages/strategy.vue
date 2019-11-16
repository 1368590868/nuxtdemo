<!--
 * @Author: your name
 * @Date: 2019-10-26 14:01:33
 * @LastEditTime: 2019-10-27 14:22:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxtdemo\components\strategy.vue
 -->
<template>
  <div class="app">
    <div class="all">
      <!-- 行程与计划 选项卡 -->
      <table class="plane">
        <tr>
          <td>行程</td>
          <td>计划</td>
        </tr>
      </table>
      <!-- 行程部分 -->
      <div class="route_one">
        <!-- 查看攻略 -->
        <p class="see">
          <span>成都</span>&nbsp;&nbsp;查看攻略&nbsp;&nbsp;
          <span>></span>
        </p>
        <!-- 日期和天气 -->
        <div class="data">
          <div class="data_left">
            <p>
              <span>06月21日</span>
              <span>明天</span>
            </p>
          </div>
          <div class="data_right">
            <p>
              <a-icon type="cloud" />小雨 21℃ ~ 29℃
            </p>
          </div>
        </div>
        <div class="left_line"></div>
        <!-- 查看乘车信息 -->
        <div class="desc">
          <!-- 查看订单 -->
          <div class="see_order">
            <div class="see_order_left">
              <img src="../assets/images/plane.png" />
              <span>北京-香港</span>
            </div>
            <p>
              查看订单
              <a-icon type="right" />
            </p>
          </div>
          <div class="desc_top">
            <!-- 更多 -->
            <div class="desc_see">
              <p>
                香港航空HX337
                <span>06月24日起飞</span>
              </p>
              <p>更多</p>
            </div>
            <!-- 班次 -->
            <div class="classes">
              <ul>
                <li>
                  <ul>
                    <li>北京首都国际机场</li>
                    <li>3h50m</li>
                    <li>香港国际机场</li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li>12:05</li>
                    <li>
                      <img src="../assets/images/plane_white.png" alt />
                    </li>
                    <li>
                      15:55
                      <span>+1天</span>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li>计划起飞</li>
                    <li>正常</li>
                    <li>计划到达</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <!-- 机场选座 -->
          <div class="checkin">
            <p>
              <img src="../assets/images/set.png" alt />王二麻子
            </p>
            <p>机场选座</p>
          </div>
          <div class="line"></div>
          <!-- 退票改签 -->
          <div class="desc_botton">
            <p>···</p>
            <p>退票</p>
            <p>改签</p>
          </div>
        </div>
        <div class="left_line left_line_botton"></div>
        <!-- 行程推荐 -->
        <div class="route">
          <div class="desc_text">
            <p>
              <img src="../assets/images/bulb.png" alt />&nbsp;&nbsp;行程推荐
            </p>
          </div>
          <div class="route_list">
            <ul class="first_ul">
              <li>
                <ul>
                  <li>京东酒店</li>
                  <li>接送机</li>
                  <li>门票</li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>
                    领取￥100红包
                    <img src="../assets/images/hotel.png" alt />
                  </li>
                  <li>
                    晚点免费等待
                    <img src="../assets/images/car.png" alt />
                  </li>
                  <li>免费</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 计划部分 -->
      <div class="plane_one"></div>
    </div>
  </div>
</template>
<style scoped>
.left_line {
  width: 0.06rem;
  height: 0.5rem;
  margin-left: 0.6rem;
  background: #d6d4d4;
}
.left_line_botton {
  height: 0.7rem;
}
* {
  margin: 0;
  padding: 0;
}
.app {
  width: 100%;
  overflow: hidden;
  background-color: #e4e4e4;
}
/* 行程与计划 */
.all {
  width: 100%;
  background: #ffffff;
  padding-top: 0.2rem;
  margin-bottom: 63px;
}
.all .plane {
  width: 95%;
  margin: 0 auto;
}
.all .plane tr {
  width: 100%;
  height: 1rem;
}
.all .plane tr td {
  font-size: 22px;
  text-align: center;
  line-height: 1rem;
  color: black;
  border: 1px solid rgb(170, 168, 168);
}
.all .plane tr td:nth-child(1) {
  color: white;
  border: none;
  background-color: #32ccfe;
}
/* 计划部分 */
.route_one {
  width: 100%;
  overflow: hidden;
  /* display: none; */
}
/* 查看攻略 */
.all .see {
  width: 95%;
  margin: 0.5rem auto 0.2rem auto;
  font-size: 14px;
  color: #272727;
}
.all .see span:nth-child(1) {
  font-size: 24px;
  font-weight: bolder;
}
.all .see span:nth-child(2) {
  font-size: 18px;
  color: #838080;
}

/* 日期和天气 */
.data {
  width: 95%;
  margin: 0 auto;
  overflow: hidden;
}
.data .data_left {
  width: 40%;
  height: 0.8rem;
  float: left;
  font-size: 12px;
  background: black;
  color: #ffffff;
  overflow: hidden;
  border-radius: 1rem;
}
.data .data_left p {
  text-align: center;
  line-height: 0.8rem;
}
.data .data_left p span:nth-child(1) {
  font-size: 16px;
  font-weight: bolder;
}
.data .data_left p span:nth-child(2) {
  color: #d3d1d1;
}
.data .data_right {
  width: 40%;
  height: 0.8rem;
  font-size: 14px;
  color: #797979;
  float: right;
}
.data .data_right {
  text-align: right;
  line-height: 0.8rem;
}

/* 查看订单 */
.see_order {
  width: 90%;
  overflow: hidden;
  margin: 0.2rem auto;
}
.see_order_left {
  width: 38%;
  height: 1rem;
  float: left;
  color: black;
  font-size: 18px;
  font-weight: bolder;
}
.see_order_left img {
  height: 0.8rem;
  line-height: 1rem;
}
.see_order p {
  font-size: 16px;
  color: #7a7a7a;
  float: right;
}

/* 查看乘车信息 */
.desc {
  width: 95%;
  overflow: hidden;
  border-radius: 0.2rem;
  box-shadow: 0px 10px 5px #dbdbdb;
  margin: 0 auto;
}
.desc_top {
  width: 100%;
  overflow: hidden;
  background-color: #fefaee;
}
.desc .desc_see {
  width: 92%;
  height: 0.5rem;
  margin: 0.5rem auto;
  overflow: hidden;
}
.desc .desc_see p:nth-child(1) {
  width: 61%;
  float: left;
  line-height: 0.5rem;
  font-size: 16px;
  color: #383737;
}
.desc .desc_see span {
  font-size: 12px;
  color: #979595;
}
.desc .desc_see p:nth-child(2) {
  width: 10%;
  float: right;
  font-size: 12px;
  color: #fdc407;
  line-height: 0.5rem;
}
/* 班次 */
.classes {
  width: 93%;
  height: 3rem;
  color: white;
  font-size: 16px;
  overflow: hidden;
  margin: 0.5rem auto;
  border-radius: 0.2rem;
  background: #26b124;
}
.classes ul {
  width: 95%;
  overflow: hidden;
  margin: 0.2rem auto;
}
.classes ul li {
  width: 100%;
  height: 0.8rem;
  overflow: hidden;
}
.classes ul li ul {
  width: 100%;
  overflow: hidden;
}
.classes ul li ul li {
  width: 33%;
  float: left;
  overflow: hidden;
  line-height: 0.6rem;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.classes ul li ul li:nth-child(1) {
  text-align: left;
}
.classes ul li:nth-child(1) ul li:nth-child(2) {
  color: #d6d4d4;
}
.classes ul li ul li:nth-child(2) {
  text-align: center;
}
.classes ul li:nth-child(2) ul li {
  font-size: 22px;
}
.classes ul li:nth-child(2) ul li span {
  font-size: 12px;
  color: #383737;
}
.classes ul li ul li:nth-child(3) {
  text-align: right;
}
.classes ul li:nth-child(3) ul li {
  font-size: 12px;
  color: #d6d4d4;
}
.classes ul li:nth-child(3) ul li:nth-child(2) {
  color: #ebebeb;
}
.classes ul li ul li img {
  height: 0.5rem;
}

/* 机场选座 */
.checkin {
  width: 95%;
  font-size: 14px;
  margin: 0.2rem auto;
}
.checkin p img {
  height: 0.8rem;
}
.checkin p:nth-child(1) {
  float: left;
}
.checkin p:nth-child(2) {
  float: right;
}
.line {
  width: 95%;
  height: 0.03rem;
  margin: 1.4rem auto 0 auto;
  background-color: #e9e8e8;
}
/* 改签退票 */
.desc_botton {
  width: 95%;
  overflow: hidden;
  margin: 0.2rem auto 0.2rem auto;
}
.desc_botton p {
  width: 2rem;
  height: 0.8rem;
  overflow: hidden;
  text-align: center;
  line-height: 0.8rem;
  border-radius: 0.5rem;
}
.desc_botton p:nth-child(1) {
  float: left;
  width: 1.2rem;
  height: 0.8rem;
  font-size: 22px;
  line-height: 0.8rem;
  background-color: #d3d1d1;
}
.desc_botton p:nth-child(2) {
  float: right;
  font-size: 14px;
  color: #febc45;
  border: 1px solid #febc45;
}
.desc_botton p:nth-child(3) {
  float: right;
  font-size: 14px;
  color: #febc45;
  margin-right: 0.2rem;
  border: 1px solid #febc45;
}

/* 行程推荐 */
.route {
  width: 95%;
  font-size: 16px;
  overflow: hidden;
  margin: 0 auto 1.5rem auto;
}
.route .desc_text {
  width: 95%;
  overflow: hidden;
}
.route .desc_text p {
  font-weight: bolder;
  color: #838080;
}
.route .desc_text p img {
  height: 0.8rem;
}
.route .route_list {
  width: 95%;
  font-size: 16px;
  overflow: hidden;
  margin: 0 auto;
}
.route .route_list .first_ul {
  width: 95%;
  margin: 0.2rem auto;
  overflow: hidden;
}
.route .route_list .first_ul li {
  width: 100%;
  overflow: hidden;
}
.route .route_list .first_ul li ul li {
  float: left;
  width: 42.5%;
}
.route .route_list .first_ul li:nth-child(1) ul li {
  font-weight: bolder;
}
.route .route_list .first_ul li:nth-child(2) ul li {
  font-size: 12px;
}
.route .route_list .first_ul li ul li:nth-child(3) {
  width: 15%;
}
.route .route_list .first_ul li ul li img {
  height: 0.8rem;
}
</style>
