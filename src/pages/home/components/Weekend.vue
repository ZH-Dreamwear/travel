<template>
	<div>
		<div class="title">周末去哪儿</div>
		<ul>
			<li v-for="(item,index) of list" :key="index">
				<div class="item">
					<img class="item-img" :src="item.imgUrl">
				</div>
				<div class="item-info">
					<div class="item-title">{{item.title}}</div>
					<div class="item-desc">{{item.desc}}</div>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
export default {
	name: 'HomeWeekend',
	props: {
		list: Array
	}
}
</script>
<style lang="stylus" scoped>
	@import '~styles/mixins.styl'
	.title
	  margin-top: .2rem
	  background: #eee
	  line-height: .8rem
	  text-indent: .2rem
	.item
	  width: 100%
	  height: 0
	  padding-bottom: 38%
	  .item-img
	    width: 100%
	.item-info
	  padding: .1rem
	  .item-title
	    line-height: .54rem
	    font-size: .32rem
	    ellipsis()
	  .item-desc
	    line-height: .4rem
	    color: #ccc
	    ellipsis()
</style>