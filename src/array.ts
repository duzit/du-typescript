// 类型 + 括号 表示法
const a: number[] = [1,2,3];
// a.push('1'); 类型“string”的参数不能赋给类型“number”的参数。ts(2345)
a.push(3);

// 数据泛型 Array<elemType>
const a2: Array<number> = [1, 2];

// 用接口表示数组
interface NumberArray {
  [index: number]: number;
}

const a3: NumberArray = [1,2,3];