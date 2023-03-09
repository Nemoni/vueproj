// store/index.js
import { createStore } from "vuex";

const store = createStore({
    /*
       state 对象是 Vuex 中的一个重要概念。它类似于 Vue 组件中的 data 对象，用于存储组件的状态数据。
       但是，与组件中的 data 不同的是，state 是全局共享的，它可以在整个应用中的所有组件中使用。
      */
    state: {
        count: 0,
    },
    /*
      在 Vuex 中，我们使用 mutations 来修改 state 中的数据。
      每个 mutation 都是一个函数，接收一个参数 state，这个参数是 state 对象的一个引用。
      通过修改 state 对象中的属性，mutation 函数就可以改变应用的状态。
      在组件中，我们可以使用 $store.commit 方法来触发一个 mutation，从而修改 state 中的数据。
      */
    mutations: {
        increment(state) {
            state.count++;
        },
    },
    /*
      在 Vuex 中，actions 用于处理异步操作，例如发送网络请求或者在一段时间后触发 mutation 等操作。
      使用$store.dispatch('increment') 触发
      */
    actions: {
        increment({ commit }) {
            setTimeout(() => {
                commit("increment"); // 触发increment mutation
            }, 1000); // 延时1秒
        },
    },
    getters: {
        getCount(state) {
            return state.count;
        },
    },
});

export default store;
