// --- DADOS DO CARDÁPIO ---
const menuPadrao = [
    //PIZZAS (ids 100 - 133)
    { id:100, name:"Romeu E Julieta", price:52.99, category:"pizza", desc:"Goiabada, Requeijão cremoso", img:"assets/pizzas tradicionais/romeu e julieta.jpg" },
    { id:101, name:"Prestigio", price:52.99, category:"pizza", desc:"Creme de avelã, coco ralado", img:"assets/pizzas tradicionais/prestigio.jpg" },
    { id:102, name:"Milho Verde", price:52.99, category:"pizza", desc:"Mussarela, milho, orégano.", img:"assets/pizzas tradicionais/milho verde.jpg" },
    { id:103, name:"Marguerita", price:52.99, category:"pizza", desc:"Molho, Mussarela, tomate, manjericão, orégano.", img:"assets/pizzas tradicionais/marguerita.jpg" },
    { id:104, name:"M&M's", price:52.99, category:"pizza", desc:"Chocolate e m&m's", img:"assets/pizzas tradicionais/mms.jpg" },
    { id:105, name:"Frango Com Cheddar", price:52.99, category:"pizza", desc:"Mussarela, frango com cheddar e orégano", img:"assets/pizzas tradicionais/frango com cheddar.jpg" },
    { id:106, name:"Frango Com Catupiry", price:52.99, category:"pizza", desc:"Mussarela, frango com catupiry e orégano", img:"assets/pizzas tradicionais/frango com catupiry.jpg" },
    { id:107, name:"Da Casa", price:52.99, category:"pizza", desc:"Mussarela, manjericão, tomate, bacon, milho e orégano", img:"assets/pizzas tradicionais/da casa.jpg" },
    { id:108, name:"Calabresa", price:52.99, category:"pizza", desc:"Mussarela, calabresa, cebola, orégano", img:"assets/pizzas tradicionais/calabresa.jpg" },
    { id:109, name:"Calabresa Com Catupiry", price:52.99, category:"pizza", desc:"Mussarela, calabresa, catupiry e orégano", img:"assets/pizzas tradicionais/calabresa com catupiry.jpg" },
    { id:110, name:"Calabresa Com Cheddar", price:52.99, category:"pizza", desc:"Mussarela, calabresa, cheddar e orégano", img:"assets/pizzas tradicionais/calabresa com cheddar.jpg" },
    { id:111, name:"Brigadeiro", price:52.99, category:"pizza", desc:"Chocolate e granulado", img:"assets/pizzas tradicionais/brigadeiro.jpg" },
    { id:112, name:"Beijinho", price:52.99, category:"pizza", desc:"Chocolate branco, coco ralado", img:"assets/pizzas tradicionais/beijinho.jpg" },
    { id:113, name:"Banana Mesclada", price:52.99, category:"pizza", desc:"Banana da terra, canela e melaço", img:"assets/pizzas tradicionais/banana mesclada.jpg" },
    { id:114, name:"Baiana", price:52.99, category:"pizza", desc:"Mussarela, calabresa triturada, pimenta calabresa, ervilha e orégano", img:"assets/pizzas tradicionais/baiana.jpg" },
    { id:115, name:"Bacon", price:52.99, category:"pizza", desc:"Mussarela, bacon, cebola e orégano", img:"assets/pizzas tradicionais/bacon.jpg" },
    { id:116, name:"Frango", price:52.99, category:"pizza", desc:"Molho, Mussarela, Frango e Orégano", img:"assets/pizzas tradicionais/frango.jpg" },
    { id:117, name:"Portuguesa", price:52.99, category:"pizza", desc:"Mussarela, Presunto, Ovos, Azeitona, Cebola, Pimentão e orégano", img:"assets/pizzas tradicionais/portuguesa.jpg" },
    { id:118, name:"Crocante", price:52.99, category:"pizza", desc:"Mussarela, presunto, milho verde, batata palha e orégano", img:"assets/pizzas tradicionais/crocante.jpg" },
    { id:119, name:"Top Baiana", price:52.99, category:"pizza", desc:"Mussarela, bacon, frango, catupiry, ervilha , orégano.", img:"assets/pizzas tradicionais/top baiana.jpg" },
    { id:120, name:"Lombinho", price:52.99, category:"pizza", desc:"Mussarela, lombinho e orégano", img:"assets/pizzas tradicionais/lombinho.jpg" },
    { id:121, name:"Lombinho com Cheddar", price:52.99, category:"pizza", desc:"Mussarela, lombinho, cheddar e orégano", img:"assets/pizzas tradicionais/lombinho com cheddar.jpg" },
    { id:122, name:"Lombinho com Catupiry", price:52.99, category:"pizza", desc:"Mussarela, lombinho, catupiry e orégano", img:"assets/pizzas tradicionais/lombinho com catupiry.jpg" },
    { id:123, name:"Mussarela", price:52.99, category:"pizza", desc:"Molho de tomate, mussarela e oregano", img:"assets/pizzas tradicionais/mussarela.jpg" },
    { id:124, name:"Misto", price:52.99, category:"pizza", desc:"Molho de tomate, mussarela, presunto e oregano", img:"assets/pizzas tradicionais/misto.jpg" },
    { id:125, name:"Arrumadinho", price:52.99, category:"pizza", desc:"Molho de tomate, mussarela, calabresa picada, bacon, barbecue e orágano.", img:"assets/pizzas tradicionais/arrumadinho.jpg" },
    { id:126, name:"4 Queijos", price:52.99, category:"pizza", desc:"Molho, Mussarela,Cheddar, Parmesão, Catupiry e Oregano.", img:"assets/pizzas tradicionais/4 queijos.jpg" },
    { id:127, name:"Texana", price:52.99, category:"pizza", desc:"Molho, mussarela, frango, bacon, azeitona, barbecue & orégano.", img:"assets/pizzas tradicionais/texana.jpg" },
    { id:128, name:"Três sabores", price:52.99, category:"pizza", desc:"Molho, mussarela, lombinho, calabrresa triturada, milho & orégano", img:"assets/pizzas tradicionais/tres sabores.jpg" },
    { id:129, name:"Moda do chef", price:52.99, category:"pizza", desc:"Molho, Milho + Bacon + Catupiry", img:"assets/pizzas tradicionais/moda do chef.jpg" },
    { id:130, name:"Texas da top", price:52.99, category:"pizza", desc:"Molho tomate, Mussarela, frango, gorgonzola, bacon barbecue.", img:"assets/pizzas tradicionais/texas da top.jpg" },
    { id:131, name:"Baianissima", price:52.99, category:"pizza", desc:"Molho de tomate, mussarela, calabresa, presunto, ovo, requeijão cremoso, provolone, cebola", img:"assets/pizzas tradicionais/baianissima.jpg" },
    { id:132, name:"Lombo do Chefe", price:52.99, category:"pizza", desc:"Molho de tomate , Lombinho , Mussarela , Cebola e Barbecue", img:"assets/pizzas tradicionais/lombo do chefe.jpg" },
    { id:133, name:"Queijada", price:52.99, category:"pizza", desc:"Molho de tomate, mussarela, queijo coalho, melaço.", img:"assets/pizzas tradicionais/queijada.jpg" },

    // CALZONES (MÉDIO)
    { id: 151, name: "O Melhor (Calzone)", price: 40.99, category: "calzone", desc: "Mussarela, bacon, frango, cebola, calabresa picada e orégano.", img: "assets/calzones/20.jpg" },
    { id: 152, name: "Oxente (Calzone)", price: 40.99, category: "calzone", desc: "Mussarela, ervilha, presunto, ovos, lombinho, azeitona e orégano.", img: "assets/calzones/21.jpg" },
    { id: 153, name: "Me Leva (Calzone)", price: 40.99, category: "calzone", desc: "Mussarela, lombinho, peito de peru, milho, cheddar e orégano.", img: "assets/calzones/22.jpg" },
    { id: 154, name: "Boa Vista (Calzone)", price: 40.99, category: "calzone", desc: "Mussarela, presunto, calabresa picada, catupiry e orégano.", img: "assets/calzones/23.jpg" },
    { id: 155, name: "De Nego (Calzone)", price: 40.99, category: "calzone", desc: "Mussarela, frango, presunto, ervilha, milho, cheddar e orégano.", img: "assets/calzones/24.jpg" },
    { id: 156, name: "5 Queijos (Calzone)", price: 40.99, category: "calzone", desc: "Mussarela, provolone, catupiry, gorgonzola, parmesão e orégano.", img: "assets/calzones/25.jpg" },
    
    // COMBOS & BEBIDAS
    { id: 221, name: "GRANDE ESTICADO", price: 61.99, category: "combo", desc: "PIZZA GRANDE, REFRIGERANTE , BORDA CHEDDAR.", img: "" },
    { id: 222, name: "DOCE ENCONTRO", price: 71.40, category: "combo", desc: "1 Pizza grande, 1 açai 360ml com 3 adicionais, 1 refrigerante 1L.", img: "" },
    { id: 223, name: "Combo Pizza Grande", price: 74.99, category: "combo", desc: "Mussarela, Calabresa ou Marguerita + Pizza Média Doce + Refri 1 litro.", img: "" },
    { id: 224, name: "Combo Família", price: 91.99, category: "combo", desc: "1 Pizza G + 1 Refri 2L.", img: "" },
    { id: 225, name: "Combo Mozão", price: 75.99, category: "combo", desc: "Pizza em formato de coração de até dois sabores, com borda recheada e um refrigerante grátis.", img: "" },
    { id: 226, name: "Combo Calzone + Bebida", price: 56.99, category: "combo", desc: "Calzonezão recheado daquele jeito que só a Top Baiana sabe fazer + Bebida", img: "" },
    { id: 201, name: "Pepsi 1L", price: 8.00, category: "bebida", desc: "Gelada", img: "" },
    { id: 202, name: "Guaraná 1L", price: 8.00, category: "bebida", desc: "Gelada", img: "" }
];

