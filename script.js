let contador = 0

function botaoCaixa() {

    let containerCarrinho = document.getElementById('carrinho')
    let pCarrinho = document.getElementById('carrinho-vazio')

    if (pCarrinho && pCarrinho.innerText === 'Seu carrinho está vazio') {
        pCarrinho.remove()
    }


    let listaItens = document.createElement('div')
    containerCarrinho.appendChild(listaItens)

    listaItens.id = 'lista-itens'
    let novoItem = document.createElement('div')
    novoItem.className = 'item-no-carrinho'

    novoItem.innerHTML = ('Caixa de som Bluetooth |  R$ 750,00   <button onclick="removerItem(this)">Remover</button>')

    listaItens.appendChild(novoItem)

    contador++
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
    novoItem.className = 'item-no-carrinho'

    novoItem.innerHTML = ('Fone de ouvido Bluetooth  | R$ 250,00   <button onclick="removerItem(this)">Remover</button>')

    listaItens.appendChild(novoItem)

    contador++
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
    novoItem.className = 'item-no-carrinho'

    novoItem.innerHTML = ('Relógio |  R$ 550,00   <button onclick="removerItem(this)">Remover</button>')

    listaItens.appendChild(novoItem)

    contador++
}



function removerItem(botao) {
    let containerCarrinho = document.getElementById('carrinho')
    
    botao.parentElement.remove()
    contador--

    if (contador === 0) {
        let pCarrinho = document.createElement('p')
        pCarrinho.id = 'carrinho-vazio'
        pCarrinho.innerText = 'Seu carrinho está vazio'
        containerCarrinho.appendChild(pCarrinho)
    }   
}