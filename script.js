function botaoCaixa() {

    let containerCarrinho = document.getElementById('carrinho')
    let pCarrinho = document.getElementById('carrinho-vazio')

    if (pCarrinho && pCarrinho.innerText === 'Seu carrinho está vazio') {
        pCarrinho.remove()
    }


    let listaItens = document.createElement('div')
    containerCarrinho.appendChild(listaItens)


    let novoItem = document.createElement('div')
    novoItem.id = 'item-no-carrinho'

    novoItem.innerHTML = ('Caixa de som Bluetooth   R$ 750,00   <button onclick="this.parentElement.remove()">Remover</button>')

    listaItens.appendChild(novoItem)
}



function botaoFone() {

    let containerCarrinho = document.getElementById('carrinho')
    let pCarrinho = document.getElementById('carrinho-vazio')

    if (pCarrinho && pCarrinho.innerText === 'Seu carrinho está vazio') {
        pCarrinho.remove()
    }


    let listaItens = document.createElement('div')
    containerCarrinho.appendChild(listaItens)


    let novoItem = document.createElement('div')
    novoItem.id = 'item-no-carrinho'

    novoItem.innerHTML = ('Fone de ouvido Bluetooth   R$ 250,00   <button onclick="this.parentElement.remove()">Remover</button>')

    listaItens.appendChild(novoItem)
}



function botaoRelogio() {

    let containerCarrinho = document.getElementById('carrinho')
    let pCarrinho = document.getElementById('carrinho-vazio')

    if (pCarrinho && pCarrinho.innerText === 'Seu carrinho está vazio') {
        pCarrinho.remove()
    }


    let listaItens = document.createElement('div')
    containerCarrinho.appendChild(listaItens)


    let novoItem = document.createElement('div')
    novoItem.id = 'item-no-carrinho'

    novoItem.innerHTML = ('Relógio   R$ 550,00   <button onclick="this.parentElement.remove()">Remover</button>')

    listaItens.appendChild(novoItem)
}