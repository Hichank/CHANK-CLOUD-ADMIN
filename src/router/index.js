import Vue from "vue";
import VueRouter from "vue-router";
import { ROUTER_MODE } from '@/config'

/**
 * 重写路由的push方法
 */
const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error);
}

// 挂载路由
Vue.use(VueRouter);


// 默认路由
export const constantRoutes = [
  {
    path: '/redirect',
    name: 'Redirect',
    component: () => import(/* webpackChunkName: "layout" */ "@/views/layout"),
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import(/* webpackChunkName: "redirect" */ "@/views/redirect/index")
      }
    ]
  },
  {
    path: "/login",
    name: 'Login',
    component: () =>
      import(/* webpackChunkName: "login" */ "@/views/login"),
    hidden: true
  },
  {
    path: '/404',
    name: 'Page404',
    component: () =>
      import(/* webpackChunkName: "404" */ "@/views/error-page/404"),
    hidden: true
  },
  {
    path: '/401',
    name: 'Page401',
    component: () =>
      import(/* webpackChunkName: "401" */ "@/views/error-page/401"),
    hidden: true
  },
  {
    path: '/',
    component: () => import(/* webpackChunkName: "layout" */ "@/views/layout"),
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () =>
          import(/* webpackChunkName: "dashboard" */ "@/views/dashboard"),
        name: 'Dashboard',
        meta: { title: '系统首页', icon: 'el-icon-s-home' }
      },
      {
        path: '/mine',
        component: () =>
          import(/* webpackChunkName: "mine" */ "@/views/mine"),
        name: 'Mine',
        hidden: true,
        meta: { title: '个人中心', icon: 'el-icon-user-solid' }
      },
    ]
  },
];

import system from './modules/system';
import operation from './modules/operation';

// 权限路由
export const asyncRoutes = [
  ...operation,
  ...system,
  { path: '*', redirect: '/404', hidden: true }
]

// 创建路由
const createRouter = () => new VueRouter({
  mode: ROUTER_MODE || "hash",
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
});

const router = createRouter();

export const resetRouter = () => {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher;
}

export default router;