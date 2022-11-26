function extendFunction(oldFn: Function, newFn: Function) {
	return () => {
		oldFn();
		newFn();
	};
}

function Animal() {
	return {
		move() {
			console.log("moved");
		},
	};
}

function Fox() {
	let animal = Animal();

	animal.move = extendFunction(animal.move, () => {
		console.log("moving at 299.792.457 m/s");
	});

	return {
		...animal,
		move: extendFunction(animal.move, () => {
			console.log("moving at 299.792.457 m/s");
		}),
	};
}

Fox().move();
