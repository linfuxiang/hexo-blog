function Person() {}
var person = new Person();
console.log(person.__proto__ === Person.prototype); // true
// Object.getPrototypeOf(person) 和 person.__proto__ 是一样的
console.log(Object.getPrototypeOf(person) === Person.prototype); // true

console.log(person.__proto__.constructor === Person); // true

console.log(Person === Person.prototype.constructor); // true

/**
 * class的继承
 */
class A {}

class B extends A {}

B.__proto__ === A; // true
B.prototype.__proto__ === A.prototype; // true
