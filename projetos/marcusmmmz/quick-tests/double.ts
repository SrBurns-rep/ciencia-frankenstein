function repeat(times: number, callback: Function) {
	for (let i = 0; i < times; i++) callback();
}

let dinheiro = 0;
let salario = 0.01;

repeat(30, () => {
	dinheiro = dinheiro + salario;
	salario = salario * 2;
});

dinheiro;
