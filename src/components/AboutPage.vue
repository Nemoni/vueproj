<!-- About.vue -->

<template>
  <div>
    <h2>About Component</h2>
    <p>{{ message }}</p>
    <ul>
      <li v-for="user in users" :key="user.id">
        <router-link :to="`/about/${user.id}`">{{ user.name }}</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  data() {
    return {
      message: 'This is the about page!',
      users: [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' }
      ]
    }
  }
}

</script>
