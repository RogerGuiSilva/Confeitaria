function criarItemCardapio(nome, descricao, foto, preco) {
  const container = document.getElementById("cardapio");

  const item = document.createElement("div");
  item.classList.add("item-cardapio");

  item.innerHTML = `
    <img src="${foto}" alt="${nome}">
    <h3>${nome}</h3>
    <p>${descricao}</p>
    <strong>R$ ${preco}</strong>
  `;

  container.appendChild(item);
}

async function carregarCardapio() {
  try {
    
    const resposta = await fetch("https://confeitariaapi.onrender.com/cardapio");




    if (!resposta.ok) {
      throw new Error("Erro ao buscar cardápio: " + resposta.status);
    }

   
    const lista = await resposta.json();

    console.log("Resposta da API:", lista);
    console.log("É array?", Array.isArray(lista));

    
    if (Array.isArray(lista)) {
      lista.forEach(item => {
        criarItemCardapio(
          item.nome,
          item.descricao,
          item.foto,
          item.preco
        );
      });

    
    } else {
      criarItemCardapio(
        lista.nome,
        lista.descricao,
        lista.foto,
        lista.preco
      );
    }

  } catch (erro) {
    console.error("Falha ao carregar cardápio:", erro);
  }
}

carregarCardapio();
