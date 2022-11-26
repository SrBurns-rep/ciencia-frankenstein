function encrypt(str: string) {
	return str
		.split("")
		.map((v, i) => String.fromCharCode(v.charCodeAt(0) + i))
		.join("");
}

function decrypt(str: string) {
	return str
		.split("")
		.map((v, i) => String.fromCharCode(v.charCodeAt(0) - i))
		.join("");
}

const original = "hello";
const encrypted = encrypt(original);
const decrypted = decrypt(encrypted);
console.log(encrypted);

console.log(original == decrypted);
