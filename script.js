/* ==========================================================================
   1. GLOBAL / COMPARTILHADO (Funciona em todas as páginas)
   ========================================================================== */

if (localStorage.getItem('tema') === 'escuro') {
    document.body.classList.add('modo-escuro');
}

document.addEventListener('DOMContentLoaded', atualizarBotao);

function corFundo() {
    let escuro = document.body.classList.toggle('modo-escuro');
    localStorage.setItem('tema', escuro ? 'escuro' : 'claro');
    atualizarBotao();
}

function atualizarBotao() {
    let btnFundo = document.getElementById('botaoCorFundo');
    if (btnFundo) {
        let ehEscuro = document.body.classList.contains('modo-escuro');
        btnFundo.innerText = ehEscuro ? 'Modo Claro' : 'Modo Escuro';
    }
}


/* ==========================================================================
   2. PÁGINA INÍCIO (index.html) - Carrinho de Compras e Formulário
   ========================================================================== */

let contador = 0;
let valorSubtotal = 0;
let valorTotal = 0;

function botaoCaixa() {
    adicionarAoCarrinho('item-no-carrinho-caixa', 'Caixa de som Bluetooth', 750);
}

function botaoFone() {
    adicionarAoCarrinho('item-no-carrinho-fone', 'Fone de ouvido Bluetooth', 250);
}

function botaoRelogio() {
    adicionarAoCarrinho('item-no-carrinho-relogio', 'Relógio', 550);
}

function botaoMonitor() {
    adicionarAoCarrinho('item-no-carrinho-monitor', 'Monitor curvado TekkoWatch', 1200);
}

function botaoPs5() {
    adicionarAoCarrinho('item-no-carrinho-Ps5', 'PS5 com 1 controle e jogos inclusos', 4599);
}

function botaoNotebook() {
    adicionarAoCarrinho('item-no-carrinho-notebook', 'NoteBook com última tecnologia', 5300);
}

// Função base para adicionar produtos (evita repetir código)
function adicionarAoCarrinho(classeItem, nomeProduto, preco) {
    let containerCarrinho = document.getElementById('carrinho');
    let pCarrinho = document.getElementById('carrinho-vazio');

    if (pCarrinho) {
        pCarrinho.remove();
    }

    let listaItens = document.createElement('div');
    listaItens.id = 'lista-itens';

    let novoItem = document.createElement('div');
    novoItem.className = classeItem;
    novoItem.innerHTML = `${nomeProduto} | R$ ${preco.toFixed(2).replace('.', ',')} <button onclick="removerItem(this)">Remover</button>`;

    listaItens.appendChild(novoItem);
    containerCarrinho.appendChild(listaItens);

    contador++;
    valorSubtotal += preco;

    atualizarTotais();
}

function removerItem(botao) {
    let containerCarrinho = document.getElementById('carrinho');
    let classe = botao.parentElement.className;

    if (classe === 'item-no-carrinho-caixa') {
        valorSubtotal -= 750;
    } else if (classe === 'item-no-carrinho-fone') {
        valorSubtotal -= 250;
    } else if (classe === 'item-no-carrinho-relogio') {
        valorSubtotal -= 550;
    } else if (classe === 'item-no-carrinho-monitor') {
        valorSubtotal -= 1200;
    } else if (classe === 'item-no-carrinho-Ps5') {
        valorSubtotal -= 4599;
    } else if (classe === 'item-no-carrinho-notebook') {
        valorSubtotal -= 5300;
    }

    botao.parentElement.remove();
    contador--;

    atualizarTotais();

    if (contador === 0) {
        let pCarrinho = document.createElement('p');
        pCarrinho.id = 'carrinho-vazio';
        pCarrinho.innerText = 'Seu carrinho está vazio';
        containerCarrinho.appendChild(pCarrinho);
    }
}

function atualizarTotais() {
    let pSubtotal = document.getElementById('pSubtotal');
    let pTotal = document.getElementById('pTotal');
    let pDesconto = document.getElementById('desconto');

    if (!pSubtotal || !pTotal || !pDesconto) return;

    valorTotal = valorSubtotal;

    if (valorSubtotal > 1000) {
        valorTotal = valorSubtotal * 0.9;
        pDesconto.innerText = 'Desconto de 10% para compras acima de R$ 1.000,00 aplicado!';
    } else {
        pDesconto.innerText = 'Ganhe 10% de desconto em compras acima de R$ 1.000,00!';
    }

    pSubtotal.innerText = `R$ ${valorSubtotal.toFixed(2)}`;
    pTotal.innerText = `R$ ${valorTotal.toFixed(2)}`;
}

function enviar() {
    let campoNome = document.getElementById('campoNome');
    let campoEmail = document.getElementById('campoEmail');
    
    if (campoNome && campoEmail) {
        alert('Quase lá ' + campoNome.value + '! Enviaremos uma mensagem para o e-mail ' + campoEmail.value + ' para confirmar as informações de endereço.');
    }
}


/* ==========================================================================
   3. PÁGINA HISTÓRIA (historia.html) - Botões de Resumo
   ========================================================================== */

function aparecerHistoria() {
    let his = document.getElementById('historia-escondida');
    if (his) {
        his.style.display = (his.style.display === 'block') ? 'none' : 'block';
    }
}

function aparecerCoala() {
    let coa = document.getElementById('coala-escondido');
    if (coa) {
        coa.style.display = (coa.style.display === 'block') ? 'none' : 'block';
    }
}
