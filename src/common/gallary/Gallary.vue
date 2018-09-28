<template>
    <div class="container" @click="handleGallaryClick">
        <div class="wrapper">
          <swiper :options="swiperOptions">
            <swiper-slide v-for="(item,index) of imgs" :key="index">
                <img class="gallary-img" :src="item"/>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
          </swiper>
        </div>
    </div>
</template>
<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('closegallary')
    }
  }
}
</script>
<style lang="stylus" scoped>
  /* align-items 单行垂直居中 align-content 多行垂直居中 */
  .container >>> .swiper-wrapper
    display flex
    align-items center
  .container >>> .swiper-container
    overflow inherit
  .container
    display flex
    flex-direction column
    justify-content center
    position fixed
    top:0
    left 0
    right 0
    bottom 0
    background black
    z-index 99
    .wrapper
      width 100%
    .gallary-img
      width 100%
    .swiper-pagination
      color white
      bottom -1rem
</style>
