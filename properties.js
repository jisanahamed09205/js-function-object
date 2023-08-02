var shoppingCart = {
    books: 3,
    pen: 25,
    mouse:2,
    Keyboard:1,
    sunglass:1
}
//when you know the specific property name, use dot notation to ger the property value
var penCount = shoppingCart.pen;
//alternative stystem
//when you know the specific property name, use dot notation to ger the property value
var penCount2 = shoppingCart['pen'];

// console.log(shoppingCart);
//and another alternative
var propertyName = 'mouse';
var propertyValue =shoppingCart[propertyName];
// console.log(propertyName, propertyValue);

var properties = Object.keys(shoppingCart);
var propertiesValues = Object.values(shoppingCart);
// console.log(properties);
// console.log(propertiesValues);
console.log(shoppingCart);

// set property value
//system no-1
shoppingCart.mouse = 15;
console.log(shoppingCart);
//system no-2
shoppingCart['mouse'] = 29;
console.log(shoppingCart);
//system no-3
shoppingCart[propertyName] = 88;
console.log(shoppingCart);