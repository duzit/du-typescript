// 泛型 指在定义函数 接口或类的时候 不预先指定具体的类型 而在使用的时候再指定类型的一种特性

function identity<T>(arg: T): T {
  return arg;
}

// function loggingIdentity<T>(arg: T): T {
//   console.log(arg.length);  // Error: T doesn't have .length
//   return arg;
// }

function loggingIdentity<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg;
}

const output = loggingIdentity([1,2,3]);
console.log(output);

// 泛型函数
const myIdntity1: <T>(arg: T) => T = identity;
// 带有调用签名的对象字面量来定义
const myIdntity2: {<T>(arg: T): T} = identity;

// 泛型接口
interface GenIdentityFn {
  <T>(arg: T): T
}
const myIdntity3: GenIdentityFn = identity;

// 泛型参数当做接口的参数
interface GenIdentityFn2<T> {
  (arg: T): T
}
const myIdntity4: GenIdentityFn2<number> = identity;

// 泛型类
class GenericsClass1<T> {
  val: T;
  add: (x: T, y: T) => T;
}
const myGenClass1 = new GenericsClass1<number>();
myGenClass1.val = 12;

const myGenClass2 = new GenericsClass1<string>();
myGenClass2.val = '12';

// 泛型约束
interface Lengthwise {
  length: number
}
// 只允许这个函数传入包含 length 属性的变量
function loggingIdentity2<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

// const res = loggingIdentity2(12) // 类型“number”的参数不能赋给类型“Lengthwise[]”的参数。ts(2345)
const res = loggingIdentity2('hello')
const res2 = loggingIdentity2({ length: 12, name: 'hello'})

function myT1<T>(name: T): T {
  return null;
}

myT1('hi')


// 泛型接口
interface SearchFn {
  (source: string, sub: string): boolean
}

let mySearch: SearchFn;
mySearch = function(source: string, sub: string) {
  return source.search(sub) !== -1;
}

interface SearchFn2 {
  <T>(source: string, sub: string): Array<T>
}

let mySearch2: SearchFn2;
mySearch2 = function<T>(source: string, sub: string): Array<T> {
  return [];
}