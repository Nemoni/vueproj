<template>
  <div>
    <div>{{ message }}</div>
    <button @click="onClick">Click me</button>
  </div>
</template>

<script>
export default {
  props: {
    message: String
  },
  methods: {
    onClick() {
      this.$emit('child-click', this.message)
    }
  }
}
</script>
