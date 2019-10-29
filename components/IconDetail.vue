<template>
  <div class="icon-detail">
    <div class="all-classify">
      <span  @click="showDrawer">全部分类<a-icon type="down" /></span>
      <span  @click="showDrawer">推荐排序<a-icon type="down" /></span>
    </div>
    <!-- 图片内容详情 -->
    <div class="content-detail" v-for="item in icondetail" :key="item.id">
      <div class="content-top">
      <img :src="item.imgUrl">
        <div class="content-top-desc">
      <span style="color:black">{{ item.title }}</span>
      <div class="content-top-star">
      <!-- 评分星星 -->
        <sapn class="star">
          <a-icon type="star" theme="filled" /><a-icon type="star" theme="filled" /><a-icon type="star" theme="filled" /><a-icon type="star" theme="filled" /><a-icon type="star" theme="filled" />
        </sapn>
        <!-- 评论 -->
        <span class="comment">{{ item.comment }}评论</span>
      </div>
      <span class="price"><em>{{item.price}}</em> <span style="font-size:.3rem"> 起</span></span>
       </div>
      </div>
      <!-- 购票类型 -->
      <div class="content-up-desc">
        <div class="content-row-desc">
        <span>{{item.desc}}</span> <span class="content-up-price"><em>{{item.price2}}</em></span>
        </div>
        <div class="content-row-desc">
        <span>{{item.desc2}}</span><span class="content-up-price"><em>{{item.price}}</em></span>
        </div>
      </div>
    </div>

    <!-- 分类排序弹出框 -->
    <a-drawer
      title="全部分类"
      placement="bottom"
      :closable="false"
      @close="onClose"
      :visible="visible"
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-drawer>
  </div>
</template>
<script>
  export default {
    props:{
      icondetail:Array
    },
    data() {
      return {
        visible: false,
      };
    },
    methods: {
      showDrawer() {
        this.visible = true;
      },
      onClose() {
        this.visible = false;
      },
     
    },
  };
</script>

<style lang="scss" scope>
   .all-classify{
    font-size: .4rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    border-top:1px solid rgba(0,0,0,.3);
    border-bottom:1px solid rgba(0,0,0,.3);
   }
   .content-detail{
     font-size: .4rem;
     margin:10px;
     border-bottom: 3px solid rgba(107, 104, 104,.3); 
     .content-top{
       display: flex;
       flex-flow: row nowrap;
        .star{
           color:rgb(224, 184, 73);
           
     }
        .content-top-desc{
          display: flex;
          flex-flow: column nowrap;
          justify-content: space-around;
          margin-left:30px;
        }
        .content-top-star{
          display: flex;
          flex-flow: row;
          font-size: .3rem;
        }
    }
    em{
          font-style: normal;
          color:#ff8300;
          font-size: .5rem;
        }
     .content-up-desc{
       height:1.8rem;
       display: flex;
       flex-flow: column nowrap;
       justify-content: space-evenly;
       .content-row-desc{
         display: flex;
         justify-content: space-between;
       }
     }
   }
</style>