function calcularMedia( notas ) {

    let soma = 0;
    for( c = 0; c < notas.length; c++) {
        soma += notas[c];
    }

    media = soma / notas.length;

    return media;

}

let media; // escopo global

function aprovacao( notas ) {

    let media = calcularMedia( notas ); // escopo da função

    let condicao = media >= 8 ? "aprovado" : "reprovado";

    return 'Média: ' + media + ' - Resultado: ' + condicao;

}

document.addEventListener('submit', function(evento){

    evento.preventDefault();// previne que o formulário seja submetido
    evento.stopPropagation();// impede que o evento seja chamado, só vai chamar o envento a partir do EventListener

    let formulario = document.getElementById('formulario-01'); // pega o formulario-01 pelo ID

    let dados = new FormData(formulario); // new FormData() é um método próprio do JS para capturar dados de formulários

    let objeto = {}; // criando uma variável objeto vazio pois cada vez que o formulário for submetido o objeto será reiniciado

    let notas = []; // variável para receber os dados que estão em dados.get(key)

    for(let key of dados.keys()) { // vai pegar os valores de fato, vai percorrer todas as chaves(keys) dos dados para capturar os dados que eu preciso. 
    // A partir do laço for já consigo montar o objeto
        objeto[key] = dados.get(key); // pega o objeto criado e adciona uma chave key para obter os dados do formulário   
        
        // .push adiciona itens no array 
        notas.push (parseInt(dados.get(key))); // parseInt entende que é número inteiro chamo os dados das notas aqui pra dentro da função
    } 

    console.log(notas);
    
    console.log(objeto); // para mostrar no console o objeto que foi formado 

    document.getElementById('resultado').innerHTML = aprovacao(notas); // injeta dados no html chamando a funcao aprovacao(notas)
});