//array 
let ingredientes = ["farinha", "agua", "sal", "corante"]
//console.log(ingredientes[0])



//Objetos sao uma lista de caracteristicas/propriedades

let personagem = {
    nome: "João",
    nivel: 10,
    vida: 100,
    forca: 200,
    magia: 200,
    mana: 200
}

console.log(personagem.magia)


//Uma funcao passa por 3 etapas

//1 - INPUT                  Entrada/Sao os dados inicias que eu vou dar para a funcao
//2 - PROCESSAMENTO          
//3 - OUTPUT                 Da um resultado/Entra um retorno/Saida

function somar(a,b){
    let resultado = a + b
    return resultado
}

let x = somar(15, 5)