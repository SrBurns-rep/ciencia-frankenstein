type Constructor<T> = new (...args: any[]) => T;

export function createFactory<T extends any>(classs: Constructor<T>) {
	return (...args: ConstructorParameters<Constructor<T>>) => new classs(args);
}

let Fds = createFactory(
	class Fds {
		b = "";
		constructor(a: string) {
			this.b = a;
		}
	}
);
type Fds = ReturnType<typeof Fds>;

let fds = Fds("a");
fds;
