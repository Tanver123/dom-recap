const shop = {
    shopName: 'nanar dukan',
    adrress: '2 no',
    owner: {
        name: 'kasem',
        profit: 20000
    },
}

const shopStringify = JSON.stringify(shop);
const converShop = JSON.parse(shopStringify);

console.log(shopStringify);
console.log(converShop)