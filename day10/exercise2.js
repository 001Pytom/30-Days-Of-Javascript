let a = [4, 5, 8, 9];
let b = [3, 4, 5, 7];
let c = [...a, ...b];
let C = new Set(c);
console.log(C);

// Find a intersection b
let d = [1, 2, 3, 4, 5];
let e = [3, 4, 5, 6];

let A = new Set(a);
let B = new Set(b);

let f = a.filter((num) => B.has(num));
let F = new Set(f);
console.log(F);
