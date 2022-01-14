function criarProduto(nome, preco ){
    return{
        Produto: nome,
        Preco: preco
    }
}

console.log( criarProduto('Arroz', 11.99))