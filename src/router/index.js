import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin',
    name: 'Admin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Admin.vue')
  },
  {
    path: '/admin/dishes',
    name: 'Dishes',
    component: () => import(/* webpackChunkName: "about" */ '../views/Dishes.vue'),
    children: [
      {
        path: 'create',
        name: 'DishForm',
        component: () => import(/* webpackChunkName: "about" */ '../views/DishFormulary.vue'),
      },
    ]
  },
  {
    path: '/admin/tables',
    name: 'Tables',
    component: () => import(/* webpackChunkName: "about" */ '../views/Tables.vue')
  },
  {
    path: '/admin/tables/create',
    name: 'TablesForm',
    component: () => import(/* webpackChunkName: "about" */ '../views/TableFormulary.vue')
  },
  {
    path: '/rest',
    name: 'Rest',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Rest.vue')
  },
  {
    path: '/rest/order/:id',
    name: 'Order',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Order.vue')
  },
  {
    path: '/kitchen',
    name: 'Kitchen',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Kitchen.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
