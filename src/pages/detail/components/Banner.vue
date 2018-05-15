<template>
	<div>
		<div class="banner" @click="showGallaryClick">
		  <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1503/df/df52ada1fcc788c7.water.jpg_r_800x800_276cad3a.jpg" />
		  <div class="banner-info">
		    <div class="banner-tittle">
		      珠海长隆
		    </div>
		    <div class="banner-number">
		      <span class="iconfont banner-icon">&#xe692;</span>
		      16
		    </div>
		  </div>
    	</div>
    	<common-gallary :imgs="imgs" @close="handleGallaryClose" v-show="showGallary"></common-gallary>
	</div>
</template>
<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
	name: 'DetailBanner',
	data () {
		return {
			showGallary: false,
			imgs: ['http://img1.qunarzz.com/sight/p0/1503/d9/d998f866d28033ed.water.jpg_r_800x800_950923c0.jpg',
			'http://img1.qunarzz.com/sight/p0/1609/b2/b2ddf39699fdbb76a3.water.jpg_r_800x800_f0855d8e.jpg']
		}
	},
	methods:{
		showGallaryClick () {
			this.showGallary = true
		},
		handleGallaryClose () {
			this.showGallary = false
		}
	},
	components: {
		CommonGallary
	},
}
</script>
<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color: #fff
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-tittle
        flex: 1
        font-size: .32rem
        padding: 0 .2rem
      .banner-number
        height: .32rem
        line-height: .32rem
        margin-top: .14rem
        padding: 0 .4rem
        border-radius: .2rem
        background: rgba(0, 0, 0, .8)
        font-size: .24rem
        .banner-icon
          font-size: .24rem
</style>