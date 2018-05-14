/*
* @Author: Administrator
* @Date:   2018-05-12 23:59:47
* @Last Modified by:   Administrator
* @Last Modified time: 2018-05-15 01:55:53
*/
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
//在Vue中使用插件按下面形式写
Vue.use(Vuex)

export default new Vuex.Store({
	state,
	// actions: {
	// 	changeCity (ctx, city) {
	// 		ctx.commit('changeCity', city)
	// 	} 	
	// },
	mutations,
	getters: {
		doubleCity (state) {
			return state.city + ' ' + state.city
		}
	}
})