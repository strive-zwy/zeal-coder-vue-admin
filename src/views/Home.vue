<template>
  <el-container class="container">
    <el-header class="header">
      <Header navBtn="nav-btn"></Header>
    </el-header>
    <el-main>
      <el-scrollbar>
        <Main></Main>
      </el-scrollbar>
    </el-main>
    <Footer></Footer>
  </el-container>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Header from "@/components/Header.vue";
import Main from "@/components/Main.vue";
import Footer from "@/components/Footer.vue";

@Options({
  data () {
    return {
      url : 'http://zwyz.oss-cn-beijing.aliyuncs.com/community/publish/img/1628154242744.png?Expires=1943514235&OSSAccessKeyId=LTAI4GK95AhfKyxui78C1KkS&Signature=%2FMbP68h6DMDxo50O211XS82%2FzjY%3D'
    }
  },
  components: {
    Footer,
    Header,
    Main
  },
})
export default class Home extends Vue {}
</script>

<style scoped lang="stylus">
a
  text-decoration none
.container
  height 100%
  background-color #111828
  //background-color #010d28
.header
  background: #111828;
  //background: #041c50;
  box-shadow:  7px 7px 17px #070a10,-7px -7px 17px #1b2640;
  height:auto!important;



</style>
