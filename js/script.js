function calcularMedia(notas){
    
    let soma = 0
    for (c = 0; c < notas.length; c++) {
        soma += notas[c];
    }
    media = soma / notas.length;

    return media;
}

let media;

function aprovacao(notas){ //recebe media como parametro para fazer o calculo se o aluno está ou não aprovado
    
    let media = calcularMedia(notas);

    let condicao =  media >= 8
     ? "aprovado" : "reprovado";// se a media for maior ou igual a sete "aprovado" : senão for "reprovado"
    
    return 'Média:' + media + ' - Resultado: ' + condicao  
}

//console.log('Média: ' + calcularMedia([4, 8, 7, 10, 9]))
//console.log('Aluno ' + aprovacao(calcularMedia([4, 8, 7, 10, 9])))
console.log(aprovacao([4, 8, 7, 10, 9]));

//console.log('Média: ' + calcularMedia([1, 10, 8, 6, 9]))
//console.log('Aluno ' + aprovacao(calcularMedia([1, 10, 8, 6, 9])))
console.log(aprovacao([8, 10, 8, 6, 9]))


//console.log('Média: ' + calcularMedia([9, 0, 3, 5, 10]))
//console.log('Aluno ' + aprovacao(calcularMedia([9, 10, 3, 5, 10])))
console.log(aprovacao([9, 10, 3, 5, 10]))



// Função Recursiva

function contagemRegressiva(numero){

    console.log(numero);

    let proximoNumero = numero - 1;

    if(proximoNumero > 0)
        contagemRegressiva(proximoNumero); // 9 na primeira vez depois vem decrescendo

}

//contagemRegressiva(50);

// formulario-01

document.addEventListener('submit', function( evento){
    
    evento.preventDefault();
    evento.stopPropagation();

    let formulario = document.getElementById('formulario-01');

    let dados = new FormData(formulario);

    let objeto = {};

    let notas = [];

    for(let key of dados.keys()) {
        objeto[key] = dados.get(key);
    
        // adicionar itens no array
        notas.push( parseInt(dados.get(key)));
    }

    console.log(notas);

    console.log(objeto);

    document.getElementById('resultado').innerHTML = aprovacao(notas);

    

});

