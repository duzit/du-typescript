// 定义布尔类型的值
const isDone: boolean = false;

// 使用构造函数 Boolean 创造的对象不是布尔值
// new Boolean 实际返回一个对象
// const isBool: boolean = new Boolean(1); // Type 'Boolean' is not assignable to type 'boolean'.

// 直接调用 boolean 可以返回一个 boolean 类型的值
const isAdd: boolean = Boolean(1);
console.log(typeof isAdd); // boolean

// 与 void 的区别，undefined 和 null 是所有类型的子类型，可以赋值给 number 类型
// void 类型不能赋值给 number 类型
const num: number = undefined

// let voidV: void
// const num2: number = voidV

// 类型推论
let user = 'hello'
// user = 2 // 不能将类型 number 分配给类型 string 
