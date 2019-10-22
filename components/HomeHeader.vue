<template>
   <div class="header">
       <div class="left" style="color:#fff;margin-left:5px;">
           <a-icon type="left-square" />
       </div>
       <div class="title">
           <div class="search">
           <a-icon type="search" />输入城市/景点/游玩主题</div>
       </div>
       <div class="right"  style="color:#fff;margin-right:5px;">
           {{city}}
           <span @click="citylist">
           <a-icon type="down-square" /></span>
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
     background-color: rgb(69, 142, 190);
    width: 100%;
    font-size: .52rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content:baseline; 
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
  background-color: #fff;
}
    
</style>