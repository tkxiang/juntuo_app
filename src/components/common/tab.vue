<template>
  <ul class="footer-menu" id="footer">
    <router-link tag="li" :to="{name:'Home'}">
      <a href="javascript:;">
        <span class="iconfont menu-icon icon-menu-"></span>
        <p class="menu-text">首页</p>
      </a>
    </router-link>
    <router-link tag="li" :to="{name:'Loan'}">
      <a href="javascript:;">
        <span class="iconfont menu-icon icon-menu-3"></span>
        <p class="menu-text">借款</p>
      </a>
    </router-link>
    <router-link tag="li" :to="{name:'Repayment'}">
      <a href="javascript:;">
        <span class="iconfont menu-icon icon-menu-1"></span>
        <p class="menu-text">还款</p>
      </a>
    </router-link>
    <router-link tag="li" :to="{name:'My'}">
      <a href="javascript:;">
        <span class="iconfont menu-icon icon-menu-2"></span>
        <p class="menu-text">我的</p>
      </a>
    </router-link>
  </ul>
</template>

<script>
  import '@/assets/sass/tab.scss'

  export default {
    data() {
      return {
        /*        menuTabs: [
                  {
                    text: '首页',
                    url: '/Home',
                    icon: 'icon-menu-'
                  },
                  {
                    text: '借款',
                    url: '/Loan',
                    icon: 'icon-menu-3'
                  },
                  {
                    text: '还款',
                    url: '/Repayment',
                    icon: 'icon-menu-1'
                  },
                  {
                    text: '我的',
                    url: '/My',
                    icon: 'icon-menu-2'
                  }
                ]*/
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
