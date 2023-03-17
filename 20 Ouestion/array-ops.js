const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
var meatAtStart = shoppingCart.unshift("Meat")
var sugarAtEnd = shoppingCart.push("Sugar")
var honeyRemoved = shoppingCart.splice(4, 1,)
shoppingCart[3] = "Green Tea"

console.log(shoppingCart);