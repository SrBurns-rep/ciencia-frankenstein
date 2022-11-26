let countryCapitals = {
	// Brasil: "Brasília",
	// Uruguai: "Montevidéu",
	// Argentina: "Buenos Aires",
	// Chile: "Santiago",
	// Canadá: "Ottawa",
	// "Estados Unidos": "Washington D.C.",
	// México: "Cidade do México",
	Bahamas: "Nassau",
	// Belize: "Belmopan",
	"Costa Rica": "São José",
	// Cuba: "Havana",
	// "El Salvador ": "São Salvador",
	// Guatemala: "Cidade da Guatemala",
	// Haiti: "Porto Príncipe",
	// Honduras: "Tegucigalpa",
	// Jamaica: "Kingston",
	// Nicarágua: "Manágua",
	// Panamá: "Cidade do Panamá",
	"República Dominicana": "Santo Domingo",
	Bolívia: "La Paz ",
	Colômbia: "Bogotá",
	// Equador: "Quito",
	// Guiana: "Georgetown",
	// "Guiana Francesa": "Caiena",
	Paraguai: "Assunção",
	// Peru: "Lima",
	// Suriname: "Paramaribo",
	// Venezuela: "Caracas",
};

let coutries = Object.keys(countryCapitals);

let country =
	coutries[Math.floor(Math.random() * Object.keys(countryCapitals).length)];

console.log(country);

console.log(countryCapitals[country]);
