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
  mounted() {
    this.listenerFunction();
  },
  methods:{
    listenerFunction(e) {
      document.addEventListener('scroll', this.handleScroll, true);
    },
    handleScroll () {
      var reg = /\((.*?)\)/gi;
      var reg1 = /[0-9]*[.][0-9]/gi;
      var sc = document.getElementsByClassName("el-scrollbar__thumb")[1].style.transform.toString()
      var y = sc.match(reg)[0]
      var s = y.match(reg1)
      if (s > 15){
        document.getElementsByClassName("header")[0].style ='background-image: linear-gradient(135deg, #1e2c6b 0%, #2f1649 100%);box-shadow:  0 2px 5px 0 #0c0c0c, 0 2px 10px 0 #0c0c0;cheight:auto!important;'
      }else if (s < 5){
        document.getElementsByClassName("header")[0].style ='box-shadow:  0 2px 5px 0 #0c0c0c, 0 2px 10px 0 #0c0c0c;height:auto!important;'
      }
      document.getElementById("affix").hidden = s <= 120;

    }
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.windowScroll)
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
