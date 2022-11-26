function atividade(questoes) {
    const output = []
    
    for (const i in questoes) {
        const questao = questoes[i]
        output.push(`${1+parseInt(i)}:\n${questao}`)
    }

    console.log(output.join("\n"))
}

function questao(resultados) {
    let output = ""

    for (const i in resultados) {
        const resultado = resultados[i]
        const letra = String.fromCodePoint(97+parseInt(i))
        output += `${letra}: ${resultado}, `
    }

    return output
}

function q(descricao, resultado) {
    console.log(`${descricao}: ${resultado}`)
}

const q4 = (arr)=>arr.map((x)=>(x**2-5*x+1))
const q5 = (arr)=>arr.map(([x, y])=>x**2-y**3)

atividade([
    questao(), //já fiz
    questao(), //tbm
    questao([
        ((a, b) => -a*b-2*a)(-5, 3),
        ((p, g) => 5*p**2-p*g**2)(9, 1),
        ((a, b, c) => 10-8*a*b*c**2)(1, -1, 2)
    ]),
    questao(q4([
        0, 1, 2, -2, -3, 3, 1/2, 4, -4, 5
    ])),
    questao(q5([
        [1, 1], [0, 2], [2, 2], [-1, -2], [3, 1],
        [-2, -1], [0, -1], [-1, 0], [3, 1], [1, 3]
    ]))
])

const q2l = (arr)=>arr.map((x)=>x**2 - 8*x + 10)
const q5l = (arr)=>arr.map(([x, y])=>`[${([x**2 + y**2, (x + y)**2]).toString()}]`)
const q7l = (arr)=>arr.map(([x, y])=>`[${([(x-y)**2, x**2-2*x*y+y**2]).toString()}]`)

console.log(q7l([
    [14, 5]
]))

atividade([
    questao(),
    questao(q2l([
        0, 3, 1, -1, 2, 3
    ])),
    questao(),
    questao(),
    questao(q5l([
        [4, 5], [-2, 7], [10, -5], [0.3, 1.4],
        [1.8, -2], [-3, -6], [9, 10]
    ])),
    questao(),
    questao(q7l([
        [14, 5], [12, 7], [10, -5], [5.4, 1.4],
        [3.8, -2], [4, -2], [29, 10]
    ])),
])

// q("3a", ((a, b) => -a*b-2*a)(-5, 3))
// q("3b", ((p, g) => 5*p**2-p*g**2)(9, 1))
// q("3c", ((a, b, c) => 10-8*a*b*c**2)(1, -1, 2))

