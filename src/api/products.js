import Faker from 'faker'

const products = [...Array(20).fill()].map((item, index) => {
    return {
        id: index,
        name: Faker.commerce.productName(),
        image: Faker.random.image(),
        price: Faker.commerce.price(),
        description: Faker.commerce.productDescription()
    }
})

export default {
    getProduct(id) {
        return products.find((product) => product.id === id)
    },
    getProducts() {
        return products
    }
}