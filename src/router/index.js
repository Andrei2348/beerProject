import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/components/views/HomeView.vue'
import About from '@/components/views/About.vue'
import Cart from '@/components/views/Cart.vue'
import Catalog from '@/components/views/Catalog.vue'
import Contacts from '@/components/views/Contacts.vue'
import Distribute from '@/components/views/Distribute.vue'
import Complectation from '@/components/views/Complectation.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: Catalog
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: Contacts
  },
  {
    path: '/distribute',
    name: 'distribute',
    component: Distribute
  },
  {
    path: '/complectation',
    name: 'complectation',
    component: Complectation
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router