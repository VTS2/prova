let botaoAdicionar = document.querySelector('#adicionar-paciente')
botaoAdicionar.addEventListener('click', function(evento){
     
    evento.preventDefault()

   let form = document.querySelector('#form-adiciona')
   
  let produto = obtervaloresDoForm(form)
  adicionarpacientenatabela(produto)
})

function adicionarpacientenatabela(produto){
    let produtoTr = montarTr(produto)
    let tabela = document.querySelector('#tabelaDeProdutos')
    tabela.appendChild(produtoTr)
}

function montarTr(produto){
    let produtoTr = document.createElement('tr')
    produtoTr.classList.add('produto')

    produtoTr.appendChild(montarTd(produto.nomeProduto, 'a'))
    produtoTr.appendChild(montarTd(produto.qtDesponivel, 'b'))
    produtoTr.appendChild(montarTd(produto.preUnitario, 'c'))
    produtoTr.appendChild(montarTd(produto.stsProduto, 'd'))
    
    return produtoTr
}

function montarTd(dado, classe){
    let td = document.createElement('td')
    td.textContent = dado
    td.classList.add(classe)

    return td
}


function obtervaloresDoForm(form){
    let produto = {
        nomePro: form.nomeProduto.value,
        qt: form.qtDesponivel.value,
        pu: form.preUnitario.value,
        stv:form.stsProduto.value
    }
    return produto
}