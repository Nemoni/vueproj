<!-- App.vue -->

<template>
  <div>
    <h1>App Component</h1>
    <router-link class='router-link' to="/">Home</router-link>
    <router-link class='router-link' to="/about">About</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  .router-link {
    margin-right: 10px;
  }
</style>
