<template lang="html">
  <nav class="nav">
    <div class="nav-left">
      <router-link to='/' class="nav-item is-large">Stock Trader</router-link>
    </div>

    <div class="nav-right nav-menu">
      <router-link to='/stocks' class="nav-item">Stocks</router-link>
      <router-link to='/portfolio' class="nav-item">Portfolio</router-link>\
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
         <span>Download</span>
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
