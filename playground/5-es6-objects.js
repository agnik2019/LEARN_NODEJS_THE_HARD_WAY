// Object property Shorthand

const name = 'Agnik'
const userAge = 22;

const user = {
    name,  //name : name   --> object shorthand property
    age: userAge,
    location:'Kolkata'
};

console.log(user)


// Object destructuring

const product = {
    label : 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}
// const label = product.label;
// const stock = product.stock;
//const {label:productlabel, stock, rating=5} = product;  // rename the variable

// console.log(productlabel);
// console.log(stock)
// console.log(rating)
const transaction = (type, {label, price}) => {
    console.log(type, label, price)
}
transaction('order', product)