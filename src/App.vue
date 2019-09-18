<template>
  <div id="app">
    <headWarp></headWarp>
    <router-view/>
    <footWarp></footWarp>
    <to-top></to-top>
  </div>
</template>

<script>
import headWarp from './components/commons/headWarp';
import footWarp from './components/commons/footWarp';
import toTop from './components/commons/toTop';

export default {
  name: 'App',
  components:{
    headWarp,footWarp,toTop
  }
}
</script>

<style lang='less'>
  body{
    margin: 0;
    background-color: #f6f6f6;
    overflow-x: hidden;
  }
</style>
