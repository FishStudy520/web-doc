import {
	createRouter,
	createWebHashHistory
} from 'vue-router'

const Home = ()=> import('./../views/home.vue')
const User = ()=> import('./../views/user.vue')

const routes = [{
		path: '/home',
		name: 'home',
		component: Home
	},
	{
		path: '/user',
		name: 'user',
		component: User
	},
	{
		path: '/',
		redirect: '/home',
		component: Home
	}
]
export default createRouter({
	history: createWebHashHistory(),
	routes
});