const opcionais = [
    { name: "Borda de Catupiry", price: 10.00 },
    { name: "Borda de Cheddar", price: 10.00 },
    { name: "Bacon Extra", price: 8.00 },
    { name: "Queijo Extra", price: 8.00 }
];

let menuItems = menuPadrao; 
let cart = [];
let itemSelecionado = null; 
// Tenta carregar cliente, se der erro, inicia nulo
let cliente = null;
try {
    cliente = JSON.parse(localStorage.getItem('clienteTopBaiana'));
} catch (e) {
    console.log("Erro ao carregar cliente", e);
}

// --- FUNÇÕES GLOBAIS (PARA O HTML ENCONTRAR) ---

// Função movida para escopo global para evitar erro "is not defined"
function abrirCardapio() {
    const home = document.getElementById('home-screen');
    const app = document.getElementById('app-screen');
    
    if(home && app) {
        home.classList.remove('active');
        setTimeout(() => {
            home.style.display = 'none';
            app.classList.add('active');
            mudarAba('tab-pedidos');
        }, 200);
    } else {
        console.error("Elementos de tela não encontrados");
    }
}

function irParaCarrinho() {
    mudarAba('tab-carrinho'); 
}

function mudarAba(tabId) {
    // Esconde todas as abas
    document.querySelectorAll('.tab-content').forEach(t => {
        t.style.display = 'none'; 
        t.classList.remove('active');
    });

    // Remove active do menu
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    
    // Mostra aba alvo
    const tab = document.getElementById(tabId);
    if(tab) {
        tab.style.display = 'block';
        setTimeout(() => tab.classList.add('active'), 10); 
    }
    
    // Ativa ícone do menu
    const nav = document.querySelector(`.nav-item[data-target="${tabId}"]`);
    if(nav) nav.classList.add('active');

    // Atualiza título
    const titulos = {
        'tab-pedidos': 'Cardápio',
        'tab-promocoes': 'Ofertas',
        'tab-carrinho': 'Carrinho',
        'tab-perfil': 'Meu Perfil'
    };
    const headerTitle = document.getElementById('header-title');
    if(headerTitle && titulos[tabId]) headerTitle.innerText = titulos[tabId];
}

