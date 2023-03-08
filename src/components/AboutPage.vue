<!-- About.vue -->

<template>
  <div>
    <h2>About Component</h2>
    <p>{{ message }}</p>
    <p>ID: {{ $route.params.id }}</p>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  data() {
    return {
      message: 'This is the about page!'
    }
  }
}
</script>
