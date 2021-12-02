import products from '@/api/products'

const state = () => ({
    data: []
})

const getters = {
    getProductById: (state) => (id) => {
        let result = state.data.find(product => product.id == id);
        return result;
    }
}

const actions = {
    getAllProducts({ commit }) {
        let data = products.getProducts()
        commit('setProducts', data)
    }
}

const mutations = {
    setProducts(state, products) {
        state.data = products
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}