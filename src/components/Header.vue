<template>
  <el-row>
    <el-col  :xs="24" :sm="24" :md="24" :lg="5" :xl="5">
      <RouterLink to="/">
        <span id="zeal">zeal-coder</span>
      </RouterLink>
    </el-col>
    <el-col  :xs="24" :sm="24" :md="24" :lg="14" :xl="14">
      <RouterLink :to="{name:'Blog',params:{id:666,type:2}}">
        <span :class="{navBtn:navBtn,navBtnAboutMe:navBtnAboutMe,isPick:isPickA}">博客</span>
      </RouterLink>
      <el-dropdown>
        <span class="el-dropdown-link" :class="{navBtn:navBtn,navBtnAboutMe:navBtnAboutMe,isPick:isPickB}">
        后花园  <caret-bottom style="width: 1em; height: 1em; "/>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>
              <RouterLink to="/message">
                <span >留言板</span>
              </RouterLink>
            </el-dropdown-item>
            <el-dropdown-item>作品集</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <RouterLink to="/aboutMe">
        <span :class="{navBtn:navBtn,navBtnAboutMe:navBtnAboutMe,isPick:isPickC}">关于我</span>
      </RouterLink>
    </el-col>
    <el-col  :xs="24" :sm="24" :md="24" :lg="5" :xl="5">
    </el-col>
  </el-row>
</template>

<script>
import { CaretBottom } from '@element-plus/icons'
export default {
  name: "Header",
  components: {
    CaretBottom
  },
  data () {
    return {
      isPickB: false,
      navBtn : true,
    }
  },
  props:['navBtnAboutMe','isPickC','isPickA'],
}
</script>

<style scoped lang="stylus">
a
  text-decoration none
#zeal
  //font-size 2rem
  font-size 30px
  font-family: "PingFang SC",Helvetica,"Microsoft YaHei",STHeiti,Tahoma
  color white
  font-weight bold
  letter-spacing 5px
  line-height 60px
  margin 0 20px 0 0
  text-shadow: 2px 2px 4px #4d4d4d;
.navBtn
  //font-size 1.5rem
  font-size 18px
  line-height 60px
  color rgba(255, 255, 255, 0.51)
  width 140px
  height 50px
  margin 0 0 0 40px
  border none
  position relative
  top -3px
  border-radius 15px
  text-shadow: 2px 2px 4px #706f6f;
.navBtn:hover
  cursor pointer
  top 3px
  color #30cce3
  background: #82beb9;
  background-image: -webkit-linear-gradient(45deg,#30cce3,#82beb9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: hue 5s infinite linear;
  text-shadow: 4px 4px 8px #5e5e5e;
.navBtnAboutMe
  //font-size 1.5rem
  font-size 18px
  line-height 60px
  color #ffffff
  width 140px
  height 50px
  margin 0 0 0 40px
  border none
  position relative
  top -3px
  border-radius 15px
  text-shadow: 2px 2px 4px #706f6f;
.navBtnAboutMe:hover
  cursor pointer
  top 3px
  color #ee609c
  background: #fff;
  background-image: -webkit-linear-gradient(45deg,#ee609c,#fff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: hue 5s infinite linear;
  text-shadow: 4px 4px 8px #5e5e5e;
.isPick
  font-size 20px
  color #d081f1
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
