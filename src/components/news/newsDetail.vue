<template>
  <div class="news pages">
    <div class="news-detail">
      <h4>{{newsDetail.title}}</h4>
      <p class="news-info">
        <span >发表时间：{{newsDetail.add_time}}</span>
        <span class="mui-pull-right">点击{{newsDetail.click}}次</span>
      </p>
    </div>
    <hr>
      <div class="news-content" v-html="newsDetail.content"></div>
        <comment></comment>
  </div>
</template>
<script>
import axios from "axios"
import comment from "../common/comment.vue"
export default {
  data(){
    return {
      newsDetail:[]
    }
  },
  methods:{
    getNewsDetail(){
      axios({
          url:"http://www.escook.cn:3000/api/getnew/" + this.$route.params.id,
          method:"get"
      }).then(res=>{
        this.newsDetail = res.data.message[0]
        // console.log(this.newsDetail)
      })
    //  $route 可以访问路径的哈希值，path query 等
    // $router 是Vue实例化出来的一个对象  
    }
  },
  created(){
    this.getNewsDetail()
  },
  components:{
    comment
  }
  
}
</script>
<style>

</style>
