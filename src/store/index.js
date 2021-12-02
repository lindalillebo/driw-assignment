import { createStore } from 'vuex'
import cart from '@/store/modules/cart'
import products from '@/store/modules/products'

export default createStore({
    modules: {
        cart,
        products
    }
})