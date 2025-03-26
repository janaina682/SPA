<script setup>
 import { RouterView } from 'vue-router'
 import { watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

watch(
  () => route.meta.title,
  (newTitle) => {
    if (newTitle) document.title = newTitle
  },
  { immediate: true }
)
</script>

<template>
  <RouterView/>
</template>
<style>
</style>
