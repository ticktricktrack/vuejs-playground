<template lang="html">
  <div class="column">
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">
          {{ stock.name }}
        </p>
        <a class="card-header-icon">
          <i class="fa fa-usd"></i>
          {{ stock.price }}
        </a>
      </header>
      <div class="card-content">
        <p>Owned: {{ stock.quantity }}</p>
        <div class="control">
          <input class="input" type="number" placeholder="Amount" v-model="quantity">
        </div>
      </div>
      <footer class="card-footer">
        <a @click="sell"
          class="card-footer-item"
          :class="{'is-disabled': lessThanOne || insufficientQuantity}">
          {{ insufficientQuantity ? "Can't sell more that you own" : "Sell" }}
        </a>
      </footer>
    </div>
  </div>
</template>

<script>
  import { mapActions } from "vuex";

  export default {
    props: ["stock"],
    data() {
      return {
        quantity: null
      }
    },

    methods: {
      ...mapActions({
        placeOrder: 'sell'
      }),

      sell() {
        const order = {
          id: this.stock.id,
          price: this.stock.price,
          quantity: this.quantity
        };
        console.log("selling", order);
        // this.$store.dispatch('sell', order);
        this.placeOrder(order);
        this.quantity = null;
      },
    },

    computed: {
      lessThanOne() {
        return this.quantity < 1 || !Number.isInteger(this.quantity);
      },

      insufficientQuantity() {
        return this.quantity > this.stock.quantity;
      }
    }
  }
</script>

<style lang="css" scoped>
  .card {
    margin: auto;
  }

  .is-disabled {
    color: #ddd;
  }
</style>
