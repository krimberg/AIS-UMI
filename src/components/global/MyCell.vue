<template>
  <div class="my-cell">
    {{ props.text }}
  </div>
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    default: 'gg'
  }
})
</script>

<style></style>
