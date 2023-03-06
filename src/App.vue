<template>
  <Child :message="msg" />
</template>

<script>
import Child from './components/ChildComponent.vue'

export default {
  components: {
    Child
  },
  data() {
    return {
      msg: 'hi from parent!'
    }
  }
}
</script>
