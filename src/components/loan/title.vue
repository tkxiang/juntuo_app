<template>
  <ul class="nav-menu">
    <li v-for="(item,index) in items" :class="{active : index === idx }" @click="$router.push(item.push)">
      {{item.name}}
    </li>
  </ul>
</template>

<script>
    export default {
        data() {
          return {
            items:[
              {
                name: '我的借款',
                push: '../view/loan/loanListMy'
              },
              {
                name: '已完成',
                push: '../view/loan/loanListOver'
              }
            ]
          }
        },
      props:['idx']
    }
</script>

<style lang="scss" scoped>

</style>
