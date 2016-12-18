<template lang="html">
  <div class="container">
    <app-header></app-header>
    <div class="main-container container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Header from './components/header.vue';
  export default {
    components: {
      appHeader: Header
    },
    created() {
      this.$store.dispatch('initStocks');
    }
  }
</script>

<style lang="css">
</style>
