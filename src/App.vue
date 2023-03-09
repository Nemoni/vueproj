<!-- App.vue -->

<template>
  <div>
    <h1>App Component</h1>
    <router-link class='router-link' to="/">Home</router-link>
    <router-link class='router-link' to="/about">About</router-link>
    <router-link class='router-link' to="/admin">Admin</router-link>
    <button @click="logout">Logout</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    logout() {
      localStorage.removeItem('token')
      this.$router.push('/')
    }
  }
}
</script>

<style>
  .router-link {
    margin-right: 10px;
  }
</style>