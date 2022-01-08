const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falarDePessoa = pessoa.falar.bind(pessoa) //.bind() é o método responsável por prender um determinado objeto pra que ele receba o this.
falarDePessoa()