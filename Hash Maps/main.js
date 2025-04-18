import { Hash } from "./hashMap.js";

const test = new Hash();

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')

console.log(test.set('apple', 'redder'));
console.log(test.length())
console.log(test.entries())

test.set('moon', 'silver')

console.log(test.length());
console.log(test.entries())