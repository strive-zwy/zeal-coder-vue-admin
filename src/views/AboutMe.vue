<template>
  <el-scrollbar>
    <div class="img">
      <el-affix :offset="0">
        <el-header class="header">
          <Header navBtnAboutMe=true isPickC=true ></Header>
        </el-header>
      </el-affix>
    </div>
    <el-main style="padding: 0; position: relative;top: -450px;height:auto!important;">
      <AboutMeMain></AboutMeMain>
    </el-main>
    <div style="background: rgba(255,255,255,0);margin-top: -400px">&nbsp;</div>
  </el-scrollbar>
</template>

<script>
import Header from "../components/Header";
import AboutMeMain from "../components/aboutMe/AboutMeMain";
import Footer from "../components/Footer";
import Qs from "qs";
export default {
  name: "AboutMe",
  components: {Footer, AboutMeMain, Header},
  data () {
    return {
      src: "https://images.pexels.com/photos/2138922/pexels-photo-2138922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      // navBtn:'nav-btn-aboutMe'
    }
  },
  mounted() {
    this.listenerFunction();
  },
  computed: {

  },
  methods : {
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
        console.log(y)
        console.log(s)
        document.getElementsByClassName("header")[0].style ='background-image: linear-gradient(135deg, #1e2c6b 0%, #2f1649 100%);box-shadow:  0 2px 5px 0 #0c0c0c, 0 2px 10px 0 #0c0c0;cheight:auto!important;'
      }else if (s < 5){
        document.getElementsByClassName("header")[0].style ='box-shadow:  0 2px 5px 0 #0c0c0c, 0 2px 10px 0 #0c0c0c;height:auto!important;'
      }

    }
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.windowScroll)
  }
}
</script>

<style scoped lang="stylus">
a
  text-decoration none
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
  background url("https://images.pexels.com/photos/8232041/pexels-photo-8232041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")  center center / cover no-repeat
  //background-size 100% 550px
  background-position-y center

</style>