// --- INICIALIZAÇÃO ---
document.addEventListener('DOMContentLoaded', () => {
    // 1. Ativa botões de adicionar já existentes no HTML
    reativarBotoesAdicionar();
    
    // 2. Configura navegação
    setupNavigation();
    
    // 3. Carrega dados salvos
    updateCartUI();
    carregarDadosPerfil();

    // 4. Eventos Globais
    const checkoutBtn = document.getElementById('checkout-btn');
    if(checkoutBtn) checkoutBtn.addEventListener('click', finalizarPedido);
    
    const paySelect = document.getElementById('payment-select');
    if(paySelect) {
        paySelect.addEventListener('change', (e) => {
            const trocoDiv = document.getElementById('troco-div');
            if(trocoDiv) trocoDiv.style.display = e.target.value === 'Dinheiro' ? 'block' : 'none';
        });
    }

    aplicarMascaraTelefone('client-phone');
    aplicarMascaraTelefone('perfil-phone');
});

function setupNavigation() {
    // Botão Voltar (App -> Home)
    const back = document.getElementById('back-home-btn');
    if(back) back.addEventListener('click', () => {
        document.getElementById('app-screen').classList.remove('active');
        document.getElementById('home-screen').classList.add('active');
        document.getElementById('home-screen').style.display = 'flex';
    });

    // Botões do Menu Inferior
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(nav => {
        nav.addEventListener('click', (e) => {
            e.preventDefault(); 
            const target = nav.getAttribute('data-target');
            mudarAba(target);
        });
    });
}

