import Vue from 'vue'
import Router from 'vue-router'
import Home from '../Home.vue'
import Loan from '../view/loan/loanList.vue'
import Repayment from '../Repayment.vue'
import My from '../My.vue'
import Main from '../Main.vue'

Vue.use(Router)
export default new Router({
  mode: 'history',
  base: __dirname,
  linkActiveClass: 'active',
  routes: [{
    name: 'Main',
    path: '/',
    component: Main,
    children: [
      {
        name: 'Home',
        path: 'Home',
        component: Home
      },
      {
        name: 'Loan',
        path: '/LoanList',
        meta: {
          title: '借款'
        },
        component: Loan,
      },
      {
        name: 'Repayment',
        path: 'Repayment',
        meta: {
          title: '还款'
        },
        component: Repayment
      },
      {
        name: 'My',
        path: 'My',
        meta: {
          title: '我的'
        },
        component: My
      }]
  }]
})
