var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Hello = /** @class */ (function () {
    function Hello(msg) {
        this.hello = msg;
    }
    Hello.prototype.sayHi = function () {
        return this.hello + ' you';
    };
    return Hello;
}());
var ins1 = new Hello('hi');
var res1 = ins1.sayHi();
console.log(res1);
// 继承
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.move = function (who) {
        console.log("".concat(who, " move!"));
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.eat = function () {
        console.log('dog eat');
    };
    return Dog;
}(Animal));
var dog1 = new Dog();
dog1.eat();
dog1.move('gogo');
