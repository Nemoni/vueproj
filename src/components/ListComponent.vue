<template>
  <div>
    <h2>List</h2>
    <ul>
      <li v-for="(item, index) in list" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ListComponent",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
