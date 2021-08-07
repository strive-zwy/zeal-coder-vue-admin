<template>
  <el-row>
    <el-col  :xs="24" :sm="24" :md="24" :lg="5" :xl="5">
      <span id="zeal">zeal-coder</span>
    </el-col>
    <el-col  :xs="24" :sm="24" :md="24" :lg="19" :xl="19">
      <span class="nav-btn">博客</span>
      <span class="nav-btn">作品集</span>
      <span class="nav-btn">关于我</span>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped lang="stylus">

#zeal
  //font-size 2rem
  font-size 30px
  font-family: "PingFang SC",Helvetica,"Microsoft YaHei",STHeiti,Tahoma
  color white
  font-weight bold
  letter-spacing 5px
  line-height 80px
  margin 0 20px 0 0
  text-shadow: 2px 2px 4px #4d4d4d;

.nav-btn
  //font-size 1.5rem
  font-size 22px
  line-height 80px
  color rgba(255, 255, 255, 0.51)
  width 140px
  height 50px
  margin 0 0 0 40px
  border none
  position relative
  top -3px
  border-radius 15px
  text-shadow: 2px 2px 4px #706f6f;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
.nav-btn:hover
  cursor pointer
  top 3px
  color #30cce3
  background: #82beb9;
  background-image: -webkit-linear-gradient(45deg,#30cce3,#82beb9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: hue 5s infinite linear;
  text-shadow: 4px 4px 8px #5e5e5e;
/*---- 动画 ----*/

//颜色渐变
@-webkit-keyframes hue {
  0%,100%{
    -webkit-filter: hue-rotate(0deg);
  }
  50%{
    -webkit-filter: hue-rotate(45deg);
  }
}


</style>
