<template>
  <el-footer :class="{footer:footer,footerAboutMe:footerAboutMe}">
    Copyright © 2021 zeal-coder
  </el-footer>
</template>

<script>
export default {
  name: "Footer",
  data () {
    return {
      footer:true
    }
  },
  props:['footerAboutMe'],
}
</script>

<style scoped lang="stylus">
.footer
  border-radius 10px
  height 30px
  margin 2px
  text-align center
  font-size 12px
  line-height 30px
  color rgba(255, 255, 255, 0.4)
  background: #111828;
  box-shadow:  -5px -5px 10px #0b0f1a,5px 5px 10px #172136;
.footerAboutMe
  border-radius 10px
  height 30px
  margin 2px
  text-align center
  font-size 12px
  line-height 30px
  color rgba(255, 255, 255, 0.4)
  background-image: linear-gradient(135deg, #1e2c6b 0%, #2f1649 100%);
  background-color: #8BC6EC;
  box-shadow:  3px 3px 8px #8BC6EC,-3px -3px 8px #9599E2;
  //box-shadow:  -5px -5px 10px #0b0f1a,5px 5px 10px #172136;
</style>
