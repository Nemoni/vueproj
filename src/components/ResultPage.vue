<template>
  <div>
    <h2>Search Result</h2>
    <p>keyword: {{ keyword }}</p>
    <p>category: {{ category }}</p>
  </div>
</template>
<script>
export default {
  props: {
    keyword: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    }
  },
  mounted() {
    //const { keyword, category } = this.$route.query;
    //console.log(`Search for "${keyword}" in "${category}"`);
    console.log(`Search for "${this.keyword}" in "${this.category}"`);
  },
};
</script>
