<template>
  <div class="empty-tip" style="display: none">
    <span class="iconfont icon-box empty-icon"></span>
    <p>{{emptyTip}}</p>
  </div>
</template>

<script>
    export default {
      data() {
        return {
          emptyTip: '近30天无还款'
        }
      }
    }
</script>

<style lang="scss" scoped>

</style>
