<script setup lang="ts">
import GitHubIcon from '@/assets/icons/github-light.svg'
import LinkedInIcon from '@/assets/icons/linkedin.svg'
import EmailIcon from '@/assets/icons/email-light.svg'
</script>

<template>
  <section
    id="home"
    class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-gray-700 text-white text-center p-4"
  >
    <h1 class="text-5xl font-bold mb-4">Hi, I'm Isaiah 👋</h1>
    <p class="text-xl mb-8">Computer Science Student</p>

    <!-- Social Buttons -->
    <div class="flex gap-6">
      <!-- GitHub -->
      <a
        href="https://github.com/qozp"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center gap-2 px-5 py-3 bg-gray-800 hover:bg-gray-700 rounded-xl shadow-md transform hover:-translate-y-1 transition-all"
      >
        <img :src="GitHubIcon" alt="GitHub" class="w-5 h-5" />
        GitHub
      </a>

      <!-- LinkedIn -->
      <a
        href="https://www.linkedin.com/in/isaiah-pham"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center gap-2 px-5 py-3 bg-gray-800 hover:bg-gray-700 rounded-xl shadow-md transform hover:-translate-y-1 transition-all"
      >
        <img :src="LinkedInIcon" alt="LinkedIn" class="w-5 h-5" />
        LinkedIn
      </a>

      <!-- Email -->
      <a
        href="mailto:isbpham@gmail.com"
        class="flex items-center gap-2 px-5 py-3 bg-gray-800 hover:bg-gray-700 rounded-xl shadow-md transform hover:-translate-y-1 transition-all"
      >
        <img :src="EmailIcon" alt="Email" class="w-5 h-5" />
        Email
      </a>
    </div>
  </section>
</template>
