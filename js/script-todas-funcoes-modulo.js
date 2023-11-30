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

/* 
    Formulário de envio de dados para cálculo da média
*/

const formulario1 = document.getElementById('formulario-01');

if(formulario1)
formulario1.addEventListener('submit', function( evento ){
    
    evento.preventDefault();
    evento.stopPropagation();
    
    if( this.getAttribute('class').match(/erro/) ) {
        return false;
    }

    let dados = new FormData(this);

    let notas = [];

    for(let key of dados.keys()) {
        
        let numero = dados.get(key).match(/\d*/) ? Number(dados.get(key)) : 0; // é um número

        console.log(typeof numero);

        if(!isNaN(numero)) {
            notas.push(numero);
        }
      
    }

    console.log(notas);

    texto = aprovacao(notas)

    document.getElementById('resultado').innerHTML = texto;

});



function validaCampo(elemento){
    
    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();

        if(this.value == ""){
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em vermelho";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        } else {
            document.querySelector('.mensagem').ineerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        }

    });
}

function validaCampoNumerico(elemento){
    
    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();

        let numero = this.value.match(/^[\d]5-[\d]3/) ? this.value.replace(/-/, "") : this.value;//comandos para validar cep

        if(numero != "" && numero.match(/[0-9]*/) && numero >= 0 && numero <= 10){
            document.querySelector('.mensagem').ineerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        } else {
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em vermelho";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
            
        }

    });
}


function validaEmail(elemento){

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();
        
        const emailValido = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;//comando para validar email
        if(this.value.match(emailValido)) {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        }   else {
            document.querySelector('.mensagem').innerHTML= "verifique o preenchimento dos campos em destaque";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }

    });    

}

function validaCampoUf(elemento){

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();

        const ufValido = /^(?i)(\s*(AC|AL|AP|AM|BA|CE|DF|ES|GO|MA|MT|MS|MG|PA|PB|PR|PE|PI|RJ|RN|RS|RO|RR|SC|SP|SE|TO)/i;

        if(this.value.match(ufValido)) {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        }   else {
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimentos dos campos em destaque";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;

        }

    });

}

let camposObrigatorios = document.querySelectorAll('input.obrigatorio');

let camposNumericos = document.querySelectorAll('input.numero');

let camposEmail = document.querySelectorAll('input.email');

let camposUf = document.querySelectorAll('input.uf');


for( let emFoco of camposObrigatorios) {
    validaCampo(emFoco);
}

for( let emFoco of camposNumericos) {
    validaCampoNumerico(emFoco);
}

for( let emFoco of camposEmail) {
    validaEmail(emFoco);
}

for( let emFoco of camposUf) {
    validaCampoUf(emFoco);
}