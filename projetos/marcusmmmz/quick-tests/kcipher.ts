let chartable = [
	"1qaz",
	"2wsx",
	"3edc",
	"4rfv",
	"5tgb",
	"6yhn",
	"7ujm",
	"8ik,",
	"9ol.",
	"0pç;",
].map((str) => str.split(""));

function encode(str: string) {
	let output = "";

	str.split("").forEach((char) => {
		let x: number | undefined;
		let y: number | undefined;

		y = chartable.findIndex((line) => {
			x = line.findIndex((c) => c == char);
			if (x) return true;
			else return false;
		});
		x;
		y;
	});

	return output;
}

console.log(encode("1qaz"));
