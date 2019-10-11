<template>
<div>
  <a-tabs defaultActiveKey="1" @change="callback">
    <a-tab-pane tab="Tab 1" key="1">
       <!-- 门票列表 -->
      <div class="siteticket-wrap">
        <div class="ticket" v-for="(item,index) in ticket" :key="index">
          <div class="icon-ticket">
            <div class="el-icon-s-ticket"></div>
            <div class="ticket-type">{{item.ticketype}}</div>
          </div>
          <div class="desc">
            <div class="ticket-desc">{{item.desc}}</div>
            <div>
              <span class="price">{{item.price}}</span>
              <span class="price-q">起</span>
            </div>
          </div>
          <div class="desc2">
            <div class="ticket-desc">{{item.desc2}}</div>
            <div>
              <span class="price">{{item.price2}}</span>
              <span class="price-q">起</span>
            </div>
          </div>
          <div class="desc3">{{item.desc3}}</div>
        </div>
      </div>
    </a-tab-pane>
    <a-tab-pane tab="Tab 2" key="2" forceRender>Content of Tab Pane 2</a-tab-pane>
    <a-tab-pane tab="Tab 3" key="3">Content of Tab Pane 3</a-tab-pane>
  </a-tabs>
</div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    callback (key) {
      console.log(key)
    },
  },
}
</script>
<style >
    .tab{
        width:500px;
        height:500px;   
        
    }
</style>