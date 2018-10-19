<template>
  <div>
    <top-component title="我要申请"></top-component>
    <div class="content has-footer-content">
      <div class="apply-head">
        <p>待还款总额</p>
        <h3>{{TotalLoanNum}}<em class="unit">元</em></h3>
      </div>
      <loan-title></loan-title>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import topComponent from '@/components/common/top'
  import loanTitle from '@/components/loan/title'

  export default {
    data() {
      return {
        TotalLoanNum:'￥100,000,0.00',
        emptyTip: '近30天无还款'
      }
    },
    components: {
      topComponent,
      loanTitle
    }
  }
</script>

<style lang="scss" scoped>
</style>
