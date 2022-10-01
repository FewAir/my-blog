import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeText from '@/components/HomeText.vue'
import QuestionText from '@/components/QuestionText.vue'
import ProjectText from '@/components/ProjectText.vue'
import ResumeText from '@/components/ResumeText.vue'


Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: HomeText
    },
    {
      path: '/question',
      component: QuestionText
    },
    {
      path: '/project',
      component: ProjectText
    },
    {
      path: '/resume',
      component: ResumeText
    }
  ]
})

export default router