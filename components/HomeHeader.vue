<template>
   <div class="header">
       <div class="left" style="color:#fff;margin-left:20px;">
           <a-icon type="left" />
       </div>
       <div class="title">
           <div class="search">
           <a-icon type="search" />输入城市/景点/游玩主题</div>
       </div>
       <div class="right"  style="color:#fff;margin-right:20px;">
           {{city}}
           <span @click="citylist">
           <a-icon type="down" /></span>
       </div>
   </div>
</template>

<script>
export default {
    data() {
        return {
        city : '呼和浩特'}
    },
    methods:{
        citylist(){
            this.$router.push('citylist')
        }
    }
}
</script>

<style scoped>
.header{
    background-image: -webkit-linear-gradient(left, rgb(2, 203, 253), rgb(4, 154, 255) 100%);
    width: 100%;
    height: 1.4rem;
    font-size: .42rem;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
}
.title{
    flex:1;
    display: flex;
    justify-content: center;
    align-content: center;
    margin:auto 10px;
}
.search{ 
    width:100%; 
  font-size: 16px;
  padding:0 20px;
  border-radius: 20px 20px;
  background-color: #fff;
}
    
</style>