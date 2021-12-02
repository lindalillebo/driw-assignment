import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Cart from '@/views/Cart.vue'
import Product from '@/components/Product.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart
    },
    {
        path: '/product/:id',
        name: 'ProductView',
        component: Product,
        props: true
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router