<template>
	<div>
		<div class="title">热销推荐</div>
		<ul>
			<li class="item" v-for="(item,index) of list" :key="index">
				<img class="item-img" :src="item.imgUrl">
				<div class="item-info">
					<div class="item-title">{{item.title}}</div>
					<div class="item-desc">{{item.desc}}</div>
					<button class="item-btn">查看详情</button>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
export default {
	name: 'HomeRecommend',
	//在子组件中接收父组件传递过来的数据
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
	  overflow: hidden
	  display: flex
	  height: 1.9rem
	  .item-img
	    width: 1.7rem
	    height: 1.7rem
	    padding: .1rem
	  .item-info
	    flex:1
	    padding: .1rem
	    min-width: 0
	    .item-title
	      line-height: .54rem
	      font-size: .32rem
	      ellipsis()
	    .item-desc
	      line-height: .4rem
	      color: #ccc
	      ellipsis()
	    .item-btn
	      margin-top: .2rem
	      background: #ff9300
	      padding: 0 .1rem
	      border-radius: .06rem
	      color: #fff
	      line-height: .44rem
</style>