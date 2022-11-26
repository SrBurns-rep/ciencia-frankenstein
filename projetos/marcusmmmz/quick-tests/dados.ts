function createTable(objects: any[]) {
	var arrtr: string[] = [];
	var arrtd: string[] = [];

	var table = "";

	for (let i = 0; i < objects.length; i++) {
		const object = objects[i];
		object;

		var keys = Object.keys(object);
		for (let j = 0; j < keys.length; j++) {
			const key = keys[j];
			const value = object[key];
		}
	}

	// for (var i = 0; i < 10; i++) {
	// 	table = table.concat(arrtr[0]);
	// 	for (var j = 0; j < 4; j++) {
	// 		const key = keys[i];

	// 		table = table.concat(arrtd[0]);
	// 		table = table.concat();
	// 		table = table.concat(arrtd[1]);
	// 	}
	// 	table = table.concat(arrtr[1]);
	// }

	return table;
	// document.getElementById('tablecontent').innerHTML = table;
}

console.log(
	createTable([
		{ id: "28FFDB0C81170500", avg: "37.78", act: "25.19", diff: "-12.59" },
	])
);
