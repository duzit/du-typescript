let v1: number | string;

v1 = 'hello'
v1 = 12

// v1 = false // error

function fn1(v: string | number): number {
  return v.length; 
  //  error TS2339: Property 'length' does not exist on type 'string | number'. Property 'length' does not exist on type 'number'.
  // 类型“string | number”上不存在属性“length”。类型“number”上不存在属性“length”
}

function fn2(v: number | string): string {
  return v.toString();
}