let valor // não inicializada
console.log(valor)

valor = null // ausência de valor
console.log(valor) 
//console.log(valor.toString) //Erro! Aconselhável sempre atribuir valores padrões às variáveis de um código

const produto = {}
console.log(produto.preco) // undefined - valor não atribuido à variável
console.log(produto)

produto.preco = 3.50
console.log(produto) 

produto.preco = undefined // evitar atribuir undefined
console.log(!!produto.preco)
//delete produto.preco
console.log(produto)

produto.preco = null // sem preço - exclui a refêrencia ao endereço de memória do atributo preço
console.log(!!produto.preco)
console.log(produto)