// views/About.vue
<template>
  <div>
    <h1>About</h1>
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.getters.getCount
    }
  },
  methods: {
    increment() {
      //this.$store.dispatch('increment')
      this.$store.commit('increment')
    }
  }
}
</script>
