<template>
    <el-popover
      placement="left-start"
      title=""
      transition="el-collapse-transition"
      :width="120"
      trigger="hover">
    <slot >
      <el-image src="http://zwyz.oss-cn-beijing.aliyuncs.com/community/publish/img/1628492536054.png?Expires=1943852534&OSSAccessKeyId=LTAI4GK95AhfKyxui78C1KkS&Signature=Gb0XVw6%2BmKMVLCQEWpksziu2LqE%3D"></el-image>
    </slot>
    <template #reference>
      <div class="icon-div" id="icon-wechat">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-wechat"></use>
        </svg>
      </div>
    </template>
  </el-popover>
    <el-popover
      placement="left-start"
      title=""
      :width="120"
      trigger="hover">
    <slot >
      <el-image src="http://zwyz.oss-cn-beijing.aliyuncs.com/community/publish/img/1628492498539.png?Expires=1943852493&OSSAccessKeyId=LTAI4GK95AhfKyxui78C1KkS&Signature=Fe7rmeoFwDh2dZMBkg8BYVNIEZk%3D"></el-image>
    </slot>
    <template #reference>
      <div class="icon-div" id="icon-qq">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-qq"></use>
        </svg>
      </div>
    </template>
  </el-popover>
  <a href="https://github.com/strive-zwy">
    <el-tooltip class="item" effect="dark" content="点击跳转 GitHub" placement="left">
      <div class="icon-div" id="icon-github">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-github1"></use>
        </svg>
      </div>
    </el-tooltip>
  </a>
  <a href="https://blog.csdn.net/qq_44237719">
    <el-tooltip class="item" effect="dark" content="点击跳转 CSDN" placement="left">
      <div class="icon-div" id="icon-csdn">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-csdn"></use>
        </svg>
      </div>
    </el-tooltip>
  </a>
</template>

<script>
export default {
  name: "MainRightIcon"
}
</script>

<style scoped lang="stylus">
.icon-div
  position relative
  right  -250px
  width: 30px; height: 30px
  padding 5px
  border-radius 50%
  background-color #111828
  box-shadow:  -7px 7px 14px #0b0f1a,7px -7px 14px #172136;
  border 3px rgba(16, 42, 101, 0.56) solid
.icon
  width: 30px; height: 30px
  vertical-align: -0.15em
  fill: currentColor
  overflow: hidden
.icon>use
  color rgba(255, 255, 255, 0.6)
  text-shadow: 4px 4px 8px #5e5e5e;
.icon-div:hover > .icon>use
  color #30cce3
  background: #82beb9
  background-image: -webkit-linear-gradient(45deg,#30cce3,#82beb9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: hue 5s infinite linear;
.icon-hint
  color #111828
  background: #8522bb
  background-image: -webkit-linear-gradient(45deg,#111828,#8522bb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: hue 5s infinite linear;
.icon-div:hover
  cursor pointer
  transform scale(1.2,1.2)
#icon-wechat
  top 120px
#icon-qq
  top 140px
#icon-github
  top 160px
#icon-csdn
  top 180px

</style>
