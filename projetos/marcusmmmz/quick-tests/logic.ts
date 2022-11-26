// enum SetRelations {
// 	everyXisY,
// 	noXisY
// }
// type SetRelation = SetRelations

// let setRelations = (() => {
// 	let map = new Map<LogicSet[], Set<SetRelations>>();

// 	return {
// 		createRelation(x: LogicSet, y: LogicSet, relation: SetRelation) {
// 			let relations = map.get([x, y]);
// 			if (!relations) return map.set([x, y], new Set());

// 			relations.add(relation);
// 		},
// 	};
// })();

function Element(name = "") {
	let sets = new Set();

	return {
		name,
		is(set: LogicSet) {
			sets.add(set);
			set.add(this);
		},
		isNot(set: LogicSet) {},
	};
}
type Element = ReturnType<typeof Element>;

interface LogicSet {
	// elements: Set<any>;
	name: string;
	linkedSets: Set<LogicSet>;
	is(set: LogicSet): void;
	has(element: Element): boolean;
	add(element: Element): void;
}
function LogicSet(name = ""): LogicSet {
	let elements = new Set();
	let linkedSets = new Set<LogicSet>();

	return {
		name,
		linkedSets,
		is(set) {
			//setRelations.createRelation(this, set, SetRelations.everyXisY)

			set.linkedSets.add(this);
		},
		has(element) {
			for (const set of linkedSets) {
				if (set.has(element)) {
					return true;
				}
			}
			return elements.has(element);
		},
		add(element) {
			elements.add(element);
		},
	};
}

function every(element: LogicSet) {
	return element;
}

function is(element: Element, set: LogicSet) {
	return set.has(element);
}

// let aristotle = Element();
// let human = LogicSet();
// let mortal = LogicSet();
// aristotle.is(human);
// every(human).is(mortal);
// console.log(is(aristotle, mortal));

// let furry = LogicSet();
// let fusca = Element();
// every(furry).is(gay);
// fusca.is(furry);
// console.log(is(fusca, gay));

// let fuchs = Element("fuchs");
// let programmer = LogicSet("programmer");
// let coffeDrinker = LogicSet("coffeDrinker");
// every(programmer).is(coffeDrinker);
// fuchs.is(programmer);
// console.log(is(fuchs, programmer));
// console.log(is(fuchs, coffeDrinker));

// let furry = LogicSet()
// let gay = LogicSet()
// let fusca = Element()
// every(furry).is(gay)
// // fusca.isNot(gay)
// fusca.is(furry)
// console.log( is(fusca, gay) )
