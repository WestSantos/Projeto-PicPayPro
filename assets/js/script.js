
const listaOpcoes = document.querySelector(".secaoDetalhesConta_opcoesTransacoes")

listaOpcoes.addEventListener("click", identificarOpcoes)

function identificarOpcoes(event){

    const elemento = event.target

    if(elemento.tagName == "LI"){

        const id = elemento.id

        const secaoEscolha = document.querySelector(`div[data-id="${id}"]`)

        removeClasseMostrar()
       
        secaoEscolha.classList.add("mostrar")
    }
}

function removeClasseMostrar(){
    const divs = document.querySelectorAll(".secaoTransacao .container div")
    for(let i = 0; i < divs.length; i++){

        divs[i].classList.remove("mostrar")
    }
}
