const invertStr = (str: string) => str.split("").reverse().join("");

function doCursedStuff(input: string) {
	return input
		.split(" ")
		.map((word, i) => ((i + 1) % 2 ? word : invertStr(word)))
		.join("")
		.split("")
		.map((char, i) =>
			Boolean(Math.floor(i / 4) % 2 ^ i % 2)
				? char.toUpperCase()
				: char.toLowerCase()
		)
		.join("");
}

console.log(doCursedStuff("actual fuck me case"));

export default { console };
