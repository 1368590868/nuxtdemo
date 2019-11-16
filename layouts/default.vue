<template>
  <div>
    <nuxt />
    <footer>
      <!-- <div @click="goHome" class="ft-icon-desc">
      <a-Icon type="home" class="ft-img" :style="color"/>
      <span class="ft-desc">首页</span></div>-->

      <!-- <div @click="goFind" class="ft-icon-desc">
      <a-Icon type="eye" class="ft-img" style="font-size:32px" :style="color"/>
      <span class="ft-desc">发现</span></div>

      <div @click="goWalk" class="ft-icon-desc">
      <a-Icon type="project" class="ft-img" :style="color"/>
      <span class="ft-desc">攻略</span></div>

      <div @click="goJourney" class="ft-icon-desc">
      <a-Icon type="car" class="ft-img" :style="color"/> 
      <span class="ft-desc">行程</span></div>

      <div @click="goMy" class="ft-icon-desc">
      <a-Icon type="user" class="ft-img" :style="color"/>
      <span class="ft-desc">我的</span></div>-->
      <!-- footer ant -->
      <a-menu v-model="current" mode="horizontal">
        <a-menu-item key="0" class="ft-icon-desc" @click="goHome">
          <a-Icon type="home" class="ft-img" />
          <span class="ft-desc">首页</span>
        </a-menu-item>
        <a-menu-item key="1" class="ft-icon-desc" @click="goFound">
          <a-Icon type="eye" class="ft-img" style="font-size:32px" />
          <span class="ft-desc">发现</span>
        </a-menu-item>
        <a-menu-item key="2" class="ft-icon-desc" >
          <a-Icon type="project" class="ft-img" />
          <span class="ft-desc">攻略</span>
        </a-menu-item>
        <a-menu-item key="3" class="ft-icon-desc" @click="goStrategy">
          <a-Icon type="car" class="ft-img" />
          <span class="ft-desc">行程</span>
        </a-menu-item>
        <a-menu-item key="4" class="ft-icon-desc" @click="goMy">
          <a-Icon type="user" class="ft-img" />
          <span class="ft-desc">我的</span>
        </a-menu-item>
      </a-menu>
      <!-- vue-footer -->
      <!-- <div v-for="list in ftlist"
           :key="list.id"
           class="ft-icon-desc"
           @click="go(list.id)"
           >
        <a-icon :type="list.type" class="ft-img"  :style="color" ref="ftcolor"/>
        <span class="ft-desc">{{list.desc}}</span>
      </div>-->
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      current: ["0"],
      i: 0,
      color: {},
      ftlist: [
        { id: "0", type: "home", desc: "首页" },
        { id: "1", type: "eye", desc: "发现" },
        { id: "2", type: "project", desc: "攻略" },
        { id: "3", type: "car", desc: "行程" },
        { id: "4", type: "user", desc: "我的" }
      ]
    };
  },
  mounted() {},
  methods: {
    goHome(){
      this.$router.push('/')
    },
    goFound(){
      this.$router.push('/found')
    },
      goMy(){
        this.$router.push('/my')
      },
      goStrategy(){
        this.$router.push('/strategy')
      }
  }
};
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.ant-menu {
  width: 100%;
  height: 1.5rem;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 0.4rem;
  background-color:aliceblue;
}
.ft-desc {
  font-size: .4rem;
}
.ft-icon-desc .ft-img {
  font-size: .7rem;
  color: black;
}
.ant-menu-horizontal > .ant-menu-item, .ant-menu-horizontal > .ant-menu-submenu{
  height: 1.5rem;
  width: 100%;
  display:flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
}

</style>
