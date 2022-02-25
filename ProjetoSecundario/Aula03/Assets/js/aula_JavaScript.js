//Print via Console

console.log("Olá Mundo!")


//Variaveis

let nome = "Weslley"
let pessoa = "Thamires"

console.log(nome) 
console.log(pessoa)


//Variavel (Contante) não pode ser mudada

const idade = 32
console.log(idade)
pessoa = "Vida" //uso de variavel após criada
console.log(pessoa)

Numero=500 //Declarando Variavel apenas por colocar nome e valor recebido, isto torna a variavel em global e não é recimendado ouso
console.log(Numero)

//Recomendado usar let ou const para declarar variaveis.

//Numeros
let num = 30
let num2 = 20
let result = num+num2
console.log(result)

let primeiroNome = "Weslley"
let segundoNome = "Teodoro"

//Juntando valores = CONCATENAR
console.log(primeiroNome+" "+segundoNome)

//array
let listaNomes = ["Weslley", "Thamires", "Francileide", "Erika"]
console.log(listaNomes)
//Puxando valores do Array separadamente
console.log(listaNomes[0])
console.log(listaNomes[1])
console.log(listaNomes[2])
console.log(listaNomes[3])

//adicionando valor no Array
listaNomes[4] = 50

console.log(listaNomes)

//trocando valor no Array
listaNomes[4] = "Franciene"
console.log(listaNomes)

//adicionando valorES no Array
let listaNomes2 = []
console.log(listaNomes2)

listaNomes2.push("Weslley",25,35,"Thamire",15)
console.log(listaNomes2)


//Objetos Usar chaves
const Thamires = {
    nome: "Thamires",
    telefone: "3533535",
    cpf: "45275875272",
    cidade:"São Paulo",

}

console.log(Thamires) //Acessando Objeto
// Acessando valores isolados no objeto
console.log(Thamires.telefone)
console.log(Thamires.cpf)
//associando valores
console.log("Minha Cidade é: "+Thamires.cidade)

const Weslley = {
    nome: "Weslley",
    telefone: "3533535",
    cpf: "45275875272",
    cidade:"São Paulo",

}

const Funcionarios=[]
//colocando Objetos dentro de Arrays
Funcionarios.push(Thamires)
Funcionarios.push(Weslley)
console.log(Funcionarios)

//Operadores Básicos
// Soma             => +
// Subtração        => -
// Divisão          => /
// Multiplicação    => *

let numm = 1
console.log(numm)

numm += numm
console.log(numm)

numm = numm + 5
console.log(numm)

//Booleanos e comparações
console.log(10>1)//Comparação Maior
console.log(10<1)//Menor
console.log(10!==1)//Diferente
console.log(10==10)//Igualdade
console.log(10==1)//Igualdade
console.log("10"=== 10) //Igualdade para tipo de dado

//Condicionais (if/else)

if(10 == 11){
    console.log("Os numeros são Iguais")

}else{
    console.log("Os numeros são Diferentes")
}

const Thami = {
    nome: "Thamires",
    idade:  19,
    cidade: "São Paulo"
    
}


if(Thami.idade >= 18 && Thami.cidade == "São Paulo"){
    console.log(Thami.nome+" é maior de Idade e Mora em "+Thami.cidade)
}else{
    console.log(Thami.nome+" não é maior de idade ou não mora em São Paulo")
}

//Operadores Lógicos
// && = E
// || = OU

//funções no JavaScript

function soma(numero1, numero2){

    console.log(numero1 + numero2)
}

soma(50, 60)

function Divisão(numero1, numero2){
    return numero1/numero2
}

let resultado = Divisão(50,2)
console.log(resultado)


//Estrutura de repetição

let filaAtendimento = ["Weslley", "Kessia", "Franciene"]

for(let i = 0; i< filaAtendimento.length; i++){
    
    console.log(filaAtendimento[i])
}




//DOM - Modelo de Objeto do Documento 


let divPessoas = document.querySelector(".pessoas")

divPessoas.innerText = "Wes"