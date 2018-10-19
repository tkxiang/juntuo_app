<template>
  <div>
    <loan-title></loan-title>
    <div class="new-title-wrap">
      <div class="new-title ">
        近30天还款计划
      </div>
    </div>
    <loan-list></loan-list>
    <empty-tip></empty-tip>
  </div>
</template>

<script>
  import loanTitle from './components/loan/title'
  import loanList from './components/loan/loanList'
  import emptyTip from './components/loan/emptyTip'

  export default {
    components: {
      loanTitle,
      loanList,
      emptyTip
    }
  }
</script>

<style lang="scss" scoped>

</style>
