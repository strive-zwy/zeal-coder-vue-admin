<template>
  <el-scrollbar>
    <div class="img">
      <el-affix :offset="0">
        <el-header class="header">
          <Header navBtnAboutMe=true isPickA=true ></Header>
        </el-header>
      </el-affix>
      <h1 id="title">博客</h1>
    </div>
    <el-main style="padding: 0; position: relative;top: -200px;">
      <BlogMain></BlogMain>
    </el-main>
    <el-affix class="hidden-md-and-down" id="affix" position="bottom" :offset="50"  hidden>
      <a href="#title">
        <el-tooltip  effect="dark" content="回到顶部" placement="left">
          <el-button type="primary"  icon="el-icon-arrow-up" circle></el-button>
        </el-tooltip>
      </a>
    </el-affix>
<!--    <div style="background: rgba(255,255,255,0);margin-top: -200px">&nbsp;</div>-->
  </el-scrollbar>
</template>

<script>
import Qs from 'qs'
import Header from "../components/Header";
import BlogMain from "../components/blog/BlogMain";

export default {
  name: "Blog",
  components: {BlogMain, Header},
  data () {
    return {
      blog:"",
    }
  },
  mounted() {

  },
  computed: {

},
  methods : {

  }
}
</script>

<style scoped lang="stylus">
h1
  font-size 30px
  letter-spacing 4px
  text-align center
  position relative
  top 100px
  color: #FFFFFF !important;
  text-shadow: 1px 1px #7e84f6,-1px -1px #7e84f6,1px -1px #7e84f6,-1px 1px #7e84f6;
.container
  height 100%
  //background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  //box-shadow:  9px 9px 18px #9eb7e2,-9px -9px 18px #aecbfa;
.header
  //background-image: linear-gradient(135deg, #1e2c6b 0%, #2f1649 100%);
  //background-color: #8BC6EC;
  //box-shadow:  7px 7px 17px #8BC6EC,-7px -7px 17px #9599E2;
  box-shadow:  0 2px 5px 0 #0c0c0c, 0 2px 10px 0 #0c0c0c
  height:auto!important;
.img
  width 100%
  height 550px
  background url("https://images.pexels.com/photos/6978515/pexels-photo-6978515.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")    center center / cover no-repeat
  background-position-y center
#affix
  position relative
  right -1420px
</style>
