<template lang="html">
  <nav class="nav">
    <div class="nav-left">
      <div class="nav-item is-brand">
        <router-link to='/'>
          <i class="fa fa-line-chart fa-3x"></i>
        </router-link>
      </div>
      <div class="nav-item is-brand">
        <router-link to='/'>
          <div class="content is-large">
            Stock Trader
          </div>
        </router-link>
      </div>
    </div>

    <div class="nav-right nav-menu">
      <router-link to='/stocks' class="nav-item">Stocks</router-link>
      <router-link to='/portfolio' class="nav-item">Portfolio</router-link>\
      <span class="nav-item">
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
