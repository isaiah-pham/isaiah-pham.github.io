<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
]

const activeSection = ref('home')
let observer: IntersectionObserver | null = null

onMounted(() => {
  const options = { threshold: 0.5 }
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id
      }
    })
  }, options)

  sections.forEach((s) => {
    const el = document.getElementById(s.id)
    if (el) observer?.observe(el)
  })
})

onBeforeUnmount(() => observer?.disconnect())

const scrollToSection = (id: string) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<template>
  <aside class="fixed left-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 text-gray-400 z-40">
    <button
      v-for="s in sections"
      :key="s.id"
      @click="scrollToSection(s.id)"
      class="flex items-center gap-2 text-sm font-medium transition-colors duration-200"
      :class="activeSection === s.id ? 'text-blue-400' : 'hover:text-white'"
    >
      <span
        class="block w-2 h-2 rounded-full transition-colors"
        :class="activeSection === s.id ? 'bg-blue-400' : 'bg-gray-500'"
      ></span>
      {{ s.label }}
    </button>
  </aside>
</template>
