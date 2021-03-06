import Vue from 'vue'
import VueRouter from 'vue-router'

// import Login from '../components/login.vue'
// import Home from '../components/Home.vue'
// import Welcome from '../components/Welcome.vue'
const Login = () => import(/* webpackChunkName: "login-home-webcome" */ '../components/login.vue')
const Home = () => import(/* webpackChunkName: "login-home-webcome" */ '../components/Home.vue')
const Welcome = () => import(/* webpackChunkName: "login-home-webcome" */ '../components/Welcome.vue')

// import Users from '../components/user/Users.vue'
// import Rights from '../components/power/Rights.vue'
// import Roles from '../components/power/Roles.vue'
const Users = () => import(/* webpackChunkName: "users-rights-roles" */ '../components/user/Users.vue')
const Rights = () => import(/* webpackChunkName: "users-rights-roles" */ '../components/power/Rights.vue')
const Roles = () => import(/* webpackChunkName: "users-rights-roles" */ '../components/power/Roles.vue')

// import Cate from '../components/goods/Cate.vue'
// import Params from '../components/goods/Params.vue'
const Cate = () => import(/* webpackChunkName: "cate-params" */ '../components/goods/Cate.vue')
const Params = () => import(/* webpackChunkName: "cate-params" */ '../components/goods/Params.vue')

// import Goods from '../components/goods/Data.vue'
// import AddGood from '../components/goods/AddGood.vue'
// import EditGood from '../components/goods/EditGood.vue'
const Goods = () => import(/* webpackChunkName: "goods-add-edit" */ '../components/goods/Data.vue')
const AddGood = () => import(/* webpackChunkName: "goods-add-edit" */ '../components/goods/AddGood.vue')
const EditGood = () => import(/* webpackChunkName: "goods-add-edit" */ '../components/goods/EditGood.vue')

// import Orders from '../components/order/Order.vue'
// import Report from '../components/report/Report.vue'
const Orders = () => import(/* webpackChunkName: "orders-report" */ '../components/order/Order.vue')
const Report = () => import(/* webpackChunkName: "orders-report" */ '../components/report/Report.vue')

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  {
    path: '/home',
    component: Home,
    redirect: '/welcome',
    children: [
      { path: '/welcome', component: Welcome, meta: { title: '????????????' } },
      {
        path: '/users',
        component: Users,
        meta: { title: '????????????/????????????' },
      },
      {
        path: '/rights',
        component: Rights,
        meta: { title: '????????????/????????????' },
      },
      {
        path: '/roles',
        component: Roles,
        meta: { title: '????????????/????????????' },
      },
      {
        path: '/categories',
        component: Cate,
        meta: { title: '????????????/????????????' },
      },
      {
        path: '/params',
        component: Params,
        meta: { title: '????????????/????????????' },
      },
      {
        path: '/goods',
        component: Goods,
        meta: { title: '????????????/????????????' },
      },
      {
        path: '/goods/add',
        component: AddGood,
        meta: { title: '????????????/????????????' },
      },
      {
        path: '/goods/edit',
        component: EditGood,
        meta: { title: '????????????/????????????' },
      },
      {
        path: '/orders',
        component: Orders,
        meta: { title: '????????????/????????????' },
      },
      {
        path: '/reports',
        component: Report,
        meta: { title: '????????????/????????????' },
      },
    ],
    meta: { title: '????????????' },
  },
]

const router = new VueRouter({
  routes,
})

// ???????????????????????????????????? beforeEach
router.beforeEach((to, from, next) => {
  // ????????????????????????????????????????????????
  if (to.path === '/login') {
    return next()
  } else {
    // ??? sessionStorage ???????????????????????? token ???
    const tokenStr = window.sessionStorage.getItem('token')
    // ?????? token ??????????????????????????????
    if (!tokenStr) return next('/login')
    next()
  }
})

export default router
