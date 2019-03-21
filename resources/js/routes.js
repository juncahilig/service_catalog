import Home from './views/admin/Home';
import Contact from './views/admin/Contact';
import Categories from './views/admin/categories/List';
import NotFound from './views/errors/NotFound';

export const routes = [
	{
		path: '/',
		component: Home
	},
	{
		path: '/categories',
		component: Categories
	},
	{
		path: '/contact',
		component: Contact
	},
	{
		component: NotFound
	}
];
