<template>
    <div>
      <div class="recommend-title">热销推荐</div>
      <ul>
        <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
          <img class="item-img" :src="item.imgUrl"/>
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
            <button class="item-button">查看详情</button>
          </div>
        </li>
      </ul>
    </div>
</template>
<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/9d/9d8c0e9a01bba92e90.water.jpg_200x200_86f2e623.jpg',
        title: '锦绣中华民俗村',
        desc: '锦绣中华民俗村锦绣中华民俗村'
      }, {
        id: '002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/9d/9d8c0e9a01bba92e90.water.jpg_200x200_86f2e623.jpg',
        title: '锦绣中华民俗村',
        desc: '锦绣中华民俗村锦绣中华民俗村'
      }, {
        id: '003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/9d/9d8c0e9a01bba92e90.water.jpg_200x200_86f2e623.jpg',
        title: '锦绣中华民俗村',
        desc: '锦绣中华民俗村锦绣中华民俗村'
      }, {
        id: '004',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/9d/9d8c0e9a01bba92e90.water.jpg_200x200_86f2e623.jpg',
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
  .item
    display flex
    height 1.9rem
    overflow hidden
    .item-img
      width 1.7rem
      height 1.7rem
      padding .1rem
    .item-info
        flex 1
        padding .1rem
        min-width 0  /*设置省略号没有成功，使用min-width*/
      .item-title
        line-height .54rem
        font-size .32rem
        ellipse()
      .item-desc
        line-height .4rem
        font-size .28rem
        color #ccc
        ellipse()
      .item-button
          background #ff9300
          padding 0 .2rem
          border-radius .06rem
          line-height .44rem
          margin-top .16rem
          color white
</style>
