<!--单文件组件有三部分组成：template,script,style-->
<template>
  <!--加wrapper是为了在图片加载完毕之前先进行占位，这样就不会出现因为图片为加载完先加载下面的文字，而等到图片加载完后下面的文字被挤下去的抖动问题-->
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of list" :key="item.id" v-if="showSwiper">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
  	list: Array
  },
  data() {
  	return {
  		swiperOption: {
  		  //配置项
  		  //延迟3秒自动播放
  		  autoplay: 3000 ,
  		  //设置为false,用户操作之后还能autoplay重新启动
  		  autoplayDisableOnInteraction : false,
  		  //页码小点，传类名过去
  		  pagination: '.swiper-pagination',
  		  //轮播图可以循环播放
          loop: true
  		}
  	}
  },
  computed: {
  	showSwiper () {
  		return this.list.length
  	}
  }

}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 31.25%
    background: #eee
    .swiper-img
      width: 100%
</style>