<template lang="html">
  <div>
      <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
  </div>
</template>

<script>
  import { mapGetters } from "vuex";
  import Stock from "./stock.vue";

  export default {
    computed: {
      ...mapGetters({
        stocks: 'portfolio'
      })
    },
    components: {
      appStock: Stock
    }
  }
</script>

<style lang="css">
</style>
