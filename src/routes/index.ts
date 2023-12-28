import { createRouter, createWebHistory } from 'vue-router';
import List from '../components/Products/list.vue';
import Add from '../components/Products/add.vue';
import Edit from '../components/Products/edit.vue';
import Signup from '../components/Auth/Signup.vue'

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
        path: '/signup',
        name: 'Signup',
        component: Signup
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;