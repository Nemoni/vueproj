// views/Home.vue
<template>
  <div>
    <h1>Home</h1>
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
//import { mapState } from 'vuex'
import { mapGetters } from 'vuex';

export default {
  computed: {
    /* 方法一 */
    // count() {
    //   return this.$store.getters.getCount
    // },
    /* 方法二 */
    //...mapState(['count']), //使用 mapState 辅助函数来将 count 属性映射到计算属性中，这样就可以在模板中使用 {{ count }} 来访问状态的值
    /* 方法三 */
    ...mapGetters(['getCount']),
    count() {
      return this.getCount;
    },
  },
  methods: {
    increment() {
      /* 
      用来触发 increment action，从而实现异步操作。
      也可以使用 $store.commit 方法来触发一个 mutation，从而修改 state 中的数据。this.$store.commit('increment')
      */
      this.$store.dispatch('increment') 
    }
  }
}
</script>
