<script setup lang="ts">
const getPopupContainer = (node: { parentNode: unknown }) => {
    if (node) {
        return node.parentNode
    }
    return document.body
}
</script>

<template>
    <a-config-provider :getPopupContainer="getPopupContainer">
  
    </a-config-provider>
  797 
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
