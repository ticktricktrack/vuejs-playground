import Vue from 'vue'
import HelloWorld from './hello_world.vue'
console.log("webpack loaded");

Vue.component('hello-world', HelloWorld)
new Vue({
  el: '#app'
})
