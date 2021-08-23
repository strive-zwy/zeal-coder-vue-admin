<template>
  <el-row justify="space-between">
    <el-col :span="5">
      <el-popover
          placement="top"
          title=""
          :width="120"
          trigger="hover">
        <slot >
          <el-image src="http://zwyz.oss-cn-beijing.aliyuncs.com/community/publish/img/1628492536054.png?Expires=1943852534&OSSAccessKeyId=LTAI4GK95AhfKyxui78C1KkS&Signature=Gb0XVw6%2BmKMVLCQEWpksziu2LqE%3D"></el-image>
        </slot>
        <template #reference>
          <div class="icon-bottom" id="">
            <svg class="ic-icon" aria-hidden="true">
              <use xlink:href="#icon-wechat"></use>
            </svg>
          </div>
        </template>
      </el-popover>
    </el-col>
    <el-col :span="5">
      <el-popover
          placement="top"
          title=""
          :width="120"
          trigger="hover">
        <slot >
          <el-image src="http://zwyz.oss-cn-beijing.aliyuncs.com/community/publish/img/1628492498539.png?Expires=1943852493&OSSAccessKeyId=LTAI4GK95AhfKyxui78C1KkS&Signature=Fe7rmeoFwDh2dZMBkg8BYVNIEZk%3D"></el-image>
        </slot>
        <template #reference>
          <div class="icon-bottom" id="icon-qq">
            <svg class="ic-icon" aria-hidden="true">
              <use xlink:href="#icon-qq"></use>
            </svg>
          </div>
        </template>
      </el-popover>
    </el-col>
    <el-col :span="5">
      <a href="https://github.com/strive-zwy">
        <el-tooltip class="item" effect="dark" content="点击跳转 GitHub" placement="top">
          <div class="icon-bottom" id="icon-github">
            <svg class="ic-icon" aria-hidden="true">
              <use xlink:href="#icon-github1"></use>
            </svg>
          </div>
        </el-tooltip>
      </a>
    </el-col>
    <el-col :span="5">
      <a href="https://blog.csdn.net/qq_44237719">
        <el-tooltip class="item" effect="dark" content="点击跳转 CSDN" placement="top">
          <div class="icon-bottom" id="icon-csdn">
            <svg class="ic-icon" aria-hidden="true">
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
  name: "Icon"
}
</script>

<style scoped lang="stylus">
a
  color black
.ic-icon
  width: 26px; height: 26px
  vertical-align: -0.15em
  fill: currentColor
  overflow: hidden
.icon-bottom
  width: 34px; height: 34px
  border-radius 16px
  margin 0 3px
.icon-bottom:hover
  cursor pointer
  color crimson
.icon-bottom:hover > .ic-icon
  color #410879
  background: #0bc4b2;
  background-image: -webkit-linear-gradient(45deg,#410879,#0bc4b2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: hue 5s infinite linear;

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
