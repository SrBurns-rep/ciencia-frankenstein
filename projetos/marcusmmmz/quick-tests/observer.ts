export function createObservable<Args extends any[]>() {
	type Callback = (...args: Args) => any;

	let subscribers: Callback[] = [];

	function unsubscribe(callback: Callback) {
		subscribers = subscribers.filter((subscriber) => subscriber !== callback);
	}

	return {
		on(callback: Callback) {
			if (!subscribers) subscribers = [];
			subscribers.push(callback);
			return () => unsubscribe(callback);
		},
		emit(...args: Args) {
			if (!subscribers) subscribers = [];
			for (const callback of subscribers) callback(...args);
		},
	};
}
type Observable = ReturnType<typeof createObservable>;

export function createMultiObservable<
	Args extends { [index: string]: any[] }
>() {
	type Events = keyof Args;
	type Callback<Event extends Events> = (...args: Args[Event]) => any;

	let subscribers = {} as { [Property in Events]: Observable };

	let anySubscribers = createObservable<[event: Events, ...args: any[]]>();

	return {
		on<Event extends Events>(event: Event, callback: Callback<Event>) {
			if (!subscribers[event]) {
				subscribers[event] = createObservable<Args[Event]>();
			}
			return subscribers[event].on(callback);
		},
		onAny(callback: (event: Events, ...args: any[]) => any) {
			return anySubscribers.on(callback);
		},
		emit<Event extends Events>(event: Event, ...args: Args[Event]) {
			if (!subscribers[event]) {
				subscribers[event] = createObservable<Args[Event]>();
			}
			subscribers[event].emit(...args);
			anySubscribers.emit(event, ...args);
		},
	};
}
type MultiObservable = ReturnType<typeof createMultiObservable>;
