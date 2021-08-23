<template>
  <div id="main" ref="myRef" class="chart-box"></div>
  <div id="message"></div>
</template>

<script>
import 'echarts-gl';

export default {
  name: "Message",
  components: { },
  mounted() {
    let myChart = this.$root.echarts.init(
        document.getElementById("main")
    );
    var ROOT_PATH = 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples';
    var option;
    option = {
      backgroundColor: '#000',
      globe: {
        baseTexture: ROOT_PATH + '/data-gl/asset/earth.jpg',
        shading: 'lambert',
        // environment: 'https://img.zcool.cn/community/0375ac656d841eb6ac7252ce639bd4e.jpg',
        // environment: 'http://zwyz.oss-cn-beijing.aliyuncs.com/zeal-coder/project/xingkong-006.jpg?Expires=1629134660&OSSAccessKeyId=TMP.3Kiy464uWfNUJB9bQMAfamBwJy42rL3Sz6gUCex1Ey7JBwTWLTQaZQLW4ZiYqPh1SjVzx1b76ZyN2rfQBJDmLCXYCXGrzE&Signature=lIdWlPLH%2BtfOxH%2BiXMEHW4WrpxU%3D',
        environment: ROOT_PATH + '/data-gl/asset/starfield.jpg',
        atmosphere: {
          show: true
        },
        light: {
          ambient: {
            intensity: 0.1
          },
          main: {
            intensity: 1.5
          }
        }
      },
      series: []
    };
    option && myChart.setOption(option);

  }
}


</script>

<style scoped lang="stylus">

#main
  width 100%
  height 100%
#message
  width 100%
  height 100%
  position absolute
  top 0
  left 0
  background-color rgba(0, 0, 0, 0.5)
</style>
