<template>
  <el-row :class="{iconBottomAll:iconBottomAll,iconBottomMe:iconBottomMe}"  justify="space-around">
    <el-col  :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
      <el-popover
          placement="top-end"
          title=""
          :width="120"
          trigger="hover">
        <slot >
          <el-image src="http://zwyz.oss-cn-beijing.aliyuncs.com/community/publish/img/1628492536054.png?Expires=1943852534&OSSAccessKeyId=LTAI4GK95AhfKyxui78C1KkS&Signature=Gb0XVw6%2BmKMVLCQEWpksziu2LqE%3D"></el-image>
        </slot>
        <template #reference>
          <div class="icon-bottom" id="icon-bottom-wechat">
            <svg :class="{icon:icon,iconMe:iconMe}" aria-hidden="true">
              <use xlink:href="#icon-wechat"></use>
            </svg>
          </div>
        </template>
      </el-popover>
    </el-col>
    <el-col  :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
      <el-popover
          placement="top-end"
          title=""
          :width="120"
          trigger="hover">
        <slot >
          <el-image src="http://zwyz.oss-cn-beijing.aliyuncs.com/community/publish/img/1628492498539.png?Expires=1943852493&OSSAccessKeyId=LTAI4GK95AhfKyxui78C1KkS&Signature=Fe7rmeoFwDh2dZMBkg8BYVNIEZk%3D"></el-image>
        </slot>
        <template #reference>
          <div class="icon-bottom" id="icon-bottom-qq">
            <svg  :class="{icon:icon,iconMe:iconMe}" aria-hidden="true">
              <use xlink:href="#icon-qq"></use>
            </svg>
          </div>
        </template>
      </el-popover>
    </el-col>
    <el-col  :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
      <a href="https://github.com/strive-zwy">
        <el-tooltip class="item" effect="dark" content="点击跳转 GitHub" placement="left">
          <div class="icon-bottom" id="icon-bottom-github">
            <svg  :class="{icon:icon,iconMe:iconMe}" aria-hidden="true">
              <use xlink:href="#icon-github1"></use>
            </svg>
          </div>
        </el-tooltip>
      </a>
    </el-col>
    <el-col  :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
      <a href="https://blog.csdn.net/qq_44237719">
        <el-tooltip class="item" effect="dark" content="点击跳转 CSDN" placement="left">
          <div class="icon-bottom" id="icon-bottom-csdn">
            <svg  :class="{icon:icon,iconMe:iconMe}" aria-hidden="true">
              <use xlink:href="#icon-csdn"></use>
            </svg>
          </div>
        </el-tooltip>
      </a>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "MainBottomIcon",
  data () {
    return {
      icon: true,
      iconBottomAll: true,
    }
  },
  props:['iconMe','iconBottomMe'],
}
</script>

<style scoped lang="stylus">
.icon
  width 45px
  height 45px
  padding 6px
  border-radius 35px
  background-color #15213b
  box-shadow:  0 0 0 3px rgba(16, 42, 101, 0.56),-7px 7px 14px #0b0f1a,7px -7px 14px #172136;
.iconMe
  width 45px
  height 45px
  padding 6px
  border-radius 35px
  //background-color #8faae5
  background-color rgba(208, 129, 241, 0.16)
  box-shadow:  0 0 0 3px rgba(205, 162, 245, 0.8),-7px 7px 14px #f0f1f3,7px -7px 14px #c2c3c4;
.iconBottomAll
  margin 40px 10px
.iconBottomAll>div
  display table
.iconBottomMe
  margin auto -10px
.iconBottomMe>div
  display table
.icon-bottom
  display table-cell
  vertical-align middle
  width 40px
  height 40px
  color white
.icon-bottom:hover
  transform scale(1.1,1.1)
  cursor pointer
.icon-bottom:hover > .iconMe
  background-color #c9d2e7
.icon-bottom:hover > .icon>use
  color #30cce3
  background: #82beb9
  background-image: -webkit-linear-gradient(45deg,#30cce3,#82beb9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: hue 5s infinite linear;
.icon>use
  color rgba(255, 255, 255, 0.6)
  text-shadow: 4px 4px 8px #5e5e5e;
</style>
