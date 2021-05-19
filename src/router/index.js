import { createRouter, createWebHistory } from 'vue-router'

import RouterTest from '../views/RouterTest.vue'

const routes = [
    {
        path: '/test',
        name: 'test',
        component: RouterTest
    },
   

]



const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  
  export default router