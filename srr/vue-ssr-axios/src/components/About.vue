<template>
  <div class="">
      关于
      <router-link to="/">我的</router-link>
      <div v-for="(t,i) in list" :key="i">t</div>
  </div>
</template>

<script>
export default {
  name: '',
  data() { 
    return {
      list:[
        {name:'dd'},
        {name:'dd2'},
      ]
    }
  }
 }
</script>

<style scoped>

</style>