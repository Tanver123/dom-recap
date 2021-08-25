const products = [
    { name: 'iphone', price: 10000, color: 'black' },
    { name: 'mt-15', price: 40000, color: 'red' },
    { name: 'poco-x2', price: 20000, color: 'blue' },
    { name: 'realme 7pro', price: 10000, color: 'black' }
]
// old
for (const product of products) {
    const productNames = product.name;
    // console.log(productNames)
}



// const productName = products.map(product => product.name);
// const productPrice = products.map(product => product.price)
// console.log(productNames)

class Support {
    nameMan;
    adress = 'bd';
    constructor(name) {
        this.nameMan = name;
    }
    supportSession() {
        console.log(this.nameMan, 'start a support sesssion')
    }
}

const amir = new Support('amir khan');
amir.supportSession()
console.log(amir)