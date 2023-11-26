function calcularMedia( notas ) {
            
    let soma = 0;
    for ( c = 0; c < notas.length; c++) {
        soma += notas[c];
    }

    media = soma / notas.length;

    return media;

}

let media; // escopo global passa a ser utilizada dentro da function caso não seja chamada na function

function aprovacao( notas ) {
    
    let media = calcularMedia( notas); // escopo da função
    
    let condicao = media >= 8 ? 'aprovado' : 'reprovado';
    
    return 'Média: ' + media + ' - Resultado: ' + condicao;
    
}

// Função Recursivas

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

