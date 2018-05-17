<template>
    <div>
        <detail-banner></detail-banner>
        <detail-header></detail-header>
        <detail-list :list="List"></detail-list>
    </div>
</template>
<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'

export default {
  name: 'Detail',
  components: {
      DetailBanner,
      DetailHeader,
      DetailList
  },
  data () {
    return {
      List: [{
        title: '成人门票',
        children: [{
          title: '成人门票二级分类',
            children: [{
          title: '成人门票三级分类'
          }]
        }]
      },{
        title: '学生门票'
      },{
        title: '儿童门票'
      }]
    }
  }
}
</script>
<style lang="stylus" scoped>

</style>