/*
* @Author: Administrator
* @Date:   2018-05-15 00:42:33
* @Last Modified by:   Administrator
* @Last Modified time: 2018-05-15 00:44:59
*/
export default {
	changeCity (state, city) {
		state.city = city
		try {
			localStorage.city = city 
		} catch (e) {}
	}
}