console.log(
	((str: string, n: number) =>
		str
			.split("")
			.map((v) => v.charCodeAt(0) + n)
			.map((v) => String.fromCharCode(v))
			.join())("fds", 1)
);
