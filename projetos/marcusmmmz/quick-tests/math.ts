type FractionStr = `${number}/${number}`;
type Fraction = [number, number];

const strToFraction = (str: FractionStr) =>
	str.split("/").map((v) => parseInt(v)) as Fraction;
const FractionToStr = ([numerator, denominator]: Fraction) =>
	`${numerator}/${denominator}`;

function simplifyFraction([numerator, denominator]: Fraction): Fraction {
	for (let n = 2; n <= 10; n++) {
		if (Number.isInteger(numerator / n) && Number.isInteger(denominator / n)) {
			console.log(FractionToStr([numerator / n, denominator / n]));
			return simplifyFraction([numerator / n, denominator / n]);
		}
	}

	return [numerator, denominator];
}

function simplifyFractionStr(str: FractionStr) {
	return FractionToStr(simplifyFraction(strToFraction(str)));
}

console.log(simplifyFractionStr("102/90"));
