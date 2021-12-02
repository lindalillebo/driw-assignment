const state = () => ({
    items: [],
})

const getters = {
    cartProducts: (state, getters, rootState) => {
        return state.items.map(({ id, quantity }) => {
            const product = rootState.products.data.find(product => product.id === id)
            return {
                id: product.id,
                name: product.name,
                price: product.price,
                quantity
            }
        })
    },

    cartTotalPrice: (state, getters) => {
        let subtotal = getters.cartProducts.reduce((total, product) => {
            return total + product.price * product.quantity
        }, 0)

        // check number of 500kr purchases
        let extraDiscount = Math.floor(subtotal / 500) * 2
        // check discount does not exceed 10%
        if (extraDiscount > 10)
            extraDiscount = 10
        // add discount
        let discount = (subtotal / 100) * extraDiscount
        // add tax
        let tax = (subtotal / 100) * 12

        return {
            subtotal,
            tax,
            discount,
            discountPercentage: extraDiscount,
            total: subtotal - discount + tax
        }
    },
    cartItemQuantity: (state, getters) => {
        return getters.cartProducts.reduce((total, product) => {
            return total + product.quantity
        }, 0)
    }

}

const actions = {
    addProductToCart({ state, commit }, product) {
        const cartItem = state.items.find(item => item.id === product.id)
        if (!cartItem) {
            commit('pushProductToCart', { id: product.id })
        } else {
            commit('incrementItemQuantity', cartItem)
        }
        // To-do - save cart items to local storage
    }
}

const mutations = {
    pushProductToCart(state, { id }) {
        state.items.push({
            id,
            quantity: 1
        })
    },

    incrementItemQuantity(state, { id }) {
        const cartItem = state.items.find(item => item.id === id)
        cartItem.quantity++
    },

    setCartItems(state, { items }) {
        state.items = items
    }

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}