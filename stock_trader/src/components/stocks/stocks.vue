<template lang="html">
  <div class="columns is-multiline">
    <app-stock v-for="stock in stocks"></app-stock>
  </div>
</template>

<script>
  import Stock from './stock.vue';
  export default {
    data() {
      return {
        stocks: [
          { id: 1, name: 'Apple', price: 100 },
          { id: 2, name: 'Google', price: 130 },
          { id: 3, name: 'Facebook', price: 200 },
          { id: 4, name: 'Twitter', price: 49 }
        ]
      }
    },
    components: {
      appStock: Stock
    }
  }
</script>

<style lang="css" scoped>
  .columns {
    justify-content: center;
  }
</style>
