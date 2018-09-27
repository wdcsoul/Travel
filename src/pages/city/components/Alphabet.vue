
<template>
  <ul class="list">
    <li
      class="item"
      v-for="(item) of letters"
      :key="item"
      @click="hanldLetterClick"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      :ref="item"
    >
      {{item}}
    </li>
  </ul>
</template>
<script>
/* 性能优化：
* 1，const startY = this.$refs['A'][0].offsetTop 这个是固定值，每次滚动都会执行一次，在data中声明一个值，在生命钩子updated中，获取offsetTop的值
*   原因：因为这个组件的list是从City中传过来的值，此时开始空数组，当值获取到之后，重新渲染了页面， updated会执行
*
* 2，函数节流：当在滚动的时候，会不断触发事件，使用setTimeout限制在一定时间内事件无法执行
**/
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  /*性能优化1*/
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    hanldLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          // const startY = this.$refs['A'][0].offsetTop // 获取A到顶部的距离
          const touchY = e.touches[0].clientY// 获取移动点距离顶部的高度
          const index = Math.floor((touchY - this.startY) / 20)// 获取每个标签的index
          if (index >= 1 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
            console.log(this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>
<style lang="stylus" scoped>
  .list
    display flex
    flex-direction column
    justify-content center
    position absolute
    top 0
    right 0
    bottom 0
    width .4rem
    background $bgColor
    .item
      line-height .4rem
      text-align center
</style>
