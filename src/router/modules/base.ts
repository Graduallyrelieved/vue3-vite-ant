export default [
	{
		path: '/',
		name: 'home',
		component: () => import('@/views/homeView.vue')
	},
	{
		path: '/about',
		name: 'about',
		component: () => import('@/views/boutView.vue')
	}
];
