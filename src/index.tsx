import { List, Seq, Range } from 'immutable';

// # basic types
// boolean, number, string, Array<T>, [A, B](tuple)
// enum Color, any, void, never
// cast
// #
function closure(): () => number {
  const a = 10;
  return () => {
    const b = a + 1;
    return b;
  };
}


// f: (prev, cur, index, arr)=>res
function sumMat(matrix: number[][]): number {
  return matrix.reduce(
    (prev: number, cur: number[]) =>
      prev + cur.reduce((p, n) => p + n, 0), 
    0,
  );
}

function setTimeouts(i: number): void {
  Range(1, Infinity).take(i).forEach(
    i => setTimeout(() => alert(i), 1000),
  );
}

setTimeouts(4);
