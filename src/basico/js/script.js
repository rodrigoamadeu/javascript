/**
 * Aqui, criei uma classe CalculadoraMedia com dois métodos: calcularMedia e aprovacao. Em seguida, criei uma instância dessa classe (calculadora) e utilizei os métodos dessa instância para realizar os cálculos e exibir os resultados.
 */
class CalculadoraMedia {
    calcularMedia(notas) {
        let soma = 0;
        for(let c = 0; c < notas.length; c++) {
            soma += notas[c];
        }
        return soma / notas.length;
    }

    aprovacao(notas) {
        let media = this.calcularMedia(notas);
        let condicao = media >= 8 ? "aprovado" : "reprovado";
        return 'Média: ' + media + ' - Resultado: ' + condicao;  
    }
}

/**
 * Aqui estava com dificuldade para encontrar o erro que estava tendo na linha 53, e mudei um pouco a lógica.
 * esta linha, estamos tentando usar o método match direto no resultado de dados.get(key). O erro ocorre porque dados.get(key) estava retornando null quando não há nenhum valor correspondente a essa chave (key) no formulário.

Modifiquei essa linha para corrigir o erro, adicionando uma verificação para garantir que dados.get(key) tenha um valor antes de usar o método match:

let value = dados.get(key);
let numero = (value && value.match(/\d+/)) ? Number(value) : 0;
Aqui, a mudança foi adicionar a verificação value && antes de usar o método `
 */

const calculadora = new CalculadoraMedia();

const formulario1 = document.getElementById('formulario-01');

if (formulario1) {
    formulario1.addEventListener('submit', function (evento) {
        evento.preventDefault();
        evento.stopPropagation();

        let elementClass = this.getAttribute('class');

        if (elementClass && elementClass.match(/erro/)) {
            return false;
        }

        let dados = new FormData(this);
        let notas = [];

        for (let key of dados.keys()) {
            let value = dados.get(key);
            let numero = (value && value.match(/\d*/)) ? Number(value) : 0;
            if (!isNaN(numero)) {
                notas.push(numero);
            }
        }

        const texto = calculadora.aprovacao(notas);
        document.getElementById('resultado').innerHTML = texto;
    });
}



function validaCampo(elemento){

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();

        if(this.value == ""){
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em vermelho";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        } else {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        }

    });

}

function validaCampoNumerico(elemento){

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();

        let numero = this.value.match(/^[\d]5-[\d]3/) ? this.value.replace(/-/, "") : this.value; 

        if(numero != "" && numero.match(/[0-9]*/) && numero >= 0 && numero <= 10){
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        } else {
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }

    });

}


function validaEmail(elemento){

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();

        const emailValido = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i;
        if(this.value.match(emailValido)) {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        } else {
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }

    });

}


let camposObrigatorios = document.querySelectorAll('input.obrigatorio');
let camposNumericos = document.querySelectorAll('input.numero');
let camposEmail = document.querySelectorAll('input.email');

for( let emFoco of camposObrigatorios) {
    validaCampo(emFoco);
}

for( let emFoco of camposNumericos) {
    validaCampoNumerico(emFoco);
}

for( let emFoco of camposEmail) {
    validaEmail(emFoco);
}
