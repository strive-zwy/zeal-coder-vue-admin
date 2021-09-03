<template>
  <el-row justify="center">
    <el-col id="blogDetailMain" :xs="23" :sm="23" :md="23" :lg="15" :xl="15">
      <el-row justify="center">
        <el-col :xs="23" :sm="23" :md="23" :lg="23" :xl="23">
          <md-editor v-model="description" previewOnly style="background-color: rgba(255,255,255,0.53)" />
          <h1 id="comment">评论</h1>
          <el-divider></el-divider>
          <Comment :bid=blogId></Comment>
        </el-col>
      </el-row>
    </el-col>

  </el-row>
</template>

<script>
import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import Comment from "./Comment";

export default {
  name: "BlogDetailMain",
  components:{
    Comment,
    MdEditor
  },
  props:['description', 'blogId'],
}
</script>

<style scoped lang="stylus">
#blogDetailMain
  background-color rgba(255, 255, 255, 0.95)
  border-radius 10px
  box-shadow:  10px 10px 14px #a4a4a4,-5px 0 5px #dad8d8
  margin 20px
  padding 30px 2.5rem
  position relative
  font-family -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"
#comment
  color #5d5b5b
  letter-spacing 2px
</style>
