<template>
  <div>
    <top-component title="我要申请"></top-component>
    <div class="content has-footer-content">
      <div class="apply-head">
        <p>待还款总额</p>
        <h3>{{TotalLoanNum}}<em class="unit">元</em></h3>
      </div>
      <ul class="nav-menu">
        <li><a href="javascript:;">我的借款</a></li>
        <li><a href="javascript:;">已完成</a></li>
      </ul>
      <div class="new-title-wrap">
        <div class="new-title ">
          近30天还款计划
        </div>
      </div>
      <ul class="new-product-list">
        <li v-for="item in lists">
          <div class="product-left">
            <p>本期应还</p>
            <h3>{{item.num}}</h3>
            <p>借款金额：{{item.loanNum}}元</p>
            <p>借款时间：{{item.loanTime}}</p>
            <p>还款时间：{{item.replyTime}}</p>
          </div>
          <div class="product-right">
            <div class="loan-type-icon" :class="item.replyIcon">
              {{item.replyType}}
            </div>
            <a href="###" class="blue-btn-h64 mt30">还 款</a>
          </div>
        </li>
      </ul>
      <div class="empty-tip" style="display: none">
        <span class="iconfont icon-box empty-icon"></span>
        <p>{{emptyTip}}</p>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import topComponent from './components/common/top'
  export default {
    data() {
      return {
        TotalLoanNum:'1,000,000.00',
        lists: [
          {
            num: '￥100,000,0.00',
            loanNum: '100,000,00元',
            loanTime: '2018-09-11',
            replyTime: '2018-10-11',
            replyIcon: 'loan-type-icon2',
            replyType: '随借随还'
          },
          {
            num: '￥100,000,0.00',
            loanNum: '100,000,00元',
            loanTime: '2018-09-11',
            replyTime: '2018-10-11',
            replyIcon: '',
            replyType: '第3期/共12期'
          },
          {
            num: '￥100,000,0.00',
            loanNum: '100,000,00元',
            loanTime: '2018-09-11',
            replyTime: '2018-10-11',
            replyIcon: 'loan-type-icon2',
            replyType: '随借随还'
          }
        ],
        emptyTip:'近30天无还款'
      }
    },
    components: {
      topComponent
    }
  }
</script>

<style lang="scss" scoped>

</style>
