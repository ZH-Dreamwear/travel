<template>
	<div class="header">
		国内城市选择
		<router-link to="/">
			<span class="iconfont back-icon">&#xe624;</span>
		</router-link>
	</div>
</template>
<script>
export default {
	name: 'CityHeader',
}
</script>
<style lang="stylus" scoped>
	@import '~styles/varibles.styl'
	  .header
	    line-height:$headerHeight
	    background:$bgColor
	    color:#fff
	    text-align:center
	    position: relative
	    .back-icon
	      position: absolute
	      left: .2rem
	      color: #fff
</style>