<template>
  <div>
    <div class="recommend-title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl"/>
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [{
        id: '001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/fa/ca65fde9677de2.jpg_r_640x214_4500e3ff.jpg',
        title: '锦绣中华民俗村',
        desc: '锦绣中华民俗村锦绣中华民俗村'
      }, {
        id: '002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/fa/ca65fde9677de2.jpg_r_640x214_4500e3ff.jpg',
        title: '锦绣中华民俗村',
        desc: '锦绣中华民俗村锦绣中华民俗村'
      }, {
        id: '003',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/fa/ca65fde9677de2.jpg_r_640x214_4500e3ff.jpg',
        title: '锦绣中华民俗村',
        desc: '锦绣中华民俗村锦绣中华民俗村'
      }]
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
  .recommend-title
    line-height .8rem
    text-indent .2rem
    background #eee
    margin-top .2rem
  .item-img-wrapper
      overflow hidden
      height 0
      padding-bottom 33.9%
  .item-img
    width 100%
  .item-info
    padding .1rem

  .item-title
    line-height .54rem
    font-size .32rem
    ellipse()
  .item-desc
    line-height .4rem
    font-size .28rem
    color #ccc
    ellipse()
</style>
