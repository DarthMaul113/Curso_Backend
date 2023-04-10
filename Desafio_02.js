const { error } = require('console')

const fs = require('fs')
const filename = './ProductManager.txt'

class ProductManager {
    products = []
    lastId = 0
    getProducts() {
        return this.products
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.error('Campos sin completar')
            return
        }
        const id = this.getNextId()
        const newProduct = { id, title, description, price, thumbnail, code, stock }
        this.products.push(newProduct)
    }

    getProductById(id) {
        return this.products.find(e => e.id === id)
    }

    updateProduct(id, field, value) {
        const update = JSON.parse(fs.readFileSync(filename, 'utf-8'))
        update[id - 1][field] = value

        fs.writeFileSync(filename, JSON.stringify(update, null, '\t'), error => {
            if (error) return console.log("Hubo un error")
        })

    }
    deleteProduct(id) {
        const deleteProd = JSON.parse(fs.readFileSync(filename, 'utf-8'))
        let arrayindex = id - 1
        if (arrayindex > -1) {
            deleteProd.splice(arrayindex, 1)
          }
        fs.writeFileSync('./ProductManagerDel.txt', JSON.stringify(deleteProd, null, '\t'), error => {
            if (error) return console.log("Hubo un error")
        })
    }

    getNextId() {
        return ++this.lastId
    }
}

const productManager = new ProductManager()
productManager.addProduct('producto prueba 1', 'Este es un producto prueba', 200, "Sin imagen", "abc123", 25)
productManager.addProduct('producto prueba 2', 'Este es un producto prueba', 400, "Sin imagen", "abc123", 15)
const producto1 = productManager.getProductById(1)
const producto2 = productManager.getProductById(2)
fs.writeFileSync(filename, JSON.stringify([producto1, producto2], null, '\t'), error => {
    if (error) return console.log("Hubo un error")
})
productManager.updateProduct(1, 'price', 3000)
productManager.deleteProduct(2)
