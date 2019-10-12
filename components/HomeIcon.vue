<template>
  <div class="wrapper">
    <!-- 走马灯 -->
    <a-carousel >
     <div v-for="(item, index) in pages" :key="index">
        <div class="icon" v-for="icon in item" :key="icon.id">
          <div class="icon-img">
            <img class="icon-img-inner" :src="icon.imgUrl" />
          </div>
          <p class="icon-desc">{{ icon.desc }}</p>
        </div>
      </div>
    </a-carousel>
    <!-- <div v-swiper:mySwiper="swiperOption">
      <div v-for="(item, index) in pages" :key="index">
        <div class="icon" v-for="icon in item" :key="icon.id">
          <div class="icon-img">
            <img class="icon-img-inner" :src="icon.imgUrl" />
          </div>
          <p class="icon-desc">{{ icon.desc }}</p>
        </div>
      </div>
      <div class="swiper-pagination" slot="pagination"></div>
    </div>-->
  </div>
</template>
<script>
export default {
  props: {
    iconList: Array
  },
  data() {
    return {
      swiperOption: {
        
      }
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    }
  }
};
</script>
<style lang="scss" scoped>

.wrapper {
  width: 100%;
  margin-top: 0.1rem;
}
.icon {
  float: left;
  width: 25%;
  height: 0;
  padding-bottom: 25%;
  position: relative;
  .icon-img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0.5rem;
    .icon-img-inner {
      height: 100%;
    }
  }
  .icon-desc {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 0.5rem;
    line-height: 0.5rem;
    text-align: center;
  }
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