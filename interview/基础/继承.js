function Super() {}
Super.prototype.getNumber = function () {
  return 1;
};

function Sub() {}
Sub.prototype = Object.create(Super.prototype, {
  constructor: {
    value: Sub,
    enumerable: false,
    writable: true,
    configurable: true,
  },
});
let s = new Sub();
s.getNumber();

function p(name) {
  this.name = name;
}
function c(name, age) {
  p.call(this, name);
  this.age = age;
}
p.prototype.showName = function () {
  console.log(this.name);
};
c.prototype = new p();
c.prototype.construtor = c;
c.prototype.showAge = function () {
  console.log(this.age);
};

function p() {
  this.name = [1];
}
p.prototype.getName = function () {
  console.log(this.name);
};
function c() {
  p.call(this);
  this.age = [5];
}
var F = function () {};
F.prototype = p.prototype;
c.prototype = new F();