// --- LÓGICA DE PRODUTOS ---
function reativarBotoesAdicionar() {
    const btns = document.querySelectorAll('.add-btn');
    btns.forEach(btn => {
        const novoBtn = btn.cloneNode(true);
        btn.parentNode.replaceChild(novoBtn, btn);
        
        novoBtn.addEventListener('click', (e) => {
            const card = e.target.closest('.item-card');
            const id = parseInt(card.getAttribute('data-id'));
            
            // Tenta achar no JS, se não achar, cria do HTML (para promos)
            let item = menuItems.find(i => i.id === id);
            if(!item) {
                const name = card.getAttribute('data-name');
                const price = parseFloat(card.getAttribute('data-price'));
                if(name && price) {
                    item = { id: id, name: name, price: price, category: 'promo' };
                }
            }
            
            if(item) {
                // Se for pizza e não for promo fechada, abre opções
                if (item.category === 'pizza') {
                    abrirModalOpcoes(item);
                } else {
                    addItemToCart(item);
                }
            } else {
                console.error("Item sem dados");
            }
        });
    });
}

// --- MODAL DE OPÇÕES ---
function abrirModalOpcoes(item) {
    itemSelecionado = item;
    const modal = document.getElementById('modal-opcoes');
    document.getElementById('modal-item-name').innerText = item.name;
    document.getElementById('obs-item').value = ''; 
    
    const lista = document.getElementById('lista-adicionais');
    lista.innerHTML = '<p class="section-label">Turbine sua pizza:</p>';
    
    opcionais.forEach((op, index) => {
        lista.innerHTML += `
            <div class="opcao-row">
                <label style="display:flex; align-items:center; gap:10px; color:#fff;">
                    <input type="checkbox" class="check-adicional" value="${index}" onchange="calcularTotalModal()" style="width:20px; height:20px;">
                    ${op.name}
                </label>
                <span>+ ${formatMoney(op.price)}</span>
            </div>`;
    });

    atualizarTotalModal(item.price);
    modal.classList.add('active');
}

