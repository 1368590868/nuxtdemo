<template>
  <div class="siteticket-wrap">
    <div class="ticket" v-for="(item,index) in ticket" :key="index">
      <div class="ticket-type">{{item.ticketype}}</div>
      <div class="desc">
        <div class="ticket-desc">{{item.desc}}</div>
        <div ><span class="price">{{item.price}}</span><span class="price-q">起</span></div>
      </div>
      <div class="desc2">
        <div class="ticket-desc">{{item.desc2}}</div>
        <div><span class="price">{{item.price2}}</span><span class="price-q">起</span></div>
      </div>
      <div class="desc3">{{item.desc3}}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    ticket: {
      type: Array
    }
  }
};
</script>
<style >
    .siteticket-wrap{
        background-color: rgba(0,0,0,0.1);
    }
    .ticket{
       background-color: #fff;
       margin-top: 10px;
        display: flex;
        flex-flow: column wrap;
    }
    .price{
        font-size: 1.2rem;
        color:#ff8300
    }
    .price-q{
        font-size: 11px;
    }
    .desc,.desc2{
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        margin-top: 20px;
    }
   .desc3{
       display: flex;
       justify-content: center;
       margin-top: 20px;
   }
  
</style>
