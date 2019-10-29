<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icon :iconList="iconList"></home-icon>
    <Content :recommendList="recommendList"></Content>
  </div>
</template>

<script>
// @ is an alias to /src

import HomeHeader from "~/components/HomeHeader";
import HomeSwiper from "~/components/HomeSwiper";
import HomeIcon from "~/components/HomeIcon";
import Content from "~/components/Content";
import axios from "axios";
import { async } from "q";

export default {
  name: "home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcon,
    Content
  },
  data() {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [] //主题内容
    };
  },
  methods: {
    getHomeInfo() {
      return axios.get("../mock/index.json").then(res => {
        console.log(res.data.data.iconList);
        this.swiperList = res.data.data.swiperList;
        this.iconList = res.data.data.iconList;
        this.recommendList = res.data.data.recommendList;
       //要在本页面内使用数据 ，直接return传值给list
       // return {
        //   list : res.data.data
        // }
      });
    }
    // getHomeInfoSuccess(res){
    //   this.swiperList=res.data.data.swiperList
    //   this.iconList = res.data.data.iconList
    //   this.recommendList = res.data.data.recommendList  //获取indexjson数据
    // }
  },
  mounted() {
    this.getHomeInfo();
  }
};
</script>
