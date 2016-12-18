<template lang="html">
  <div class="columns is-multiline">
    <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
  </div>
</template>

<script>
  import Stock from './stock.vue';
  export default {
    components: {
      appStock: Stock
    },
    computed: {
      stocks() {
        return this.$store.getters.stocks;
      }
    }
  }
</script>

<style lang="css" scoped>
  .columns {
    justify-content: center;
  }
</style>
