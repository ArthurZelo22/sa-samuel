let contador = 0
let valorSubtotal = 0
let valorTotal = 0

function botaoCaixa() {

    let containerCarrinho = document.getElementById('carrinho')
    let pCarrinho = document.getElementById('carrinho-vazio')
    let subtotal = document.getElementById('pSubtotal')
    let total = document.getElementById('pTotal')
    let pDesconto = document.getElementById('desconto')

    if (pCarrinho && pCarrinho.innerText === 'Seu carrinho está vazio') {
        pCarrinho.remove()
    }


    let listaItens = document.createElement('div')
    containerCarrinho.appendChild(listaItens)

    listaItens.id = 'lista-itens'
    let novoItem = document.createElement('div')
    novoItem.className = 'item-no-carrinho-caixa'

    novoItem.innerHTML = ('Caixa de som Bluetooth |  R$ 750,00   <button onclick="removerItem(this)">Remover</button>')

    listaItens.appendChild(novoItem)

    contador++

    valorSubtotal += 750
    pSubtotal.innerText = `${(valorSubtotal).toFixed(2)}`

    valorTotal = valorSubtotal

    if (valorSubtotal > 1000){
        valorTotal = valorSubtotal * 0.9

        pDesconto.innerText = 'Desconto de 10% para compras acima de R$ 1.000,00 aplicado!'
    }

    pTotal.innerText = `${(valorTotal).toFixed(2)}`
}



function botaoFone() {

    let containerCarrinho = document.getElementById('carrinho')
    let pCarrinho = document.getElementById('carrinho-vazio')
    let subtotal = document.getElementById('pSubtotal')
    let total = document.getElementById('pTotal')
    let pDesconto = document.getElementById('desconto')

    if (pCarrinho && pCarrinho.innerText === 'Seu carrinho está vazio') {
        pCarrinho.remove()
    }


    let listaItens = document.createElement('div')
    containerCarrinho.appendChild(listaItens)


    let novoItem = document.createElement('div')
    novoItem.className = 'item-no-carrinho-fone'

    novoItem.innerHTML = ('Fone de ouvido Bluetooth  | R$ 250,00   <button onclick="removerItem(this)">Remover</button>')

    listaItens.appendChild(novoItem)

    contador++

    valorSubtotal += 250
    pSubtotal.innerText = `${(valorSubtotal).toFixed(2)}`

    valorTotal = valorSubtotal

    if (valorSubtotal > 1000){
        valorTotal = valorSubtotal * 0.9
        pDesconto.innerText = 'Desconto de 10% para compras acima de R$ 1.000,00 aplicado!'
    }

    pTotal.innerText = `${(valorTotal).toFixed(2)}`
}



function botaoRelogio() {

    let containerCarrinho = document.getElementById('carrinho')
    let pCarrinho = document.getElementById('carrinho-vazio')
    let subtotal = document.getElementById('pSubtotal')
    let total = document.getElementById('pTotal')
    let pDesconto = document.getElementById('desconto')

    if (pCarrinho && pCarrinho.innerText === 'Seu carrinho está vazio') {
        pCarrinho.remove()
    }


    let listaItens = document.createElement('div')
    containerCarrinho.appendChild(listaItens)


    let novoItem = document.createElement('div')
    novoItem.className = 'item-no-carrinho-relogio'

    novoItem.innerHTML = ('Relógio |  R$ 550,00   <button onclick="removerItem(this)">Remover</button>')

    listaItens.appendChild(novoItem)

    contador++

    valorSubtotal += 550
    pSubtotal.innerText = `${(valorSubtotal).toFixed(2)}`

    valorTotal = valorSubtotal

    if (valorSubtotal > 1000){
        valorTotal = valorSubtotal * 0.9
        pDesconto.innerText = 'Desconto de 10% para compras acima de R$ 1.000,00 aplicado!'
    }

    pTotal.innerText = `${(valorTotal).toFixed(2)}`
}



function removerItem(botao) {
    let containerCarrinho = document.getElementById('carrinho')
    let pDesconto = document.getElementById('desconto')

    if (botao.parentElement.className === 'item-no-carrinho-caixa') {

        valorSubtotal -= 750

        botao.parentElement.remove()
        contador--

        pSubtotal.innerText = `${(valorSubtotal).toFixed(2)}`

        valorTotal = valorSubtotal

        if (valorSubtotal > 1000){
        valorTotal = valorSubtotal * 0.9
        pDesconto.innerText = 'Desconto de 10% para compras acima de R$ 1.000,00 aplicado!'
        }

        else{
            pDesconto.innerText = 'Ganhe 10% de desconto em compras acima de R$ 1.000,00!'
        }

        pTotal.innerText = `${(valorTotal).toFixed(2)}`
    }

    else if (botao.parentElement.className === 'item-no-carrinho-fone') {

        valorSubtotal -= 250

        botao.parentElement.remove()
        contador--

        pSubtotal.innerText = `${(valorSubtotal).toFixed(2)}`

        valorTotal = valorSubtotal

        if (valorSubtotal > 1000){
        valorTotal = valorSubtotal * 0.9
        pDesconto.innerText = 'Desconto de 10% para compras acima de R$ 1.000,00 aplicado!'
        }

        else{
            pDesconto.innerText = 'Ganhe 10% de desconto em compras acima de R$ 1.000,00!'
        }

        pTotal.innerText = `${(valorTotal).toFixed(2)}`
    }

    else if (botao.parentElement.className === 'item-no-carrinho-relogio') {

        valorSubtotal -= 550

        botao.parentElement.remove()
        contador--

        pSubtotal.innerText = `${(valorSubtotal).toFixed(2)}`

        valorTotal = valorSubtotal

        if (valorSubtotal > 1000){
        valorTotal = valorSubtotal * 0.9
        pDesconto.innerText = 'Desconto de 10% para compras acima de R$ 1.000,00 aplicado!'
        }

        else{
            pDesconto.innerText = 'Ganhe 10% de desconto em compras acima de R$ 1.000,00!'
        }

        pTotal.innerText = `${(valorTotal).toFixed(2)}`
    }


    if (contador === 0) {
        let pCarrinho = document.createElement('p')
        pCarrinho.id = 'carrinho-vazio'
        pCarrinho.innerText = 'Seu carrinho está vazio'
        containerCarrinho.appendChild(pCarrinho)
    }   
}

function aparecerHistoria() {
    let his = document.getElementById('historia-escondida')

    if (his.style.display === 'none') {
        his.style.display = 'block'
    } else {
        his.style.display = 'none'
    }
}

function aparecerCoala() {
    let coa = document.getElementById('coala-escondido')

    if (coa.style.display === 'none') {
        coa.style.display = 'block'
    } else {
        coa.style.display = 'none'
    }
}

function corFundo(){
    let body = document.getElementById('body')

    body.classList.toggle('modo-escuro');
}