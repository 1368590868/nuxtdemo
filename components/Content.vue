<template>
<div class="c-content">
    <div class="title">
        <a-icon class="title-img" type="fire"/><span>热门推荐</span>
    </div>
    <div>
        <ul class="list">
            <li class="list-item" v-for="item in recommendList" :key="item.id">
                <img class="content-img" :src="item.imgUrl" @click="navToDetail" />
                <div class="desc1">
                  <div class="name">{{item.title}}</div>
                  <div class="desc1">{{item.desc}}</div>
                  <div class="price">¥60起</div>
                </div>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
    props: {
        recommendList: Array
    },
    created(){
     
    },
    mounted(){
       console.log(this.recommendList);
    },
    methods: {
        navToDetail() {
            /*  console.log(this.$router)
             console.log(this.$route) */
            this.$router.push('detail')
        }
    }
}
</script>

<style lang="scss" scoped>
.title{
  margin-left: .3rem;
}
.title span{
  font-size: .5rem;
  line-height: .44rem;
  color: black;
}
.title-img{
  font-size: .55rem;
  color: #ff9616;
}
.list{
  padding: 24px;
}
.list-item{
  display: flex;
  flex-flow:row nowrap;
  justify-content:flex-start;
  align-items: center;
}
.content-img{
  width: 120px;
  height: 90px;
  margin-right: 10px;
}
.desc1{
  line-height: 1.5;
  font-size: 18px;
}
.name{
  font-size: 16px;
  font-weight: 100;
  color:rgba(0,0,0,0.8)
}
.price{
  color:#ff9616;
  font-size: 16px;
  font-weight: bold;
}
</style>
