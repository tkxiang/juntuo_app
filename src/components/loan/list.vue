<template>
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
</template>

<script>
    export default {
      data() {
        return {
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
          ]
        }
      }
    }
</script>

<style lang="scss" scoped>

</style>
