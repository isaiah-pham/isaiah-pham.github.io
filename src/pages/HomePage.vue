<script setup lang="ts">
// import SideBar from '../components/home/HomeSidebar.vue'
import HomeContent from '../components/content/HomeContent.vue'
import AboutContent from '../components/content/AboutContent.vue'
import ProjectsContent from '../components/content/ProjectsContent.vue'
import SkillsContent from '../components/content/SkillsContent.vue'
import ExperienceContent from '../components/content/ExperienceContent.vue'
</script>

<template>
  <div class="flex">
    <!-- Sidebar -->
    <!-- <SideBar /> -->

    <!-- Main Scrollable Content -->
    <main class="flex-1">
      <section
        id="home"
        class="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-700 text-white"
      >
        <HomeContent />
      </section>
      <section id="about" class="min-h-screen flex items-center justify-center bg-gray-100">
        <AboutContent />
      </section>
      <section id="experience" class="min-h-screen flex items-center justify-center bg-white">
        <ExperienceContent />
      </section>
      <section id="projects" class="min-h-screen flex items-center justify-center bg-gray-100">
        <ProjectsContent />
      </section>
      <section id="skills" class="min-h-screen flex items-center justify-center bg-white">
        <SkillsContent />
      </section>
    </main>
  </div>
</template>
