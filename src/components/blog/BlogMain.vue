<template>
  <el-row justify="center">
    <el-col id="blogMain" :xs="23" :sm="23" :md="23" :lg="16" :xl="16">
      <el-row justify="center">
        <el-col :xs="23" :sm="23" :md="23" :lg="23" :xl="23">
          <el-row justify="left" class="blog-all" v-for="blog in blogs">
            <el-col :xs="23" :sm="23" :md="23" :lg="8" :xl="8">
              <el-image class="blog-cover" :src="blog.cover"></el-image>
            </el-col>
            <el-col class="hidden-md-and-down" :xs="23" :sm="23" :md="23" :lg="14" :xl="14">
              <RouterLink :to="{name:'BlogDetail',query:{id:blog.id}}">
                <p class="blog-title">{{ blog.title }}</p>
              </RouterLink>
              <p class="blog-des">{{ blog.explain }}</p>
              <p class="blog-time">{{ formatDate(blog.gmtCreate) }}</p>
            </el-col>
            <el-col class="hidden-lg-and-up" :xs="23" :sm="23" :md="23" :lg="14" :xl="14">
              <RouterLink :to="{name:'BlogDetail',query:{id:blog.id}}">
                <p class="blog-title-s">{{ blog.title }}</p>
              </RouterLink>
              <p class="blog-des-s">{{ blog.explain }}</p>
              <p class="blog-time-s">{{ formatDate(blog.gmtCreate) }}</p>
            </el-col>
          </el-row>
        </el-col>
      </el-row>

    </el-col>
  </el-row>
</template>

<script>
import Qs from "qs";
import moment from 'moment'

export default {
  name: "BlogMain",
  data () {
    return {
      blogs:[],
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    getList() {
      this.axios.get("/blog/getAllBlog",  {
            params:{'page': 0, 'size': 5},
            paramsSerializer:function (params){
              return Qs.stringify(params,{arrayFormat: 'repeat'})
            }
          },
      ).then((response) => {
        const data = response.data
        this.blogs = data.result.list
        console.log(this.blogs)
      })
    },
    formatDate(time) {
      return moment(time).format("YYYY-MM-DD HH"+" 時");
    }

  }
}
</script>

<style scoped lang="stylus">
a
  text-decoration none
a:hover > p
  transform scale(1.03, 1.03)
  color #687586
#name
  font-size 26px
  font-weight bold
  text-align center
#blogMain
  background-color rgba(255, 255, 255, 0.95)
  border-radius 10px
  box-shadow:  10px 10px 14px #a4a4a4,-5px 0 5px #dad8d8
  margin 20px
  padding 30px 10px
  position relative
  font-family -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"
.blog-cover
  width 100%
  height 200px
  border-radius 12px
  margin 10px
  box-shadow 5px 5px 8px #ccc
.blog-all
  margin 20px 0
.blog-title
  font-size 22px
  font-weight bold
  letter-spacing 2px
  color #3c4858
  margin-left 80px
.blog-des
  font-size 18px
  color #3c4858
  margin 50px 0 50px 80px
.blog-time
  font-size 16px
  margin-left 80px

.blog-title-s
  font-size 20px
  letter-spacing 1px
  margin-left 30px
  color #3c4858
.blog-des-s
  font-size 16px
  color #3c4858
  margin 30px 0 30px 30px
.blog-time-s
  font-size 14px
  margin-left 30px
</style>
