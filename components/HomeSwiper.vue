<template>
  <div class="wrapper">
    <!-- 走马灯 -->
    <a-carousel autoplay>
      <div class="swiper-slide" v-for="item in swiperList" :key="item.id">
        <img :src="item.imgUrl" />
      </div>
    </a-carousel>
  </div>
</template>
<script>
export default {
  props: {
    swiperList: Array
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        slidesPerView: "auto",
        centeredSlides: true
      }
    };
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>

.swiper-slide img{
  width:100%;
  height: 20%;
}
.wrapper {
  width: 100%;
  height: auto;
  padding-bottom: 0%;
  
}
//走马灯
.ant-carousel /deep/ .slick-slide {
  text-align: center;
  height: 20%;
  background: #fff;
  overflow: hidden;
}

.ant-carousel /deep/ .slick-slide h3 {
  color: #fff;
}
</style>
