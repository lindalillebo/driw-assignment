import Faker from 'faker'

const products = [...Array(10).fill()].map((item, index) => {
    return {
        id: index,
        name: Faker.commerce.productName(),
        image: Faker.random.image(),
        price: Faker.commerce.price(),
        description: Faker.commerce.productDescription()
    }
})

// mock api example using faker
export default {
    getProducts() {
        return products
    }
}