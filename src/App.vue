<template>
  <div>
    <list-component :list="list"></list-component>
    <button-component @click="addItem">Add Item</button-component>
  </div>
</template>

<script>
import ListComponent from "./components/ListComponent.vue";
import ButtonComponent from "./components/ButtonComponent.vue";

export default {
  name: "App",
  components: {
    ListComponent,
    ButtonComponent,
  },
  data() {
    return {
      list: ["Item 1", "Item 2", "Item 3"],
    };
  },
  methods: {
    addItem() {
      this.list.push(`Item ${this.list.length + 1}`);
    },
  },
};
</script>
