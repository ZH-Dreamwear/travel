<template>
  <div>
  	<home-header></home-header>
  	<home-swiper :list="swiperList"></home-swiper>
  	<home-icons :list="iconList"></home-icons>
  	<home-recommend :list="recommendList"></home-recommend>
  	<home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
//导入组件
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  components: {
  	HomeHeader,
  	HomeSwiper,
  	HomeIcons,
  	HomeRecommend,
  	HomeWeekend
  },
  data () {
  	return {
      lastCity: '',
  		swiperList: [],
  		iconList: [],
  		recommendList: [],
  		weekendList: [],
  	}
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
  	getHomeInfo () {
  		//发送ajax请求，成功则调用getHomeInfoSuccess函数
  		axios.get('/api/index.json?city=' + this.city)                                                             
  		.then(this.getHomeInfoSuccess)
  	},
  	getHomeInfoSuccess (res){
  		res = res.data
  		//判断请求数据成功并且有数据的时候
  		if (res.ret && res.data) {
  			const data = res.data 
  			this.swiperList = data.swiperList
  			// console.log(data.iconList);
  			this.iconList = data.iconList
  			this.recommendList = data.recommendList
  			this.weekendList = data.weekendList
  		}
  	}
  },
  mounted () {
    this.lastCity = this.city
  	//挂载完成时调用getHomeInfo()函数
  	this.getHomeInfo()
  },  
  activated () {
    if (this.lastCity !== this.city) {
      //如果切换不同的城市，则需要重新发送ajax请求
      this.getHomeInfo()
      //更换最后选择的城市
      this.lastCity = this.city
    }
  }
}
</script>

<style>
</style>