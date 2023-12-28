import { createRouter, createWebHistory } from 'vue-router';
import List from '../components/Products/list.vue';
import Add from '../components/Products/add.vue';
import Edit from '../components/Products/edit.vue';
import Signin from '../components/Products/signin.vue';
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
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;