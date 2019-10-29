<template>
  <div>
    <a-tabs  defaultActiveKey="1" @change="callback">
      <!-- 门票列表 -->
      <a-tab-pane tab="门票列表" key="门票列表">
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
      <!-- 景区服务 -->
      <a-tab-pane tab="景区服务" key="2" forceRender>
        <div class="siteticket-wrap">
          <div class="ticket" v-for="(item,index) in landscape" :key="index">
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
      <!-- 一日游 -->
      <a-tab-pane tab="一日游" key="3">
        <div class="siteticket-wrap">
          <div class="ticket" v-for="(item,index) in day" :key="index">
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
      <!-- 热销组合 -->
      <a-tab-pane tab="热销组合" key="4">
        <div class="siteticket-wrap">
          <div class="ticket" v-for="(item,index) in day" :key="index">
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
    </a-tabs>
  </div>
</template>
<script>
export default {
  scrollToTop: true,
  props: {
    ticket: {
      type: Array
    },
    landscape:{
      type:Array
    },
    day:Array
  },
  data() {
    return {
      activeName: "first"
    };
  },
  methods: {
    callback(key) {
      console.log(key);
      console.log(this.landscape)
    }
  }
};
</script>
<style lang="scss" scope>
.ant-tabs-nav div{
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-content: center;
}
.ant-tabs-nav-container{
  font-size: 18px;
}
.ant-tabs-nav .ant-tabs-tab{
  margin:0
}
.el-icon-s-ticket{
  color: #00bcd4;
}
.siteticket-wrap {
  background-color: rgba(0, 0, 0, 0.1);
}
.ticket {
  background-color: #fff;
  margin-top: 10px;
  display: flex;
  flex-flow: column wrap;
  padding: 24px 0;
}
.ticket-type {
  margin-left: 15px;
}

.icon-ticket {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-content: center;
  padding-left: 10px;
  line-height: 15px;
}
.el-icon-s-ticket {
  width: 0.36rem;
  height: 0.36rem;
}

.price {
  font-size: .5rem;
  color: #ff8300;
}
.ant-tabs{
  font-size: 18px;
}
.price-q {
  font-size: 11px;
}
.desc,
.desc2 {
  display: flex;
  flex-flow: row nowrap;
  justify-content:space-between;
  margin-top: 20px;
  padding: 10px 20px;
  overflow: hidden;
}
.desc3 {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>
