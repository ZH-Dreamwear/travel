/*
* @Author: Administrator
* @Date:   2018-05-15 00:38:14
* @Last Modified by:   Administrator
* @Last Modified time: 2018-05-15 00:40:21
*/
let defaultCity = '珠海'
try {
	if (localStorage.city) {
	defaultCity = localStorage.city
	}
} catch(e) {}

export default {
	city: defaultCity
}