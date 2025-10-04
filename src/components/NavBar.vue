<template>
  <nav class="fixed w-full bg-gray-800 text-white z-50 shadow-md">
    <div class="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
      <router-link to="/" class="font-bold text-xl">Isaiah Pham</router-link>

      <div class="hidden md:flex gap-8">
        <router-link to="/" class="hover:text-gray-300">Home</router-link>
        <router-link to="/projects" class="hover:text-gray-300">Projects</router-link>
        <router-link to="/notes" class="hover:text-gray-300">Notes</router-link>
        <router-link to="/resources" class="hover:text-gray-300">Resources</router-link>
        <router-link to="/interview-prep" class="hover:text-gray-300">Interview Prep</router-link>
      </div>
    </div>
  </nav>
</template>
