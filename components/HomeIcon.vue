<template>
  <div class="wrapper">
    <!-- 走马灯 -->
    <a-carousel >
     <div v-for="(item, index) in pages" :key="index" >
       <div class="icon" @click="icondetail"  >
        <div v-for="icon in item" :key="icon.id" class="icon-img">
           <div > 
               <img class="icon-img-inner" :src="icon.imgUrl"  />
               <p class="icon-desc" @click="icondetail">{{ icon.desc }}</p>
           </div>
        </div>
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
      id:[{
        id:4,
        id:5,
        id:6
      }]
    };
  },
  computed: {
    pages() {
      //6个图标为一页
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
  },
  methods: {
    icondetail(){
      this.$router.push('/iconlist')
    }
  },
};
</script>
<style lang="scss" scoped>

.wrapper {
  width: 100%;
}
.icon {
  width:100%;
  min-height:200px;
  display:grid;
  grid-template-columns: repeat(4,25%);
  grid-template-rows: 50% 50%;
}
.icon-img{
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  
}

.icon-img-inner{
  width:50%;
  height:59.67%;
  display: inline-block;
  margin:0 auto;
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