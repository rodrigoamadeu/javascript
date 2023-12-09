function calcularMedia (notas) {
    let soma = 0;
    for ( c = 0; c < notas.length; c++) {
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

const formulario1 = document.getElementById('formulario-01');

if (formulario1) {
    formulario1.addEventListener('submit', function( evento ){
        evento.preventDefault();
        evento.stopPropagation();

        const classAttribute = this.getAttribute('class');
if (classAttribute && classAttribute.match(/erro/)) {
    return false;
}

        let dados = new FormData(this);

        let notas = [];

        for (let key of dados.keys()) {
            let numero = dados.get(key).match(/\d*/) ? Number(dados.get(key)) : 0;
            if (!isNaN(numero)) {
                notas.push(numero);
            }
        }

        console.log(notas);

        texto = aprovacao(notas)

        document.getElementById('resultado').innerHTML = texto;
    });

    function validaCampo(elemento){
        elemento.addEventListener('focusout', function (event) {
            event.preventDefault();

            if(this.value == ""){
                document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos vermelho";
                this.classList.add('erro');
                this.parentNode.classList.add('erro');
                return false;
            } else {
                document.querySelector('.mensagem').innerHTML = "";
                this.classList.remove('erro');
                this.parentNode.classList.remove('erro');
            }

        })
    }

}




