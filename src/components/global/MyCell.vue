<template>
  <n-button class="my-cell">
    {{ props.text }}
  </n-button>
</template>

<script setup>
import { NButton } from 'naive-ui';

const props = defineProps({
  text: {
    type: String,
    default: 'gg'
  }
})
</script>

<style>
.my-cell {
  /* background: #223843; */
}
</style>
