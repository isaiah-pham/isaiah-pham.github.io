<script setup lang="ts">
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col font-sans">
    <NavBar />
    <router-view />
    <footer class="bg-gray-900 text-gray-400 text-center py-4">
      <a
        href="https://github.com/isaiah-pham/isaiah-pham.github.io"
        target="_blank"
        rel="noopener noreferrer"
        class="underline hover:text-white transition"
      >
        Repository for this website
      </a>
    </footer>
  </div>
</template>
