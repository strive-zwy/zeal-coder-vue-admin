<template>
    <div class="information">
      <p v-for="p in ps">{{ p }}</p>
    </div>
</template>

<script>
export default {
  name: "Me",
  data () {
    return {
      ps:['出生于河南省郑州市，98 年 IT 女、在校大学生一枚',
        '喜欢编程、尤克里里、吃鸡、QQ飞车',
        '擅长Java后端、web 开发',
        '会一些 Python 爬虫，网站数据收集等',
        '. . . . . .'],

    }
  }
}
</script>

<style scoped lang="stylus">
.information
  margin 20px 0
p
  text-align left
  margin-left 60px
  font-size 16px
h2
  letter-spacing 2px
  text-align center

</style>
