<template>
  <div class="">
      关于
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