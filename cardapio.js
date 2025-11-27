
function criarItemCardapio(titulo, descricao, foto) {
    const divItemCardapio = document.createElement('div')
    divItemCardapio.className = 'item-cardapio'

    const h3Titulo = document.createElement('h3')
    h3Titulo.textContent = titulo

    const pDescricao = document.createElement('p')
    pDescricao.textContent = descricao
    pDescricao.className = 'descricao'

    const img = document.createElement('img')
    img.src = foto
    img.className = 'img-item'

    
    const divC = document.getElementById('cardapio')

    divItemCardapio.appendChild(h3Titulo)
    divItemCardapio.appendChild(pDescricao)
    divItemCardapio.appendChild(img)

    divC.appendChild(divItemCardapio)
}
criarItemCardapio(
    'bolo de chocolate', 'Um Classico irresistivel com camadas de chocolate', 'https://comidinhasdochef.com/wp-content/uploads/2019/08/Bolo-de-Chocolate-sem-Batedeira.jpg'
)

criarItemCardapio(
    '>Bolo de Morango', 'Fresco e Frutado estilo Pica Pau', 'https://i.pinimg.com/564x/c1/1c/a7/c11ca74d5d3c447e9c43d3283fca3ee1.jpg'

)

criarItemCardapio(
    '>Bolo de Cenoura', 'bolo que lembra um café da manhã com a vovó', 'https://bolosparavender.com/wp-content/uploads/2025/04/cobertura-para-bolo-de-cenoura-simples.jpg'
)


