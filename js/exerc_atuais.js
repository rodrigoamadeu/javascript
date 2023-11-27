function calcularMedia ( notas ){
    let soma = 0;
    for(c = 0; c < notas.length; c++) {
        soma += notas[c];
    }

    media = soma / notas.length;
    return media;
}


let media;

function aprovacao(notas) {
    let media = calcularMedia(notas);
    let condicao = media >= 8 ? "aprovado" : "reprovado";
    return 'Média: ' + media + ' - Resultado: ' + condicao;
}


document.addEventListener('submit', function(evento){ // Essa linha de código adiciona um ouvinte de evento ao documento HTML. O evento especificado é o evento de envio (submit) de um formulário. Quando o formulário for submetido, a função anônima passada como segundo argumento será executada.

    evento.preventDefault(); //Dentro da função que é executada quando o evento de envio do formulário é acionado, a primeira ação é chamar o método preventDefault(). Isso serve para prevenir o comportamento padrão do formulário, ou seja, evitar que a página seja recarregada quando o formulário for submetido. Isso permite manipular os dados do formulário sem recarregar a página inteira.
    evento.stopPropagation();

    let formulario = document.getElementById('formulario-01'); // chama o formulario-01

    let dados = new FormData(formulario); // FormData é um método do js próprio para capturar dados de um formulário , vai transformar em um padrão de objetos para conseguir trabalhar depois.

    let objeto = {}; //tipo de variável que consegue adicionar vários valores e criar uma linha lógica e consegue adicionar diversas caracteristicas a esse objeto. toda vez que o formulário for submetido essa variável ficará zerada será reiniciada

    let notas = [];

    for(let key of dados.keys()) {// criar um laço for para pegar os dados desse objeto
        objeto[key] = dados.get(key);

        notas.push(parseInt(dados.get(key))); // adiciona itens no array 
    } 
    // a idéia é criar um objeto para pegar os valores que são submetidos dentro do formulário
    console.log(notas)

    console.log(objeto);

    texto = aprovacao(notas)

    document.getElementById('resultado').innerHTML = texto;

})
