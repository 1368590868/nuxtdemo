<template>
    <div class="icon-home">
        <!-- 头部搜索栏 -->
        <div class="home-serach">
        <a-icon type="left" style="color: rgba(0,0,0,.45);font-size:.4rem" @click="back" />
         <a-input class="home-input" placeholder="输入城市或景点" v-model="cityName">
             <a-icon type="close" slot="suffix" @click="empty"/>
         </a-input>
         <span class="serach">搜索</span>
         </div>
         <!-- 全部分类 推荐排序 -->
         <icon-detail :icondetail="iconDetail"></icon-detail>
    </div>
</template>

<script>
import axios from 'axios'
import IconDetail from '~/components/IconDetail'
export default {
    components:{
        IconDetail
    },
     data() {
      return {
          //动态传子组件
         iconDetail:[],
        cityName:'景点门票'
      };
    },
    methods: {
        empty(){
            this.cityName = ''
        },
        back(){
            this.$router.push('/')
        },
        getIconDetail(){
            return axios.get("http://127.0.0.1:7300/mock/5d9df3681df5f316cca7d4ea/mock/iconDetail").then(res =>{
                console.log(res.data.data.icondetail);
                this.iconDetail = res.data.data.icondetail
            })
        }
    },
    mounted() {
        this.getIconDetail()
    },
}
</script>

<style lang="scss" scope>
    .home-serach{
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        padding: 5px 0 5px 10px;
        .serach{
            font-size: .4rem;
            display: inline-block;
            width:20%;
            text-align: center;
        }
        .ant-input{
             text-align: center;
             border-radius: 20px 20px;
             background-color: rgba(145, 138, 138, 0.3);
             flex:1;
             margin: 0 5px;
             }
    }
    
    
</style>