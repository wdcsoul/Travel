<template>
  <div id="app">
    <!--exclude="Detail" 表示Detail这个组件不要缓存-->
    <keep-alive exclude="Detail">     <!--路由在执行之后，数据就存到缓存当中,当使用keep-alive的时候，会触发一个生命函数：activted -->
      <router-view/> <!--显示是当前路由地址所对应的内容-->
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style></style>
