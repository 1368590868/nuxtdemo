<template>
  <div class="container">
    <div>
      
       <nuxt-link to="/user/one">关于</nuxt-link>
      <logo  />
      <h1 class="title" @click="hello">
        nuxtdemo
      </h1>
      <h2 class="subtitle">
        testdemo
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
      <test-swiper></test-swiper>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import TestSwiper from '~/components/TestSwiper.vue'
export default {
  components: {
    TestSwiper,
    Logo
    //layout: 'blog'     //布局组件 可以用于错误页面
  },
  methods:{
    hello(){
      console.log(this.$router);
      this.$router.push('/user/');
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
