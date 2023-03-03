<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import axios from 'axios'

export default defineComponent({
  setup() {
    const message = ref('original')

    onMounted(() => {
      console.log("call onMounted")
      axios.get('http://192.168.1.121:3000/api/message')
        .then(response => {
          message.value = response.data
        })
        .catch(error => {
          console.error(error)
        })
    })

    return { message }
  }
})
</script>
