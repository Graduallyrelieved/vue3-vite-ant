//


import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { Layout } from '../utils/routerHelper';
import { AppRouteRecordRaw } from './types';

export const constantRouterMap: AppRouteRecordRaw = {
	path: '/:path(.*)*',
	name: 'Redirect',
	component: Layout,
	meta: {
	  title: 'ErrorPage',
	  hideBreadcrumb: true,
	  hideMenu: true,
	},
	children: [
	//   {
	// 	path: '/:path(.*)*',
	// 	name: PAGE_NOT_FOUND_NAME,
	// 	component: EXCEPTION_COMPONENT,
	// 	meta: {
	// 	  title: 'ErrorPage',
	// 	  hideBreadcrumb: true,
	// 	  hideMenu: true,
	// 	},
	//   },
	],
  };
// 白名单应该包含基本静态路由


// 创建一个可以被 Vue 应用程序使用的路由实例
const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	  // 应该添加到路由的初始路由列表。
	  routes: constantRouterMap as unknown as RouteRecordRaw[],
	 // 是否应该禁止尾部斜杠。默认为假
	 strict: true,
	scrollBehavior: () => ({ left: 0, top: 0 }),
});

export default router;
