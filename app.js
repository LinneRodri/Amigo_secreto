let amigos = [];

  const button = document.querySelector(".button-add");

  function adicionarAmigos() {
  const input = document.querySelector(".input-name");
  const nome = input.value.trim();

  if (nome === "") {
    alert("Por favor, insira um nome.");
    return;
  }

    amigos.push(nome);
    input.value = "";
    atualizarListaAmigos();
  }

  button.addEventListener("click", adicionarAmigos);

function atualizarListaAmigos() {
  const lista = document.querySelector(".name-list");
  lista.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("A lista de amigos está vazia. Adicione amigos antes de sortear.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);

  const amigoSorteado = amigos[indiceAleatorio];

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>Amigo secreto sorteado: <strong>${amigoSorteado}</strong></li>`;
}