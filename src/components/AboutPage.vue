<!-- About.vue -->

<template>
  <div>
    <h4>About Component</h4>
    <p>{{ message }}</p>
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
