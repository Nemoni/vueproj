<!-- AboutDetails.vue -->

<template>
  <div>
    <h3>AboutDetails Component</h3>
    <p>{{ $route.params.id }}</p>
  </div>
</template>

<script>
export default {
  name: "AboutDetails",
};
</script>
