<template>
  <div class="header">
    <a href="javascript:history.go(-1);" class="back"><span class="iconfont icon-tt-icon-3"></span></a>
    <span class="title">{{title}}</span>
    <a href="###" class="kefu">
      <span class="iconfont icon-tt-icon-"></span>
    </a>
  </div>
</template>

<script>
    export default {
        name: 'top',
      props: ['title']
    }
</script>

<style lang="scss" scoped>

</style>
