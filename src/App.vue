<template>
  <transition mode='out-in'>
    <router-view ></router-view>
  </transition>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      transitionName:''
    }
  },
  watch: {//使用watch 监听$router的变化
    $route(to, from) {
      console.log(to.meta.index)
      console.log(from.meta.index)
      //如果to索引大于from索引,判断为前进状态,反之则为后退状态
      /*if(to.meta.index > from.meta.index){
        //设置动画名称
        this.transitionName = 'right';
      }else{
        this.transitionName = 'left';
      }*/
    }
  }
}
</script>
<style lang="stylus">
body,html
  height 100%
  margin 0
#app
  height 100%

</style>
