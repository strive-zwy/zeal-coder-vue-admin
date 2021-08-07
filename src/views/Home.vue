<template>
  <el-container class="container">
    <el-header class="header">
      <Header></Header>
    </el-header>
    <el-main class="main">
      <Main></Main>
    </el-main>
<!--    <el-footer>Footer</el-footer>-->
  </el-container>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Header from "@/components/Header.vue";
import Main from "@/components/Main.vue";

@Options({
  components: {
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
.header
  background: #111828;
  box-shadow:  7px 7px 17px #070a10,-7px -7px 17px #1b2640;
  height:auto!important;
.main
  padding 0
  overflow-x hidden
  text-align center

</style>
