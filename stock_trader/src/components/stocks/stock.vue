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
        <div class="control">
          <input class="input" type="number" placeholder="Amount" v-model="quantity">
        </div>
      </div>
      <footer class="card-footer">
        <a @click="buy"
          class="card-footer-item"
          :class="{'is-disabled': lessThanOne}">
          Buy
        </a>
      </footer>
    </div>
  </div>
</template>

<script>
  export default {
    props: ["stock"],
    data() {
      return {
        quantity: null
      }
    },

    methods: {
      buy() {
        const order = {
          id: this.stock.id,
          price: this.stock.price,
          quantity: this.quantity
        };
        console.log(order);
        this.$store.dispatch('buy', order);
        this.quantity = null;
      },
    },

    computed: {
      lessThanOne() {
        return this.quantity < 1 || !Number.isInteger(this.quantity);
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
