const escola = "cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5)) // O javascript não exibe erro. Não traz quaisquer valores...
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('3'))

console.log(escola.substring(1))
console.log(escola.substring(0,3))

console.log('Escola'.concat(escola.concat('!')))
console.log(escola.replace(3,'e'))
console.log(escola.replace(/\w/g, 'e')) // expressão regular para fazer substituir todos os caracteres da String pelo conteúdo do segundo argumento.

console.log('Ana, Maria, Pedro'.split(','))// comando split converte a String num array
