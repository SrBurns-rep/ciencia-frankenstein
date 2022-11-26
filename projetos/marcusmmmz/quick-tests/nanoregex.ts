const digits = "1234567890".split("");

// const isDigit = (n: string) => digits.some((v) => v == n);
const isDigit = (n: string) => n >= "0" && n <= "9";

function isValid(str: string) {
	let hasSeenDotAlready = false;

	if (str.length == 0) return false;

	// Reject leading zeros (like 000001)
	if (str.length >= 2 && str[0] == "0" && str[1] != ".") return false;

	for (let i = 0; i < str.length; i++) {
		const char = str[i];

		if (char == ".") {
			if (i == 0) return false; // Reject leading dot

			if (hasSeenDotAlready) return false;

			hasSeenDotAlready = true;
		} else if (char < "0" || char > "9") {
			return false;
		}
	}

	return true;
}

console.log(isValid("0"));
console.log(isValid("0.1"));
console.log(isValid(".01"));
console.log(isValid("-5"));
console.log(isValid("7.234p54"));
console.log(isValid("+31"));
console.log(isValid("3,14"));
console.log(isValid(""));

console.log(isValid("00"));
console.log(isValid("01"));
console.log(isValid("0000000000000000000000000000001"));
