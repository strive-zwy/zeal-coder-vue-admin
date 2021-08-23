<template>
  <el-row justify="center">
    <el-col class="hidden-md-and-down"  :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
    </el-col>
    <el-col  :xs="24" :sm="24" :md="24" :lg="14" :xl="14">
      <el-row justify="center">
        <el-col  :xs="22" :sm="22" :md="22" :lg="8" :xl="8">
          <div class="ava">
            <el-image id="avatar" src="http://zwyz.oss-cn-beijing.aliyuncs.com/community/publish/img/1628154242744.png?Expires=1943514235&OSSAccessKeyId=LTAI4GK95AhfKyxui78C1KkS&Signature=%2FMbP68h6DMDxo50O211XS82%2FzjY%3D"></el-image>
          </div>
        </el-col>
        <el-col class="hidden-md-and-down"  :xs="22" :sm="22" :md="22" :lg="24" :xl="24">
          <div class="main-left-h">
            <h1>Welcome to my</h1>
            <h2>webside</h2>
          </div>
        </el-col>
        <el-col class="hidden-lg-and-up"  :xs="22" :sm="22" :md="22" :lg="24" :xl="24">
          <div class="main-left-hs">
            <h1>Welcome to my</h1>
            <h2>webside</h2>
          </div>
        </el-col>
      </el-row>
    </el-col>
    <el-col class="hidden-md-and-down"  :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
      <MainRightIcon></MainRightIcon>
    </el-col>
    <el-col class="hidden-lg-and-up" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
      <MainBottomIcon></MainBottomIcon>
    </el-col>
  </el-row>
</template>

<script>
import MainBottomIcon from "@/components/main/MainBottomIcon";
import MainRightIcon from "@/components/main/MainRightIcon";
export default {
  name: "Main",
  components: {MainRightIcon, MainBottomIcon}
}
</script>

<style scoped lang="stylus">
.ava
  margin 50px 30px 0
  animation beTop 2s cubic-bezier(0.25,0.5,0.75,1) infinite
  transition: all 3s;
  position relative
  top 0
.main-left-h,.main-left-hs
  color #30cce3
  display: flex
  justify-content: center
  align-items: center
  flex-direction: column
  font-family: 'Comic Sans MS', cursive
  perspective: 3000px
.main-left-h,.main-left-hs>h1,h2
  padding: 0
  position: relative
  color: #30cce3
.main-left-h>h1
  font-size: 8em;
  margin 0
  animation: 5s rotate ease-in-out infinite;
.main-left-hs>h1
  font-size: 12rem;
  margin 0
  animation: 5s rotate ease-in-out infinite;
.main-left-h>h2
  font-size: 6rem;
  letter-spacing: -4px;
  margin 0
  animation: 2.5s rotate2 ease-in-out infinite;

.main-left-hs>h2
  font-size: 10rem;
  letter-spacing: -4px;
  margin 0
  animation: 2.5s rotate2 ease-in-out infinite;

.main-left-h>h1::before
.main-left-hs>h1::before
.main-left-h>h1::after
.main-left-hs>h1::after
  content: 'Welcome to my'
.main-left-h>h2::before
.main-left-hs>h2::before
.main-left-h>h2::after
.main-left-hs>h2::after
  content: 'webside'
.main-left-h>h1::before
.main-left-hs>h1::before
.main-left-h>h1::after
.main-left-hs>h1::after
.main-left-h>h2::before
.main-left-hs>h2::before
.main-left-h>h2::after
.main-left-hs>h2::after
  position: absolute
  top: 0
  left: 0
  z-index: -1

.main-left-h>h1::before
  color: #032e5e;
  animation: 5s h1-before ease-in-out infinite;
.main-left-h>h1::after
  color: #038fa4;
  animation: 5s h1-after ease-in-out infinite;
.main-left-h>h2::before
  color: #032e5e;
  animation: 2.5s h2-before ease-in-out infinite;
.main-left-h>h2::after
  color: #038fa4;
  animation: 2.5s h2-after ease-in-out infinite;

.main-left-hs>h1::before
  color: #032e5e;
  animation: 5s hs1-before ease-in-out infinite;
.main-left-hs>h1::after
  color: #038fa4;
  animation: 5s hs1-after ease-in-out infinite;
.main-left-hs>h2::before
  color: #032e5e;
  animation: 2.5s hs2-before ease-in-out infinite;
.main-left-hs>h2::after
  color: #038fa4;
  animation: 2.5s hs2-after ease-in-out infinite;
betop(val)
  top val
@keyframes beTop{
  0%,50%,100% {
    betop(0)
  }
  25% {
    betop(-20px)
  }
  75% {
    betop(-45px)
  }
}
// h1 字体旋转
@keyframes rotate {
  0%, 100% {
    transform: rotate3d(0, 1, 0, -20deg);
  }
  50% {
    transform: rotate3d(0, 1, 0, 20deg);
  }
}
// h2 字体旋转
@keyframes rotate2 {
  0%, 100% {
    transform: rotate3d(1, 0, 0, -20deg);
  }
  50% {
    transform: rotate3d(1, 0, 0, 20deg);
  }
}
// h1 before，after
@keyframes h1-after {
  0%, 100% {
    transform: translate3d(5px, 2px, -5px);
  }
  50% {
    transform: translate3d(-5px, 2px, -5px);
  }
}
@keyframes h1-before {
  0%, 100% {
    transform: translate3d(10px, 4px, -10px);
  }
  50% {
    transform: translate3d(-10px, 4px, -10px);
  }
}
@keyframes h2-after {
  0%, 100% {
    transform: translate3d(0px, 6px, -10px);
  }
  50% {
    transform: translate3d(0px, -3px, -10px);
  }
}
@keyframes h2-before {
  0%, 100% {
    transform: translate3d(0px, 12px, -20px);
  }
  50% {
    transform: translate3d(0px, -6px, -20px);
  }
}
//------------------hs----------------------------
@keyframes hs2-after {
  0%, 100% {
    transform: translate3d(0px, 2px, -4px);
  }
  50% {
    transform: translate3d(0px, -1px, -4px);
  }
}
@keyframes hs2-before {
  0%, 100% {
    transform: translate3d(0px, 4px, -8px);
  }
  50% {
    transform: translate3d(0px, -2px, -8px);
  }
}
@keyframes hs1-after {
  0%, 100% {
    transform: translate3d(3px, 2px, -3px);
  }
  50% {
    transform: translate3d(-3px, 2px, -3px);
  }
}
@keyframes hs1-before {
  0%, 100% {
    transform: translate3d(6px, 4px, -6px);
  }
  50% {
    transform: translate3d(-6px, 4px, -6px);
  }
}
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
