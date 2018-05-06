<template>
  <div class="artical_content">
      <div >
          <h4>发表评论</h4>
          <hr>
          <textarea name="" id="" cols="10" rows="3"></textarea>
      </div>
      <mt-button type="primary" size="large">发表评论</mt-button>

      <ul class="mui-table-view" v-for="(v,i) in commentList" :key="i">
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						
						<div class="mui-media-body">
                            <p class="time">
                                <span>第{{i+1}}楼</span>
                                <span>发表时间 {{v.add_time}}</span>
                                <span class="mui-pull-right"> {{v.user_name}}</span>
                            </p>
							<img class="mui-media-object mui-pull-right" src="../../assets/images/menu1.png">
							<p class='mui-ellipsis'>{{v.content}}</p>
						</div>
					</a>
				</li>
			
			</ul>
            <mt-button plain size="large" type="danger" @click = "more" v-if="isShowBtn">点击加载更多</mt-button>

  </div>
</template>
<script>
import axios from "axios"
import { Toast } from 'mint-ui';
export default {
    data(){
        return {
            pageNum:1,
            commentList:[],
            isShowBtn:true
        }

    },
    methods:{
        getComment(){
            axios({
                url:'http://www.escook.cn:3000/api/getcomments/'+this.$route.params.id +'?pageindex='+this.pageNum
            }).then(res=>{
                // console.log(res)
                if(res.data.status ==0){
                    // this.commentList = res.data.message
                    console.log(this.commentList)
                    this.commentList=this.commentList.concat(res.data.message)
                    if(res.data.message.length==0){
                        this.isShowBtn = false;
                        Toast('没有更多评论了')
                    }
                }
               
            })
        },
        more(){
            this.pageNum++
            this.getComment()
        }
    },
    created(){
        this.getComment()
    }
  
}
</script>
<style>
.time {
    font-size: 14px
}
.time span {
    font-size: 10px
}
</style>


