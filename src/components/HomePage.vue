<!-- Home.vue -->

<template>
    <div>
      <h4>Home Component</h4>
      <p>{{ message }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage',
    data() {
      return {
        message: 'Welcome to the home page!'
      }
    }
  }
  </script>
  