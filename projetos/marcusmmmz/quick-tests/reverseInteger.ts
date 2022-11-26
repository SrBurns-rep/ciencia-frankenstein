const invertStr = (str: string) => str.split("").reduce((pv, cv) => cv + pv);

function reverse(x: number): number {
	const invertedStr = invertStr(x.toString(10));
	const isNegative = invertedStr.endsWith("-");

	const reversed = -parseInt(invertedStr) * (Number(isNegative) * 2 - 1);

	if (reversed > 2 ** 31 - 1) return 0;
	if (reversed < -(2 ** 31)) return 0;

	return reversed;
}

console.log(reverse(-123));
