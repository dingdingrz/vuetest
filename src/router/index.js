import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/tabbar/home.vue'
import Member from '../components/tabbar/member.vue'
import Search from '../components/tabbar/search.vue'
import Cart from '../components/tabbar/cart.vue'
import GoodsList from '../components/goods/goodsList.vue'
import GoodsDetail from '../components/goods/goodsDetail.vue'
import NewsDetail from '../components/news/newsDetail.vue'
import NewsList from '../components/news/newslist.vue'
import PicList from '../components/pic/picList.vue'




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/member',
      component: Member
    },
    {
      path:'/search',
      component : Search
    },
    {
      path :'/cart',
      component :Cart
    },
    {
      path :'/goodslist',
      component :GoodsList
    },
    {
      path :'/goodsDetail',
      component :GoodsDetail
    },
    {
      path :'/newsDetail/:id',
      component :NewsDetail
    },
    {
      path :'/newslist',
      component : NewsList
    },
    {
      path :'/picList',
      component:PicList
    }
  ]
})
