<template>
   <div class="header">
       <div class="left" style="color:#fff;margin-left:20px;" @click="goHome">
           <a-icon type="left" />
       </div>
       <div class="title">
           <div class="search">
           <a-icon type="search" />发现你感兴趣的目的地</div>
       </div>
       <div class="right"  style="color:#fff;margin-right:20px;">
           {{city}}
       </div>
   </div>
</template>

<script>
export default {
    data() {
        return {
        city : '搜索'}
    },
    methods:{
        goHome(){
            this.$router.push('/')
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