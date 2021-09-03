<template>
    <el-row v-for="s in skills" class="skillDiv" justify="center">
      <el-col class="hidden-md-and-down" :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
        <p class="skill">{{ s.skillName }}</p>
      </el-col>
      <el-col class="hidden-lg-and-up" :xs="7" :sm="7" :md="7" :lg="7" :xl="7">
        <p class="skill-a">{{ s.skillName }}</p>
      </el-col>
      <el-col class="hidden-md-and-down" :xs="17" :sm="17" :md="17" :lg="17" :xl="17">
        <el-progress :text-inside="true" :stroke-width="skillWidthA" :percentage="s.skillPercent" :color="s.color"></el-progress>
      </el-col>
      <el-col class="hidden-lg-and-up" :xs="17" :sm="17" :md="17" :lg="17" :xl="17">
        <el-progress  :stroke-width="skillWidthB" :percentage="s.skillPercent" :color="s.color"></el-progress>
      </el-col>
    </el-row>
</template>

<script>
export default {
  name: "Skill",
  data () {
    return {
      skillWidthA:20,
      skillWidthB:12,
      skills: [
        {skillName:'Java',skillPercent:60,color:'#0578ee'},
        {skillName:'Python',skillPercent:40,color:'#fbc8d4'},
        {skillName:'HTML,CSS',skillPercent:90,color:'#cda2f5'},
        {skillName:'Js,Jquery',skillPercent:50,color:'#72afd3'},
        {skillName:'MySql',skillPercent:50,color:'#2af598'},
        {skillName:'Vue3.0',skillPercent:30,color:'#74ebd5'},
        {skillName:'Android',skillPercent:30,color:'#667eea'},
        {skillName:'php',skillPercent:10,color:'#30cfd0'},
        {skillName:'C#',skillPercent:20,color:'#764ba2'},
      ]
    }
  }
}
</script>

<style scoped lang="stylus">
h2
  text-align center
.skillDiv
  margin 20px 0
.skill
  text-align right
  font-size 16px
  margin auto 10px 0 auto
.skill-a
  text-align right
  font-size 14px
  margin auto 30px 0 auto

</style>
