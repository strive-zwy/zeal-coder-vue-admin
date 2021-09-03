<template>
  <el-scrollbar>
    <div class="img">
      <el-affix :offset="0">
        <el-header class="header">
          <Header navBtnAboutMe=true ></Header>
        </el-header>
      </el-affix>
      <a name="title"></a>
      <h1 id="#title">{{ blog.title }}</h1>
      <p class="tag">
        <el-tag class="blog-tag"
                v-for="item in getTags(blog.tag)"
                :key="item.label"
                effect="dark">
          <i class="el-icon-price-tag"></i>
          {{ item }}
        </el-tag>
      </p>
      <p class="time"><span class="blog-time">⏰{{ formatDate(blog.gmtCreate) }}</span></p>
    </div>
    <el-main style="padding: 0; position: relative;top: -200px;">
      <BlogDetailMain :description=blog.description :blogId=blog.id></BlogDetailMain>
<!--      <el-button @click="githubLogin()" type="primary">登陆</el-button>-->
    </el-main>
    <el-affix class="hidden-md-and-down" id="affix" position="bottom" :offset="50"  hidden>
      <a href="#title">
        <el-tooltip  effect="dark" content="回到顶部" placement="left">
          <el-button type="primary"  icon="el-icon-arrow-up" circle></el-button>
        </el-tooltip>
      </a>
    </el-affix>
        <div style="background: rgba(255,255,255,0);margin-top: -100px">&nbsp;</div>
  </el-scrollbar>
</template>

<script>
import Qs from "qs";
import Header from "../components/Header";
import BlogDetailMain from "../components/blog/BlogDetailMain";
import moment from 'moment'

export default {
  name: "BlogDetail",
  components: {
    BlogDetailMain,
    Header
  },
  data () {
    return {
      blog: {},
      blogId: 0,
      imgbg:""
    }
  },
  beforeMount() {
    this.getBlogDetail();
  },
  mounted() {
    // this.getBlogDetail();
  },
  methods: {
    getBlogDetail(){
      this.blogId = this.$route.query.id;
      this.axios.get("/blog/getBlogById",  {
            params:{'id': this.blogId},
            paramsSerializer:function (params){
              return Qs.stringify(params,{arrayFormat: 'repeat'})
            }
          },
      ).then((response) => {
        const data = response.data
        this.blog = data.result
        this.imgbg = "url('"+this.blog.cover+"') center center / cover no-repeat"
      })
    },
    formatDate(time) {
      return moment(time).format("YYYY-MM-DD HH"+" 時");
    },
    /*githubLogin(){
      const api = "https://github.com/login/oauth/authorize?client_id=4c0723c5bb7886d5f85b&redirect_uri=http://localhost:8080/github/auth&scope=user&state=1";
      window.location.href = api;
    },*/
    getTags(tags){
      tags = tags+"";
      return tags.split("、");
    }
  }
}
</script>

<style scoped lang="stylus" >
h1
  font-size 2.2rem
  letter-spacing 4px
  text-align center
  position relative
  top 100px
  color: #fcfbfb !important;
  text-shadow: 1px 1px 1px #f6f5f6
  //color: #125ba8 !important;
  //text-shadow: 1px 1px #bb7ef6,-1px -1px #bb7ef6,1px -1px #bb7ef6,-1px 1px #bb7ef6;
.tag
  font-size 1.3rem
  text-align center
  position relative
  top 100px
  color: #fcfbfb !important;
.time
  font-size 1.3rem
  text-align center
  position relative
  top 100px
  color: #fcfbfb !important;
.blog-tag
  margin 0 10px
  opacity: 0.85
  text-shadow: 0 0 1px #f6f5f6
  //background rgba(255, 255, 255, 0.48)

.blog-time
  //background rgba(255, 255, 255, 0.3)
  padding 3px 10px
  border-radius 5px
  text-shadow: 1px 1px 1px #f6f5f6


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
  background v-bind(imgbg)
  //background url("https://images.pexels.com/photos/3875821/pexels-photo-3875821.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center center / cover no-repeat
  background-position-y center
#affix
  position relative
  right -1420px
</style>
