import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/login.vue'
import Home from '../components/Home.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/home', component: Home },
]

const router = new VueRouter({
  routes,
})

// 为路由对象，添加导航守卫 beforeEach
router.beforeEach((to, from, next) => {
  // 如果用户访问的登录页面，直接放行
  if (to.path === '/login') {
    return next()
  } else {
    // 从 sessionStorage 中获取到，保存的 token 值
    const tokenStr = window.sessionStorage.getItem('token')
    // 没有 token ，强制跳转到登录界面
    if (!tokenStr) return next('/login')
    next()
  }
})

export default router
