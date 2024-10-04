
const banco = [{nome:"arroz integral",quantidade:"10",precoVarejo:"R$11,00",precoAtacado:"R$9,99",descricao:"produto consumivel, muito vendido" }]
resu=''

function teste(){
    let a  = document.getElementById('nomeProduto').value
    let b  = document.getElementById('quantidade').value
    let c  = document.getElementById('precoVarejo').value
    let d  = document.getElementById('precoAtacado').value
    let e  = document.getElementById('descricao').value

    banco.push({nome:a,quantidade:b,precoVarejo:c,precoAtacado:d,descricao:e})
    exibir()
}


function exibir(){
    monstrar=''
    banco.forEach(a=>{
        monstrar +='<br>'+ 'Nome:'+ a.nome +'  ' + 'Quantidade:' + a.quantidade +'  '+ 'Preço varejo:' + a.precoVarejo +'  '+ 'Preço atacado:' + a.precoAtacado +'  '+ 'Descricao:' + a.descricao + '<br>'
    })

    document.getElementById('box').innerHTML = monstrar
} 

exibir()
