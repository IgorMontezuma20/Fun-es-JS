// Função em Js é Fairs_Class Object (Citizens)
// Higher Order Function

// Criar de forma literal
function fun1() { 

}

// Armazenar em uma variável
const fun2 = function (n1, n2 ) {
    return n1 + n2
 }
 console.log(fun2(3, 3))

// Armazenar em um array
const array = [function (a, b) {return a + b}]

// Armazenar em um atributo de um objetos
const obj = {}
obj.falar = function() {return 'Opa'}
console.log(obj.falar())

// Passar função como parameter
function run(fun) {
    fun()
}

run(function() {console.log('Executando...')})

