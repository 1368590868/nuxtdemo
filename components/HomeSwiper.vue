<template>
    <div class="wrapper">
    <div
      v-swiper:mySwiper="swiperOption"
      v-if="this.swiperList.length"
    >
      <div class="swiper-slide" v-for="item in swiperList" :key="item.id">
        <img :src="item.imgUrl" class="swiper-img" />
      </div>
      <div class="swiper-pagination swiper-pagination-bullets"></div>
    </div>
  </div>
</template>
<script>
export default {
    props:{
        swiperList:Array
    },
    data(){
        return{
        swiperOption: {
          loop: true,
          slidesPerView: 'auto',
          centeredSlides: true
            }
        }
    },
    mounted(){
    }
}
</script>
<style lang="scss" scoped>
.wrapper /deep/ .swiper-pagination-bullet-active{
    background:#fff;
}
.wrapper{
    width:100%;
    height:auto;
    padding-bottom: 0%;
    .swiper-img{
        width:100%;
    }
}
</style>
