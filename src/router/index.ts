import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import DefaultLayout from '@/components/UI/DefaultLayout.vue'
import HomeView from '@/components/views/HomeView.vue'
import About from '@/components/views/About.vue'
import Cart from '@/components/views/Cart.vue'
import Catalog from '@/components/views/Catalog.vue'
import Contacts from '@/components/views/Contacts.vue'
import Distribute from '@/components/views/Distribute.vue'
import Complectation from '@/components/views/Complectation.vue'
import BeerList from '@/components/views/BeerList.vue'
import Search from '@/components/views/Search.vue'
import BeerDetails from '@/components/views/BeerDetails.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '/',
        name: 'home',
        component: HomeView,
      },
      {
        path: '/search/:data',
        name: 'search',
        component: Search,
      },
      {
        path: '/catalog',
        name: 'catalog',
        component: Catalog,
      },
      { path: '/beer/:id', 
        name: 'beerDetails', 
        component: BeerDetails,
      },
    ],
  },

  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart,
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: Contacts,
  },
  {
    path: '/distribute',
    name: 'distribute',
    component: Distribute,
  },
  {
    path: '/complectation',
    name: 'complectation',
    component: Complectation,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
