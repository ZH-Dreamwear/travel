/*
* @Author: Administrator
* @Date:   2018-05-12 23:59:47
* @Last Modified by:   Administrator
* @Last Modified time: 2018-05-13 00:34:25
*/
import Vue from 'vue'
import Vuex from 'vuex'
//在Vue中使用插件按下面形式写
Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		city: '珠海'
	},
	actions: {
		changeCity (ctx, city) {
			ctx.commit('changeCity', city)
		} 	
	},
	mutations: {
		changeCity (state, city) {
			state.city = city
		}
	}
})