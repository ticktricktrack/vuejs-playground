<template lang="html">
  <nav class="nav box">
    <div class="nav-left">
      <a class="nav-item is-brand" href="#">
        <img src="http://bulma.io/images/bulma-type.png" alt="Bulma logo">
      </a>
    </div>

    <div class="nav-right nav-menu">
      <router-link to="/stocks" class="nav-item">Stocks</router-link>
      <router-link to="/portfolio" class="nav-item">Portfolio</router-link>

      <span class="nav-item">
        <a class="button" >
          <span class="icon">
            <i class="fa fa-twitter"></i>
          </span>
          <span>Tweet</span>
        </a>
        <a class="button is-primary" href="#">
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
export default {
}
</script>

<style lang="css">
</style>
