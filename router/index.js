import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '~/views/Home'
import About from '~/views/About'
import TodoApp from '~/views/TodoApp'
import { component } from 'vue/types/umd'
Vue.use(VueRouter)

const routes = [
  {
    name: 'index',
    path: '/',
    component: Home
  },
  {
    name: 'about',
    path: '/about',
    component: About
  },
  {
    name: 'todos',
    path: '/todos',
    redirect: '/todos/all',
    component: TodoApp,
    children: [
      {
        name: 'todos-filter',
        path: ':id'
      }
    ]
  }
]

export default new VueRouter({
  mode: 'history', // history 모드 활성화
  routes
})