// Tornando globais para o HTML acessar
window.fecharModalOpcoes = () => document.getElementById('modal-opcoes').classList.remove('active');

window.calcularTotalModal = () => {
    let total = itemSelecionado.price;
    document.querySelectorAll('.check-adicional:checked').forEach(c => {
        total += opcionais[c.value].price;
    });
    atualizarTotalModal(total);
}

function atualizarTotalModal(valor) {
    document.getElementById('modal-item-total').innerText = formatMoney(valor);
}

window.confirmarAdicaoCarrinho = () => {
    let extras = [];
    let precoExtras = 0;
    document.querySelectorAll('.check-adicional:checked').forEach(c => {
        extras.push(opcionais[c.value].name);
        precoExtras += opcionais[c.value].price;
    });

    const obs = document.getElementById('obs-item').value;
    const itemFinal = {
        ...itemSelecionado,
        uniqueId: Date.now(),
        price: itemSelecionado.price + precoExtras,
        extras: extras,
        observacao: obs,
        qty: 1
    };

    cart.push(itemFinal);
    updateCartUI();
    showToast(`${itemSelecionado.name} adicionada!`);
    fecharModalOpcoes();
}

// --- CARRINHO ---
function addItemToCart(item) {
    const existing = cart.find(i => i.id === item.id && (!i.extras || i.extras.length === 0));
    if(existing) {
        existing.qty++;
    } else {
        cart.push({ ...item, qty: 1, extras: [], observacao: '' });
    }
    updateCartUI();
    showToast(`+1 ${item.name} add!`);
}

window.removerItemCarrinho = (index) => {
    cart.splice(index, 1);
    updateCartUI();
}

function updateCartUI() {
    const list = document.getElementById('cart-items-list');
    const countBadge = document.getElementById('cart-count');
    const totalEl = document.getElementById('cart-total-value');
    const subtotalEl = document.getElementById('cart-subtotal');
    const checkoutBtn = document.getElementById('checkout-btn');
    
    if(!list) return;

    list.innerHTML = '';
    let total = 0;
    let count = 0;

    if(cart.length === 0) {
        list.innerHTML = '<div class="empty-cart" style="text-align:center; padding:20px; color:#aaa;"><p>Seu carrinho está vazio.</p></div>';
        if(checkoutBtn) checkoutBtn.disabled = true;
    } else {
        if(checkoutBtn) checkoutBtn.disabled = false;
        cart.forEach((item, index) => {
            total += item.price * item.qty;
            count += item.qty;
            
            let extrasHtml = item.extras && item.extras.length ? `<div class="cart-extras" style="font-size:0.8rem; color:#00e676;">+ ${item.extras.join(', ')}</div>` : '';
            let obsHtml = item.observacao ? `<div class="cart-obs" style="font-size:0.8rem; color:#aaa;">" ${item.observacao} "</div>` : '';

            list.innerHTML += `
                <div class="cart-item" style="display:flex; justify-content:space-between; align-items:center;">
                    <div class="cart-item-info">
                        <h4 style="color:#fff;">${item.name}</h4>
                        ${extrasHtml}
                        ${obsHtml}
                        <small style="color:#ffb700;">${formatMoney(item.price)} x ${item.qty}</small>
                    </div>
                    <div class="cart-controls">
                        <button class="delete-btn" onclick="removerItemCarrinho(${index})" style="background:#d32f2f;"><i class="fas fa-trash"></i></button>
                    </div>
                </div>`;
        });
    }

    if(countBadge) {
        countBadge.innerText = count;
        countBadge.style.display = count > 0 ? 'flex' : 'none';
    }
    if(totalEl) totalEl.innerText = formatMoney(total);
    if(subtotalEl) subtotalEl.innerText = formatMoney(total);
}

// --- PERFIL E DADOS ---
function carregarDadosPerfil() {
    if (cliente) {
        setValue('perfil-name', cliente.nome);
        setValue('perfil-phone', cliente.telefone);
        setValue('perfil-address', cliente.endereco);
        setValue('address-input', cliente.endereco);
    }
}

