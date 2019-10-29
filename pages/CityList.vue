<template>
  <div>
    <!-- 返回详情页 -->
    <div  @click="back">
     <a-affix :offsetTop="23">
  </a-affix>
  </div>
    <vue-initial-list :options="options" @click="back" />
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      options:[]
    };
  },
  asyncData() {
    return axios
      .get("http://127.0.0.1:7300/mock/5d9df3681df5f316cca7d4ea/mock/city")
      .then(res => {
        console.log(res.data.data.options);
        return {options : res.data.data.options}
      });
  },
  methods: {
    methods: {
    cb(e) {
      console.log(e);
    }
  },
    back(){
      this.$router.push("/")
    }
  }
};
</script>

<style scoped>
  
</style>