<template>
	<div>
		<div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音" />
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li class="search-item border-bottom" v-for="item of list">{{item.name}}</li>
        <li class="search-item border-bottom" v-show="hasNoData">没有找到相应的城市
        </li>
      </ul>
    </div>
	</div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      //list用于存放搜索到的数据
      list: [],
      //节流函数，提高代码执行效率
      timer: null
    }
  },
  computed: {
    //不能在模板中执行逻辑，使用计算属性解决相关逻辑
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if(!this.keyword) {
        this.list = ''
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for(let i in this.cities) {
          //forEach() 方法用于调用数组的每个元素，并将元素传递给回调函数。
          //forEach() 对于空数组是不会执行回调函数的。
          this.cities[i].forEach((value) => {
            //判断是否检索到spell和name中的关键词，有的话则将检索到的城市加入result中
            if (value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        //最后再赋值给list
        this.list = result
      },100)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  }
}
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .search
    height: .72rem
    padding: 0 .1rem
    background: $bgColor
    .search-input
      box-sizing: border-box
      width: 100%
      height: .62rem
      padding: 0 .1rem
      line-height: .62rem
      text-align: center
      border-radius: .06rem
      color: #666
  .search-content
    z-index: 1
    position: absolute
    overflow: hidden
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    background: #eee
    .search-item
      line-height: .62rem
      padding-left: .2rem
      background: #fff
      color: #666
</style>