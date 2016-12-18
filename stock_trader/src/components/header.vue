<template lang="html">
  <nav class="nav box">
    <div class="nav-left">
      <a class="nav-item is-brand" href="#">
        <img src="http://bulma.io/images/bulma-type.png" alt="Bulma logo">
      </a>
    </div>

    <div class="nav-right nav-menu">
      <div class="nav-item">
        <i class="fa fa-usd"></i>
        {{ funds }}
      </div>
      <router-link to="/stocks" class="nav-item">Stocks</router-link>
      <router-link to="/portfolio" class="nav-item">Portfolio</router-link>

      <span class="nav-item">
        <a class="button" >
          <span class="icon">
            <i class="fa fa-twitter"></i>
          </span>
          <span>Tweet</span>
        </a>
        <a @click="endDay" class="button is-primary" href="#">
          <span class="icon">
            <i class="fa fa-download"></i>
          </span>
          <span>End Day</span>
        </a>
      </span>
    </div>
  </nav>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    computed: {
      funds() {
        return this.$store.getters.funds;
      }
    },
    methods: {
      ...mapActions([
        'randomize'
      ]),
      endDay() {
        this.randomize();
      }
    }
  }
</script>

<style lang="css">
</style>
