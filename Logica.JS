const acao = 'ativar'
const IMAGEM = document.querySelectorAll('.flex-card-container')

IMAGEM[0].classList.add(acao)

function retirarAcao(){
    const addAcao = document.querySelector(`.${acao}`)
    if(addAcao){
        addAcao.classList.remove(acao)
    }
}

