<template>
    <div>
      <div class="recommend-title">热销推荐</div>
      <ul>
          <router-link tag="li" :to="'/detail/' + item.id" class="item border-bottom" v-for="item of list" :key="item.id">
            <img class="item-img" :src="item.imgUrl"/>
            <div class="item-info">
              <p class="item-title">{{item.title}}</p>
              <p class="item-desc">{{item.desc}}</p>
              <button class="item-button">查看详情</button>
            </div>
          </router-link>
      </ul>
    </div>
</template>
<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
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
