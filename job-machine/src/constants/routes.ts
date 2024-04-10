import { lazy } from 'react';

const Post = lazy(() => import('../pages/postManagement/index'));
const Dashboard = lazy(() => import('../pages/dashboard'));

const coreRoutes = [
    {
        path: '/dashboard',
        title: 'Dashboard',
        component: Dashboard,
    },
    {
        path: '/posts-management',
        title: 'Post Management',
        component: Post,
    },    
]

const routes = [...coreRoutes]
export default routes;