<template lang="html">
  <div class="box">
    <h1>{{ title}}</h1>
    <p>{{ body }}</p>
  </div>
</template>

<script>
export default {
  name: 'hello-world',
  data() {
    return {
      title: 'Vue is working',
      body: 'finally - changed to test livereload'
    }
  }
}
</script>

<style lang="css">
  h1 {
    color: #999;
  }
</style>
