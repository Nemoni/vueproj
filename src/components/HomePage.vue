<!-- Home.vue -->

<template>
  <div>
    <h2>Home Component</h2>
    <p>{{ message }}</p>
    <button @click="goToAbout">Go to About page</button>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      message: 'Welcome to the home page!'
    }
  },
  methods: {
    goToAbout() {
      this.$router.push({ name: 'About', params: { id: 1 } })
    }
  }
}
</script>
