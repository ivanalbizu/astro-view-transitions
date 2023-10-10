<script setup>
import { ref } from 'vue';

const count = ref(0);
</script>

<template>
  <button @click="count++" type="button"><slot></slot> {{count}}</button>
</template>

<style scoped>
  button {
    display: flex;
    align-items: center;
    border-radius: 2px;
    font-size: 12px;
    cursor: pointer;
    color: #fff;
    background-color: rebeccapurple;
    padding: 0 4px;
  }
</style>
