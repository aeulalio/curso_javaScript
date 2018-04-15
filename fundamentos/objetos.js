/* JavaScript é uma linguagem nultiparadigma 
   Pode-se programar de forma procedural,
   de maneira OO e  de maneira funcional
*/

const prod1 = {} //{} denota objeto e [] denota array
prod1.nome = 'Celular ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 // evitar atributos com espaço
 
console.log(prod1)

const prod2 ={
    nome: 'Camisa Polo',
    preco: 79.90 
}
console.log(prod2) //Objeto é sempre um par (chave, valor)

// Objeto não é a mesma coisa que um JSON

//Exemplo de JSON - formato textual para troca de dados entre sistemas
'{ "nome" : "Camisa Polo",  "preco" : 79.90 }'

