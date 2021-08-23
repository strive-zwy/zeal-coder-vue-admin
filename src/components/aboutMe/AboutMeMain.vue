<template>
  <div class="ava">
    <el-image id="avatar" src="http://zwyz.oss-cn-beijing.aliyuncs.com/community/publish/img/1628154242744.png?Expires=1943514235&OSSAccessKeyId=LTAI4GK95AhfKyxui78C1KkS&Signature=%2FMbP68h6DMDxo50O211XS82%2FzjY%3D"></el-image>
  </div>
  <el-row justify="center">
    <el-col id="aboutMe" :xs="23" :sm="23" :md="23" :lg="16" :xl="16">
      <p id="name">张婉玉</p>
      <p id="det">Java后端/上学中...</p>
      <el-row justify="center">
        <el-col span="3">
          <Icon></Icon>
        </el-col>
      </el-row>
      <el-row justify="left">
        <h1>基本信息😜</h1>
        <el-divider class=" ider"></el-divider>
        <el-col :xs="20" :sm="20" :md="20" :lg="20" :xl="20" class="blok">
          <Me></Me>
        </el-col>
        <h1>我的技能树😎</h1>
        <el-divider class=" ider"></el-divider>
        <el-col :xs="20" :sm="20" :md="20" :lg="20" :xl="20" class="blok">
          <Skill></Skill>
        </el-col>
<!--        <el-divider class="ider"></el-divider>
        <el-col :xs="20" :sm="20" :md="20" :lg="10" :xl="10">
          <h1>评论</h1>
          <div></div>
        </el-col>-->
      </el-row>

    </el-col>
  </el-row>
</template>

<script>
import Skill from "./Skill";
import Me from "./Me";
import MainBottomIcon from "../main/MainBottomIcon";
import 'echarts-gl';
import Icon from "@/components/aboutMe/Icon";

export default {
  name: "AboutMeMain",
  components: {Icon, MainBottomIcon, Me, Skill},
  data () {
    return {
        testData: [
          {value: 335, name: 'Java'},
          {value: 310, name: 'Python'},
          {value: 274, name: 'HTML'},
          {value: 235, name: 'Vue3.0'},
          {value: 400, name: 'Android'}
        ],
    }
  },
  mounted() {

  },
  methods: {
  }


}
</script>

<style scoped lang="stylus">
#aboutMe
  background-color rgba(255, 255, 255, 0.95)
  border-radius 10px
  box-shadow:  10px 10px 14px #a4a4a4,-5px 0 5px #dad8d8
  margin 20px
  padding-top 100px
  position relative
  font-family -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"

.blok
  margin 10px 0 50px 0
h1
  letter-spacing 5px
  margin-left 60px
.ava
  width 200px
  height 200px
  margin  30px auto
  position relative
  z-index 10
  transform translate3d(0, 145px, 0)
.ider
  width 96%
  margin 5px auto
  //box-shadow 1px 1px 1px rgba(232, 216, 248, 0.53);
  border-radius 2px
#name
  font-size 28px
  font-weight bold
  text-align center
  color #5d5b5b
#det
  font-size 16px
  font-weight 2px
  text-align center
</style>
