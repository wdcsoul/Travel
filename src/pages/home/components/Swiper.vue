<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="item of list"  :key="item.id">
         <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  props: {
    list: Array
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>
<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active /*由于更改的是swiper的class，swiper并不属于这个组件，所以正常设置class没有效果，使用css穿透可以实现class覆盖*/
    background white !important
  .wrapper
    width 100%
    height 0;
    overflow hidden;
    padding-bottom 31.67%
    background-color #eee
    .swiper-img
      width 100%
</style>
