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

// 约束
interface Lengthwise {
  length: number
}
function loggingIdentity2<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

// const res = loggingIdentity2(12) // 类型“number”的参数不能赋给类型“Lengthwise[]”的参数。ts(2345)
const res = loggingIdentity2('hello')
const res2 = loggingIdentity2({ length: 12, name: 'hello'})