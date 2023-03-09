<!-- About.vue -->

<template>
  <div>
    <h2>About Component</h2>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  data(){
    return{
      message: "Welcome to About page."
    }
  }
}

</script>
