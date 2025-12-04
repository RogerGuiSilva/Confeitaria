async function carregarCardapio() {
  try {
    const resposta = await fetch("https://confeitariaapi.onrender.com");

    if (!resposta.ok) {
      throw new Error("Erro ao buscar bolos: " + resposta.status);
    }

    const lista = await resposta.json();
    console.log("Dados recebidos:", lista);

    lista.forEach(item => {
  criarItemCardapio(item.nome, item.descricao, item.foto);
});


  } catch (erro) {
    console.error("Falha ao carregar cardápio:", erro);
  }
}
