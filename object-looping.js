// array vs object
var shoppingItems = ['books', 'sunglass', 'shoes', 'pen'];
var friendsAge = [12, 45, 78, 12, 32, 14];
var friendsAge = {
    rahim: 12,
    samad: 45,
    karim: 78,
    jamal: 12,
    robi:32,
    kazi: 14
}

var shoppingCart = {
    books: 3,
    pen: 25,
    mouse:2,
    Keyboard:1,
    sunglass:1,
    shoes:2,
}
const keys = Object.keys(shoppingCart);
console.log(keys);
const values = Object.values(shoppingCart);
console.log(values);
//which property which value merge process
//Hard process
//var keys = [ 'books', 'pen', 'mouse', 'Keyboard', 'sunglass', 'shoes' ]
for(var i = 0; i < keys.length;i++){
   var propertyName = keys[i];
   var propertyValue = shoppingCart[propertyName];
//    console.log(propertyName, propertyValue);
}
// easy process
//for in loop
for(propertyName in shoppingCart){
    const value = shoppingCart[propertyName];
    console.log(propertyName, value);
}