let hashtags = {
	popular: [
		"unhas",
		"nailart",
		"brasil",
		"nail",
		"inspire",
		"manicure",
		"maquiagem",
		"beleza",
		"nailstagram",
		"gelnails",
		"nailsofinstagram",
		"naildesign",
		"nailpolish",
		"instanails",
		"nailswag",
		"unhas",
		"nailsart",
		"gel",
		"unhasdecoradas",
		"nailsdesign",
	],
	medium: [
		"unhas",
		"unhasdasemana",
		"unhasdegel",
		"fibradevidro",
		"unhaslindas",
		"salaodebeleza",
		"esmalte",
		"alongamentodeunhas",
		"esmaltes",
		"unhasalongadas",
		"alongamento",
		"unhasperfeitas",
		"unhastop",
		"manicures",
		"unha",
		"unhasmaravilhosas",
		"unhasdodia",
		"unhasdelicadas",
		"unhasbemfeitas",
		"unhasdediva",
		"esmalteria",
	],
	easy: [
		"unhas",
		"unhasdegelperfeitas",
		"unhasencapsuladas",
		"unhasecores",
		"unhaseesmaltes",
		"unhasdefibradevidro",
		"unhasprontas",
		"unhasdivas",
		"unhascriativas",
		"unhaspintadas",
		"unhasbrasil",
		"unhasfashion",
		"unhasfeminina",
		"unhasbonitas",
		"unhasgel",
		"unhasdamoda",
		"unhasqueadmiro",
		"unhasdeporcelana",
		"unhasdiva",
		"unhasgrandes",
		"unhasesmaltadas",
	],
};

function get_random_element<T>(arr: T[]) {
	let i = Math.floor(Math.random() * arr.length);
	return arr[i];
}

function get_random_elements<T>(arr: T[], n: number) {
	let set = new Set<T>();

	while (set.size < n) {
		set.add(get_random_element(arr));
	}

	return [...set];
}

function generate_hashtags() {
	return [
		...get_random_elements(hashtags.popular, 2),
		...get_random_elements(hashtags.medium, 4),
		...get_random_elements(hashtags.easy, 4),
	];
}

console.log(
	generate_hashtags()
		.map((v) => `#${v}`)
		.join(" ")
);
