<template>
	<div>
		<city-header></city-header>
		<city-search></city-search>
		<city-list :hot="hotCities" :cities="allCities"></city-list>
		<city-alphabet></city-alphabet>
	</div>
</template>
<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import axios from 'axios'
export default {
	name: 'City',
	components: {
		CityHeader,
		CitySearch,
		CityList,
		CityAlphabet
	},
	data () {
		return {
			hotCities: [],
			allCities: {}
		}
	},
	methods:{
		getCityInfo () {
  		//发送ajax请求，成功则调用getCityInfoSuccess函数
  		axios.get('/api/city.json')
  		.then(this.getCityInfoSuccess)
  	},
  	getCityInfoSuccess (res){
  		res = res.data
  		//判断请求数据成功并且有数据的时候
  		if (res.ret && res.data) {
  			const data = res.data 
  			console.log(data.hotCities);
  			this.hotCities = data.hotCities
  			console.log(data.cities);
  			this.allCities = data.cities
  		}
  	}
	},
	mounted () {
		this.getCityInfo()
	}
}
</script>
<style>

</style>