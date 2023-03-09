<template>
  <div>
    <h1>Search Page</h1>
    <form @submit.prevent="search">
      <label>
        Keyword:
        <input v-model="keyword" type="text">
      </label>
      <br>
      <label>
        Category:
        <input v-model="category" type="text">
      </label>
      <br>
      <button type="submit">Search</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyword: '',
      category: ''
    }
  },
  methods: {
    search() {
      this.$router.push({
        path: '/result',
        query: {
          keyword: this.keyword,
          category: this.category
        }
      })
    }
  }
}
</script>
