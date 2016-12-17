<template lang="html">
  <div class="column">
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">
          Component
        </p>
        <a class="card-header-icon">
          <i class="fa fa-angle-down"></i>
        </a>
      </header>
      <div class="card-content">
        <div class="control">
          <input class="input" type="number" placeholder="Amount">
        </div>
      </div>
      <footer class="card-footer">
        <a class="card-footer-item">Buy</a>
        <a class="card-footer-item">Sell</a>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
  .card {
    margin: auto;
  }
</style>
