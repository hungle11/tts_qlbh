import { createRouter, createWebHistory } from 'vue-router';
import List from '../components/Products/list.vue';
import Add from '../components/Products/add.vue';
import Edit from '../components/Products/edit.vue';
import Signin from '../components/Products/signin.vue';
import Home from '../pages/Home.vue';
import LayoutAdmin from '../pages/admin/LayoutAdmin.vue';


const routes = [
    {
        path: '/',
        name: 'List',
        component: List
    },
    {
        path: '/add',
        name: 'Add',
        component: Add
    },
    {
        path: '/products/:id/edit',
        name: 'Edit',
        component: Edit
    },
    {
        path: '/signin',
        name: 'Signin',
        component: Signin
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/admin',
        name: 'LayoutAdmin',
        component: LayoutAdmin
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;