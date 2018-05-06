<template>
  <div>
    <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="(v,i) in newsList" :key="i">
					<router-link :to="'/newsDetail/' + v.id">
						<img class="mui-media-object mui-pull-left" :src="v.img_url">
						<div class="mui-media-body">
							{{v.title}}
							<p class='mui-ellipsis'>{{v.zhaiyao}}</p>
						</div>
					</router-link>
				</li>
			</ul>
  </div>
</template>
<script>
import axios from "axios"
export default {
  data(){
    return {
      newsList:[]
    }
  },
  methods:{
    getNewsList(){
      axios({
        url:"http://www.escook.cn:3000/api/getnewslist",
        // method:"get"
      }).then(res=>{
        if(res.data.status==0){
          this.newsList = res.data.message
          // console.log(this.newsList)
        }
      })
    },
    
  },
  created(){
      this.getNewsList()
    }
  
}
</script>
<style>

</style>
