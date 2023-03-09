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
  name: "HomePage",
  data() {
    return {
      message: "Welcome to the home page!",
    };
  },
  methods: {
    goToAbout() {
      this.$router.push({ name: "AboutDetails", params: { id: 1 } });
      // 这里是导航到AboutDetails，如果填About会在浏览器报错[Vue Router warn]: Discarded invalid param(s) "id" when navigating
    },
  },
};
</script>
