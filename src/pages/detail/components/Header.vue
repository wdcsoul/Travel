<template>
  <div>
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
      <div class="iconfont header-abs-back">&#xe624;</div>
    </router-link>

    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      景点详情
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestory () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {
          opacity
        }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import "~styles/varivies.styl"
  .header-abs
    position absolute
    left .2rem
    top: .2rem
    width .8rem
    height .8rem
    border-radius 50%
    background rgba(0,0,0,.8)
    z-index 99
    line-height .8rem
    text-align center
    .header-abs-back
      color #fff
      font-size .4rem
  .header-fixed
    height $headerHeight
    line-height $headerHeight
    text-align center
    color #fff
    background $bgColor
    font-size .32rem
    position fixed
    top:0
    right 0
    left 0
    z-index 2
    .header-fixed-back
      width .64rem
      text-align center
      font-size .4rem
      position absolute
      top 0
      left 0
      color white
</style>
