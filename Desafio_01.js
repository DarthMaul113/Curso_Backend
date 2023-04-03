class ProductManager {
    #products

    constructor() {
        this.#products = []
    }

    #generateID = () => {
        let id
        if (this.#products.length === 0) id = 1
        else id = this.#products[this.#products.length - 1].id + 1
        return id
    }

    getProducts = () => {
        return this.#products
    }

    addProduct = (title, description, price, thumbnail, code, stock) => {
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.error('Campos sin completar')
            return
        }

        let id = this.#generateID()
        let newProduct = {
            id, title, description, price, thumbnail, code, stock
        }
        this.#products.push(newProduct)
    }

    getProductById = (id) => {
        let findID = this.#products.find(e => e.id === id)
        return findID
    }
}

const productManager = new ProductManager()
console.log(productManager.getProducts())

productManager.addProduct('producto prueba 1', 'Este es un producto prueba', 200, "Sin imagen", "abc123", 25)
productManager.addProduct('producto prueba 2', 'Este es un producto prueba', 400, "Sin imagen", "abc123", 15)

console.log(productManager.getProducts())

console.log(productManager.getProductById(2))
console.log(productManager.getProductById(3))
