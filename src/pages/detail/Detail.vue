<template>
  <div>
      <detail-header></detail-header>
      <detail-banner></detail-banner>
      <div class="content">
        <detail-list :list="list"></detail-list>
      </div>
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
      list: [{
        title: '成人票',
        child: [ {
          title: '成人三馆联票',
          child: [{
            title: '成人三馆联票 - 酒店名称1'
          }, {
            title: '成人三馆联票 - 酒店名称2'
          }]
        }, {
          title: '成人二馆联票'
        }]
      }, {
        title: '学生票'
      }, {
        title: '儿童票'
      }, {
        title: '特惠票'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height 50rem
</style>