window.salvarPerfilCompleto = () => {
    const nome = document.getElementById('perfil-name').value;
    const telefone = document.getElementById('perfil-phone').value;
    const endereco = document.getElementById('perfil-address').value;

    if (!nome || telefone.length < 14) {
        alert("Preencha nome e telefone corretamente.");
        return;
    }

    cliente = { nome, telefone, endereco };
    localStorage.setItem('clienteTopBaiana', JSON.stringify(cliente));
    setValue('address-input', endereco);
    showToast("Dados salvos!");
};

window.fazerLogout = () => {
    if(confirm("Deseja desconectar e limpar os dados deste aparelho?")) {
        localStorage.removeItem('clienteTopBaiana');
        cliente = null;
        setValue('perfil-name', '');
        setValue('perfil-phone', '');
        setValue('perfil-address', '');
        showToast("Desconectado.");
        setTimeout(() => location.reload(), 1000);
    }
};

// --- CHECKOUT ---
function finalizarPedido() {
    if(!cliente) {
        document.getElementById('modal-cadastro').classList.add('active');
        return;
    }
    
    const address = document.getElementById('address-input').value;
    const pay = document.getElementById('payment-select').value;
    const troco = document.getElementById('troco-input').value;

    if(!address || address.length < 5) {
        alert('Digite o endereço de entrega!');
        return;
    }

    let msg = `*PEDIDO TOP BAIANA*\n*Cliente:* ${cliente.nome}\n------------------\n`;
    let total = 0;
    cart.forEach(i => {
        msg += `${i.qty}x ${i.name} ............ ${formatMoney(i.price * i.qty)}\n`;
        if(i.extras && i.extras.length) msg += `   + ${i.extras.join(', ')}\n`;
        if(i.observacao) msg += `   (Obs: ${i.observacao})\n`;
        total += i.price * i.qty;
    });

    msg += `------------------\n*TOTAL: ${formatMoney(total)}*\n`;
    msg += `Pagamento: ${pay}`;
    if(pay === 'Dinheiro' && troco) msg += ` (Troco p/ ${troco})`;
    msg += `\n\n*Entrega:*\n${address}\nTel: ${cliente.telefone}`;

    window.open(`https://wa.me/5571999999999?text=${encodeURIComponent(msg)}`);
}

// Globais para os modais
window.fecharModal = () => document.getElementById('modal-cadastro').classList.remove('active');
window.salvarCliente = () => {
    const nome = document.getElementById('client-name').value;
    const tel = document.getElementById('client-phone').value;
    if(nome && tel.length >= 14) {
        cliente = { nome, telefone: tel };
        localStorage.setItem('clienteTopBaiana', JSON.stringify(cliente));
        fecharModal();
        finalizarPedido();
    } else {
        alert("Preencha os dados corretamente.");
    }
};

// --- UTILITÁRIOS ---
function formatMoney(val) { return val.toLocaleString('pt-BR', {style:'currency', currency:'BRL'}); }

function showToast(msg) {
    const box = document.getElementById('toast-box');
    if(box) {
        const t = document.createElement('div');
        t.className = 'toast';
        t.innerHTML = `<i class="fas fa-check"></i> ${msg}`;
        box.appendChild(t);
        setTimeout(() => t.remove(), 3000);
    }
}

function setValue(id, val) {
    const el = document.getElementById(id);
    if(el) el.value = val || '';
}

function aplicarMascaraTelefone(id) {
    const el = document.getElementById(id);
    if(el) {
        el.addEventListener('input', (e) => {
            let x = e.target.value.replace(/\D/g, '');
            if (x.length > 11) x = x.substring(0, 11);
            x = x.replace(/^(\d{2})(\d)/g, '($1) $2');
            x = x.replace(/(\d)(\d{4})$/, '$1-$2');
            e.target.value = x;
        });
    }
}