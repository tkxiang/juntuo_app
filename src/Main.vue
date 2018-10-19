<template>
  <div>
    <tab></tab>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Tab from './components/common/tab.vue';
  export default {
    components:{
      tab: Tab
    }
  }
</script>

<style lang="scss" scoped>

</style>
