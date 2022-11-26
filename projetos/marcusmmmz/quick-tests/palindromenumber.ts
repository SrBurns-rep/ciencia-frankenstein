export const invertStr = (str: string) =>
	str.split("").reduce((pv, cv) => cv + pv);

// function invertStr(str: string) {
// 	let output = "";
// 	for (let i = str.length - 1; i >= 0; i--) {
// 		output += str[i];
// 	}
// 	return output;
// }

const isPalindrome = (str: string) => invertStr(str) == str;

console.log(
	isPalindrome("arara"),
	isPalindrome("ya mom"),
	isPalindrome("racecar")
);
