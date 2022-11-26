let bitcoinWallets: Record<string, number> = {
	a: 10,
	b: 0,
};

let myBitcoinWallet = {
	address: "a",
	send(value: number, receivingAddress: string) {
		let balance = bitcoinWallets[this.address];

		// bitcoinWallets[receivingAddress] += value
	},
};

let contract = {};

myBitcoinWallet.send(5, "b");
