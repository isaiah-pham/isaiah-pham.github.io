import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import ProjectsPage from '../pages/ProjectsPage.vue'
import NotesPage from '../pages/NotesPage.vue'
import ResourcesPage from '../pages/ResourcesPage.vue'
import InterviewPrepPage from '../pages/InterviewPrepPage.vue'

const routes = [
    { path: '/', name: 'Home', component: HomePage },
    { path: '/projects', name: 'Projects', component: ProjectsPage },
    { path: '/notes', name: 'Notes', component: NotesPage },
    { path: '/resources', name: 'Resources', component: ResourcesPage },
    { path: '/interview-prep', name: 'InterviewPrep', component: InterviewPrepPage },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        // Scroll to top on route change
        return { top: 0 }
    },
})

export default router
