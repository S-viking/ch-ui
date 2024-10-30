<template>
  <div id="app">
    <test-button @click="add">按钮测试</test-button>
  </div>
</template>

<script>
import TestButton from "./TestButton.vue";

export default {
  name: "app",
  components: {
    TestButton,
  },
  methods: {
    add() {
      console.log("add");
    },
  },
};
</script>

<style lang="scss"></style>
