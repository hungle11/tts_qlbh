import { createRouter, createWebHistory } from 'vue-router';
import List from '../components/Products/list.vue';
import Add from '../components/Products/add.vue';


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
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;