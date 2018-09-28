<!--有时候数据有二级联动，第二级也是使用循环，可以在组件中调用自身组件，获取第二级的值-->

<template>
  <div>
    <div class="item" v-for="(item, index) of categoryList" :key="index">
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>
      <!--递归，在自己组件中调用自身的组件-->
      <div class="item-child" v-if="item.children">
        <detail-list :categoryList="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailList',
  props: {
    categoryList: Array
  }
}
</script>
<style lang="stylus" scoped>
  .item-title
    line-height .8rem
    font-size .32rem
    padding 0 .2rem
    .item-title-icon
      position relative
      top: .06rem
      left .06rem
      display inline-block
      width: .36rem
      height: .36rem
      background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
      margin-right: .1rem
      background-size: .4rem 3rem;
  .item-child
    padding 0 .2rem
</style>
