const nome = 'Patricia'
const concatenacao = 'Olá '  + nome + '!'
const template = 
    `Olá
     ${nome}!`

console.log(concatenacao, template)

// expressoes...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`) // template strings faz parte das novas recomendações ECMA, ano 2015 em diante...