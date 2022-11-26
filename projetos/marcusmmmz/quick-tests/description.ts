let descriptions = [
	`⭐Arrasta para o lado e se apaixone👉💞
.
💖Marque aqui suas amigas que também gostam de unha 💅
.
Siga nosso perfil para mais @unhasesbeltas.br
.
.
.
.
.`,
	`🎀 qual a sua nota de 0 a 10 para essa unha?💗🤔
.
💖Marque aqui suas amigas que também gostam de unha 💅
.
Siga nosso perfil para mais @unhasesbeltas.br
.
Crédito de @
.
.
.
.
.`,
	`🌺Mais uma unha linda, vocês usariam?⚘
.
💖Marque aqui suas amigas que também gostam de unha 💅
.
Siga nosso perfil para mais @unhasesbeltas.br
.
.
.
.
.
.
Crédito de @`,
	`❣vocês gostaram?❤🥰
.
💖Marque aqui suas amigas que também gostam de unha💅
.
Siga nosso perfil para mais @unhasesbeltas.br
.
Créditos de @
.
.
.
.
.`,
	`🌸A unha mais linda que você verá hoje💖
.
💖Marque aqui suas amigas que também gostam de unha 💅
.
Siga nosso perfil para mais @unhasesbeltas.br
.
Crédito de @
.
.
.
.
.`,
	`❣Tem como não se apaixonar por essa unha😍
.
💖Marque aqui suas amigas que também gostam de unha 💅
.
Siga nosso perfil para mais @unhasesbeltas.br
.
Crédito de @
.
.
.
.
.`,
	`🎀Comente oque achou🤗💬
.
💖Marque aqui suas amigas que também gostam de unha 💅
.
Siga nosso perfil para mais @unhasesbeltas.br
.
Crédito de @
.
.
.
.
.`,
	`❣CLIQUE 2× SE GOSTOU😻♥️
.
💖Marque aqui suas amigas que também gostam de unha 💅
.
Siga nosso perfil para mais @unhasesbeltas.br
.
Crédito de @
.
.
.
.
.`,
];

function get_random_element<T>(arr: T[]) {
	let i = Math.floor(Math.random() * arr.length);
	return arr[i];
}

function generate_description() {
	return get_random_element(descriptions);
}

console.log(generate_description());
