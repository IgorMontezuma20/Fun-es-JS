let dobro = function (a){
    return 2 * a
}

dobro = (a) =>{
    return 2 * a
}

dobro = a => 2 * a // return implícito.
console.log(dobro(2))

let ola = function(){
    return 'olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // O  _ serve pra ignorar o param.
console.log(ola())