const elevar = (a: number, b: number) =>
	[...new Array(b)].reduce((pv) => pv * a, 1);

console.log(elevar(2, 7));
