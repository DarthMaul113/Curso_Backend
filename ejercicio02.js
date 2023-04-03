
let data
const items = [
    { item: 'PS4 Pro', stock: 3, original: 399.99 },
    { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 },
    { item: 'Nintendo Switch', stock: 4, original: 299.99 },
    { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 },
    { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 }
]

calculateSalesTotals = (items) => {
    if (!isNaN(items.discount)) {
        discountTotal = items.original * items.discount
        totalSum = (items.original - discountTotal) * items.stock
    } else {
        discountTotal = items.original
        totalSum = items.original * items.stock
    }
    const data = { sales: discountTotal, total: totalSum }
    return data
}



for (let i = 0; i < items.length; i++) {
    const aux = calculateSalesTotals(items[i])
    const newitems = [
        { ...items[i], sales: aux.sales, total: aux.total }
    ]
    console.log(newitems)
}
