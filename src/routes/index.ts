import { createRouter, createWebHistory } from 'vue-router';
import List from '../components/Products/list.vue';
import Add from '../components/Products/add.vue';
import Edit from '../components/Products/edit.vue';
import Signin from '../components/Auth/signin.vue';
import Signup from '../components/Auth/Signup.vue';
import ListAcc from '../components/Auth/ListAcc.vue';
import Home from '../pages/Home.vue';
import Detail from '../pages/Detail.vue';
import Cart from '../pages/Cart.vue';

const routes = [
    {
        path: '/cart',
        name: 'Cart',
        component: Cart
    },
    {
        path: '/list',
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
        path: '/',
        name: 'Signin',
        component: Signin
    },
    {
        path: '/signup',
        name: 'Signup',
        component: Signup
    },
    {
        path: '/acc',
        name: 'ListAcc',
        component: ListAcc
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/detail/:id',
        name: 'detail',
        component: Detail
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;