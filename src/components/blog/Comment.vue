<template>
  <el-row justify="center">
    <p class="csize">共 {{comms.length}} 条评论</p>
    <el-col :xs="22" :sm="22" :md="22" :lg="22" :xl="22" v-for="c in comms">
      <div>
        <p>
<!--          <el-avatar class="b-avatar"> {{c.commentator.avatar}} </el-avatar>-->
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
          <span class="b-account">{{c.commentator.account}}</span>
        </p>
        <p class="b-content">
          {{ c.content }}
        </p>
        <span class="csize">共 {{c.commentSons.length}} 条回复</span>
        <span class="b-time">{{ formatDate(c.gmtCreate) }}</span>
      </div>
      <el-row justify="right">
        <el-col :xs="22" :sm="22" :md="22" :lg="22" :xl="22" :offset="2" v-for="commSon in c.commentSons">
          <el-divider></el-divider>
          <div>
            <p>
              <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
<!--              <el-avatar class="cson-avatar"> {{commSon.commentator.avatar}} </el-avatar>-->
              <span class="cson-account">{{commSon.commentator.account}}</span>
            </p>
            <p class="cson-content">
              {{ commSon.content }}
            </p>
          </div>
        </el-col>
      </el-row>
    </el-col>
    <el-col style="margin-top: 20px"  :xs="22" :sm="22" :md="22" :lg="22" :xl="22">
      <h2>提交回复</h2>
      <el-input
          id="comm"
          type="textarea"
          size="large"
          :rows="4"
          :show-word-limit=showWord
          v-model="textarea"
          placeholder="说点什么......">
      </el-input>
    </el-col>
    <br>
    <br>
    <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4" :offset="18">
    <el-button class="comment-btn" type="info" v-if="user == null"
               @click="addUser()">登录后回复</el-button>
    <el-button class="comment-btn" type="primary" v-if="user != null"
          @click="postComment()">提交</el-button>
    </el-col>
  </el-row>
</template>

<script>
import {mapMutations} from "vuex";
import {ref} from 'vue'
import Qs from "qs";
import moment from "moment";

export default {
  name: "Comment",
  data (){
    return {
      user: null,
      showWord:true,
      comms:[],
    }
  },
  setup(){
    return {
      textarea: ref('')
    }
  },
  mounted() {
    // this.addUser();
    this.exit();
    // this.getUser()
    this.getcomments();
  },
  methods: {
    ...mapMutations(['changeLogin']),
    addUser(){
      this.changeLogin({ Authorization: "666",account: {id: 1,name : "zwy", avatar: "33333"}});
      var account = JSON.parse(localStorage.getItem('account'));
      console.log(account)
      this.user = account;
      this.$message({
        type: 'success',
        message: '您已登录'
      });
    },
    formatDate(time) {
      return moment(time).format("YYYY-MM-DD HH:mm:ss");
    },
    exit(){
      //退出登录，清空token
      localStorage.removeItem('Authorization');
      localStorage.removeItem('account');
      this.user = null;
    },
    getUser(){
      var Authorization = localStorage.getItem('Authorization');
      var account = localStorage.getItem('account');
      console.log("account :"+account)
      this.user = account;
    },
    getcomments(){
      var par = {"bid" : this.$route.query.id};
      console.log(par);
      this.axios.get("/comment/getCommentByBid",  {
            params:par,
            paramsSerializer:function (params){
              return Qs.stringify(params,{arrayFormat: 'repeat'})
            }
          },
      ).then((response) => {
        this.comms = response.data.result
      })
    },
    postComment(){
      this.axios.post("/comment/insert",
          {
              'commentator': 1,
              'blogId': this.bid,
              'content': this.textarea,
              'parentId': this.bid,
              'type': 0,
          },
      ).then((response) => {
        const data = response.data
        this.textarea = "";
        console.log(data);
        console.log(data.message);
        if (data.code === "-1"){
          this.$message({
            type: 'warning',
            message: data.message
          });
        }else {
          this.getcomments();
        }
      })
    }
  },
  props:['bid'],
}
</script>

<style scoped lang="stylus">
.csize
  font-size 14px
  margin-left 10px
  margin-top 0

#comm
  background #e3e2e2
  font-size 20px
.comment-btn
  width 100%
  margin 20px 0
  border-radius 15px
.b-account
  font-size 18px
  position relative
  top -15px
  left 20px
.b-content
  font-size 16px
  padding  15px 30px
  border #ccc 1px solid
  border-radius 10px
.cson-account
  font-size 16px
  position relative
  top -15px
  left 20px
.cson-content
  font-size 16px
  padding  10px 30px
  border #ccc 1px solid
  border-radius 8px
</style>
