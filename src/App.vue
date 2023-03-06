<template>
  <div>
    <my-component ref="myComponent"></my-component>
    <button @click="logRefs">Log refs</button>
  </div>
</template>

<script>
import MyComponent from './components/SubComponent.vue'

export default {
  components: {
    MyComponent
  },
  methods: {
    logRefs() {
      console.log(this.$refs.myComponent.count) // 输出：0
      this.$refs.myComponent.increment()
      console.log(this.$refs.myComponent.count) // 输出：1
    }
  }
}
</script>
