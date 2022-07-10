function sum1(x: number, y: number): number {
  return x + y;
}

const s1 = sum1(1, 2);

const sum2 = function(x: number, y: number): number {
  return x + y;
}

const sum3: (x: number, y: number) => number = function(x: number, y: number): number {
  return x + y;
}

interface ISumFn {
  (x: number, y: number): number;
}

const sum4: ISumFn = function(x: number, y: number): number {
  return x + y;
}

// 可选参数
const getFullName = function(fName: string, lName?: string): string {
  return fName + lName;
}

getFullName('Ben', 'Lee');
getFullName('Ben');

const getFullName2 = function(fName: string, lName: string = 'lee'): string {
  return fName + lName;
}

function Push(array: any[], ...items: any[]) {
  items.forEach(i => {
    array.push(i)
  })
}

const a1: any[] = []
Push(a1, 1,2,3)