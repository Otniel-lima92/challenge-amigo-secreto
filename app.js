let amigos = [];

function adicionarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nomeAmigo = inputAmigo.value.trim();

    if (nomeAmigo === "") {
        alert("Por favor, insira um nome");
        return;
    }

    if (amigos.includes(nomeAmigo)) {
        alert("Esse nome já está na lista.");
        return;
    }

    amigos.push(nomeAmigo);
    atualizarLista();

    inputAmigo.value = "";
    inputAmigo.focus();
}

function atualizarLista() {
    const listaAmigoUl = document.getElementById("listaAmigos");
    listaAmigoUl.innerHTML = "";

    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigoUl.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Não há amigos para sortear. Adicione nomes primeiro.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    
    const resultadoUl = document.getElementById("resultado");
    resultadoUl.innerHTML = `<li>${amigoSorteado}</li>`;
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("buttonAdicionar").addEventListener("click", adicionarAmigo);
    document.getElementById("buttonSortear").addEventListener("click", sortearAmigo);
});
