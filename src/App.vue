<template>
  <Child @child-click="updateMessage" :message="msg"/>
</template>

<script>
import Child from './components/ChildComponent.vue'

export default {
  components: {
    Child
  },
  data() {
    return {
      msg: 'Hello from parent!'
    }
  },
  methods: {
    updateMessage(data) {
      console.log("click, old:" + data)
      this.msg = 'Updated message!'
    }
  }
}
</script>
