type FN = <A extends any[], B extends any | FN>(...args: A) => B;

let TRUE =
	<T>(t: T) =>
	<F>(f: F) =>
		t;
let FALSE =
	<T>(t: T) =>
	<F>(f: F) =>
		f;

type BOOL = typeof TRUE | typeof FALSE;

let NOT = (b: BOOL) => b(FALSE)(TRUE);
let AND = (a: BOOL) => (b: BOOL) => a(b)(FALSE);
let OR = (a: BOOL) => (b: BOOL) => a(a)(b);
let NAND = (a: BOOL) => (b: BOOL) => NOT(AND(a)(b));

console.log(NOT(FALSE));
console.log(NOT(TRUE));

console.log(AND(TRUE)(TRUE));
console.log(AND(TRUE)(FALSE));
console.log(AND(FALSE)(TRUE));
console.log(AND(FALSE)(FALSE));

console.log(OR(TRUE)(TRUE));
console.log(OR(TRUE)(FALSE));
console.log(OR(FALSE)(TRUE));
console.log(OR(FALSE)(FALSE));

console.log(NAND(TRUE)(TRUE));
console.log(NAND(TRUE)(FALSE));
console.log(NAND(FALSE)(TRUE));
console.log(NAND(FALSE)(FALSE));

let XOR = (a: BOOL) => (b: BOOL) => OR(AND(a)(NOT(b)))(AND(NOT(a))(b));

console.log(XOR(TRUE)(TRUE));
console.log(XOR(TRUE)(FALSE));
console.log(XOR(FALSE)(TRUE));
console.log(XOR(FALSE)(FALSE));

export default {};
