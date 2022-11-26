// const Talker = (state: { speech: string }) => ({
// 	talk() {
// 		console.log(`said ${state.speech}`);
// 	},
// });

// const Jumper = (state: { jumpHeight: number }) => ({
// 	jump() {
// 		console.log(`jumped at ${state.jumpHeight}km/h`);
// 	},
// });

// function applyMixins<State, T, fnArr extends (state: State) => T>(
// 	state: State,
// 	mixinFns: fnArr[]
// ) {
// 	let mixins = mixinFns.map((fn) => fn(state));
// 	return mixins;
// 	// return Object.assign({}, ...mixins);
// }

// function Player(speed: number) {
// 	const state = {
// 		speech: "i'm gay",
// 		jumpHeight: speed,
// 	};

// 	let obj = applyMixins(state, [Talker]);

// 	// return {
// 	// 	...Talker(state),
// 	// 	...Jumper(state),
// 	// };
// }

// Player(2);

//////

type Constructor = new (...args: any[]) => {};

type Mixin = <TBase extends Constructor, seila extends Constructor>(
	Base: TBase
) => seila;

const Positionable = <TBase extends Constructor>(Base: TBase) =>
	class extends Base {
		position = [0, 0];
	};

const Scalable = <TBase extends Constructor>(Base: TBase) =>
	class extends Base {
		scale = [0, 0];
	};

function applyMixins<T extends Mixin[]>(...args: T) {
	return args.reduce((pv, cv) => cv(pv), class Base {});
}

// Positionable(Scalable(class {}))
class Player extends Positionable(Scalable(class {})) {
	constructor() {
		super();
		console.log(this.position);
		console.log(this.scale);
	}
}

new Player();
