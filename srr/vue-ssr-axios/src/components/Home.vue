<template>
  <div class="">
      首页

      <div v-for="(item,i) in homeinfo" :key="i">{{item.name}}</div>
      <div v-text="homeinfo">11</div>
      <router-link to="/test">测试页面</router-link>
      <router-link to="/about">关于</router-link>
  </div>
</template>

<script>
export default {
  name: '',
  data() { 
    return {}
  },
  mounted(){
    console.log('mounted',this.homeinfo)
  },
  computed:{
    homeinfo(){
       console.log('computed-typeof', typeof this.$store.state.homeinfo)
      console.log('computed',this.$store.state.homeinfo)
      return this.$store.state.homeinfo
    }
  },
  serverRequest(store){
    return store.dispatch('getHomeInfo')
  }
 }
</script>

<style scoped>

</style>