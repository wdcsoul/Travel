<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="buttonList">
          <div class="button-wrapper">
           <div class="button">{{this.currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="buttonList">
          <div class="button-wrapper" v-for="item of hot" :key="item.id" @click="handleCityClick(item.name)">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
      <div class="title border-topbottom">{{key}}</div>
      <div class="item-list">
        <div class="item border-bottom" v-for="innerItem of item" :key="innerItem.id" @click="handleCityClick(innerItem.name)">
          {{innerItem.name}}
        </div>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  mounted () {
    //  this.$refs.wrapper 获取dom
    this.scroll = new BScroll(this.$refs.wrapper, {click: true})
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0] // 获取dom元素
        this.scroll.scrollToElement(element)
      }
    }
  },
  methods: {
    handleCityClick (city) {
      /* this.$store.commit('changeCity', city) */
      this.changeCity(city)
      this.$router.push('/') /* 编程式导航 */
    },
    ...mapMutations(['changeCity'])
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  }
}
</script>
<style lang="stylus" scoped>
  .border-topbottom
    &:before
      border-color #ccc
    &:after
      border-color #ccc
  .border-bottom
    &:before
      border-color #ccc
  .list /*让页面不会滚动*/
    overflow hidden
    position absolute
    top:1.58rem
    left 0
    right 0
    bottom 0
  .title
    line-height .54rem
    background #eee
    padding-left .2rem
    font-size .26rem
    color #666
  .buttonList
    padding .1rem .6rem .1rem .1rem
    overflow hidden
    .button-wrapper
      float left
      width 33.33%
      .button
        padding .1rem 0
        text-align center
        margin .1rem
        border .02rem solid #ccc
        border-radius .06rem
  .item-list
    .item
      line-height .76rem
      color #666
      padding-left .2rem
</style>
