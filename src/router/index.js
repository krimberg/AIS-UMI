import { createRouter, createWebHistory } from 'vue-router'
import AuthPage from '../views/AuthPage.vue'
import PropertyTablePage from '../views/PropertyTablePage.vue'
import NonPropertyTablePage from '../views/NonPropertyTablePage.vue'
import PropertyItemPage from '../views/PropertyItemPage.vue'
import HandleUserRolesPage from '../views/HandleUserRolesPage.vue'
import HandleDepartmentRolesPage from '../views/HandleDepartmentRolesPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AuthPage
    },
    {
      path: '/auth',
      name: 'auth',
      component: AuthPage
    },
    {
      path: '/property-table',
      name: 'property-table',
      component: PropertyTablePage
    },
    {
      path: '/non-property-table',
      name: 'non-property-table',
      component: NonPropertyTablePage
    },
    {
      path: '/item',
      name: 'item',
      component: PropertyItemPage
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/user-roles',
      name: 'user-roles',
      component: HandleUserRolesPage
    },
    {
      path: '/department-roles',
      name: 'department-roles',
      component: HandleDepartmentRolesPage
    }
  ]
})

export default router
