<template>
  <ul class="list">
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
  </ul>
</template>
<script>
export default {
  name: 'CityAlphabet'
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
