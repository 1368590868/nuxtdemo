<template>
  <div class="container">
    
    <!-- <template v-for="(item,index) in list">
      <img :src="item.image" alt :key="index" />
    </template> -->
    <!-- <div>
      <nuxt-link to="/user/one">关于</nuxt-link>
      <logo />
      <h1 class="title" @click="hello">nuxtdemo</h1>
      <h2 class="subtitle">testdemo</h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a>
      </div> -->
      <!-- <test-swiper></test-swiper> -->
      <!-- <div class="el-icon-s-ticket"></div> -->
      <!-- <Tabs></Tabs> -->
      <!-- <a-icon type="plus-circle" />
      <a-button type="primary">Primary</a-button>
    </div> -->
    <!-- 走马灯 -->
    
    <a-carousel autoplay>
    <div v-for="(list,index) in list" :key="index">
  <img :src="list.image" ></div>
  </a-carousel>
  <!-- <div v-for="(list,index) in list" :key="index">
   <img :src="list.image" ></div> -->
  </div> 

</template>

<script>
import Logo from "~/components/Logo";
import TestSwiper from "~/components/TestSwiper";
import Tabs from "~/components/Tabs.vue"
import axios from "axios";
export default {
  components: {
    TestSwiper,
    Logo,
    Tabs
    //layout: 'blog'     //布局组件 可以用于错误页面
  },
  asyncData() {
    return axios
      .get("http://127.0.0.1:7300/mock/5d9df3681df5f316cca7d4ea/mock/")
      .then(res => {
        console.log(res.data.data.list);
        return { list: res.data.data.list };
      });
  },
  methods: {
    hello() {
      console.log(this.$router);
      this.$router.push("/user/");
    },
    onChange (a, b, c) {
      console.log(a, b, c)
    },
  }
};
</script>

<style lang="scss" scoped>


.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
.el-icon-s-ticket{
  color:blue;
}

/* For demo */
.zmd{
  width: 500px;
}
.ant-carousel  /deep/ .slick-slide {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel  /deep/  .slick-slide h3 {
  color: #fff;
}

</style>
