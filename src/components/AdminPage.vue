<!-- AdminPage.vue -->

<template>
  <div>
    <h2>Admin Component</h2>
    <p v-if="isLoggedIn">Welcome to the admin page!</p>
    <p v-else>You must be logged in to access this page.</p>
  </div>
</template>

<script>
export default {
  name: "AdminPage",
  computed: {
    isLoggedIn() {
      return localStorage.getItem("token") !== null;
    },
  },
  beforeRouteEnter(to, from, next) {
    if (!localStorage.getItem("token")) {
      console.log("haven't login, redirect to /, AdminPage.vue")
      next("/");
    } else {
      next();
    }
  },
};
</script>
