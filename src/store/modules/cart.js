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
        return getters.cartProducts.reduce((total, product) => {
            let subtotal = (total + product.price * product.quantity)
            // check number of 500kr purchases
            let extraDiscount = Math.floor(subtotal / 500) * 2
            // check discount does not exceed 10%
            if(extraDiscount > 10)
                extraDiscount = 10
            // add discount
            subtotal = subtotal - ((subtotal / 100) * extraDiscount)
            // add tax
            subtotal = subtotal + ((subtotal / 100) * 12)

            return subtotal
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