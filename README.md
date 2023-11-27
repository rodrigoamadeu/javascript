# Operadores

## Aritméticos: retornam o resultado de uma operação
+ somar
- subtrair
* multiplicar
/ dividir
% resto da divisão

## Comparadores matemáticos: teste lógico, retorno booleano (true / false):
< menor que
> maior que
<= menor ou igual
>= maior ou igual

## Comparadores Lógicos: teste lógico, retorno booleano (trus / false)
==   igualdade entre sentenças (valor)
!=   diferença entre sentenças (valor)
===  igualdade entre sentenças (valor e tipo)
!==  diferença entre sentenças (valor e tipo)

a == b = true
a != b = false

## Operadores de lógica e junção lógica
!    NÃO (NOT) para retornar TRUE as duas sentenças precisam ser verdadeiras.
&&   E (AND)   para retornar TRUE as duas sentenças precisam ser verdadeiras.
||   OU (OR)   somente uma condição sendo verdadeira ele retornará TRUE

O sinal de exclamaçlão (!) é o operador NOT (não), utilizado para negar a sentença que vem na sequência.

#### Exemplos:
a != b    // o valor de a é diferente de b
x !== b   // o valor e o tipo de x são diferentes de y
!a == b   // o valor de a não é igual ao valor de b

#### As condições lógicas são convertidas em números binários:
true é equivalente a 1
false é equivalente a 0

#### Operador lógico de atribuição

Tem a capacidade de atribuir valor a uma variável a partir de uma condição lógica, economia IFs

Exemplo:

var meuCarro = cor == "preto" ? "preto" : "branco";
No parágrafo acima a interrogação '?' é representada pela palavra SE e o sinal de ':' vale 'SE NÃO"

# If
o if serve para controlar o algoritmo inteiro           
if (...) {
    ...
}
Só não precisa usar chave ser for em uma linha inteira
if (cor != "preto") meuCarro = "cinza"

if (cor =="branco") {
... meuCarro = "cinza";
... console.log(meuCarro);
... }
cinza

## Else

Else {

}

* Exemplo

if (cor == "preto") {
    meuCarro = "preto";
} else if (cor == "vermelho"){
    meuCarro = "cinza";
} else if (cor == "amarelo"){
    meuCarro = "branco";
} else {
    meuCarro = "azul";
}

cor.toLowerCase() == "vermelho" 
Converte a palavra e aceita o caractere maiúsculo ou minusculo

## Switch

switch (cor) {
    case 'branco' :
        meuCarro = 'branco'
        break;
    case 'vermelho' : 
        meuCarro = 'vermelho'
        break;
    case 'amarelo' :
        meuCarro = 'amarelo'
        break;
    default : 
        console.log('não temos a cor desejada');    
} 

break para a condição do código

## media
var nota1 = 10;
var nota2 = 8; 
var nota3 = 9;
var nota4 = 7;
var media = (nota1 + nota2 + nota3 + nota4) / 4;
if( media >= 8 ) {
    console.log('Aluno aprovado')
} else {
    console.log('Aluno em recuperação')
}
...

## Laços de Repetição (loops)

É obrigatório condição de entrada e de saída.

Extrutura do laço for

for ([expressaoInicial]; [condicao]; [incremento]) {
    execução
}

while( [condicao] ){
    [execucao]
}

var contador = 0;
while( contador < 10 ) {
    contador++
}

var hora = 24;
while( hora > 0){
    
    console.log(hora);
    hora--;
}

console.log('total de horas ' + hora);

é obrigatório ter a condição de saída se não entra em loop infinito

do {
    execução
} while (condição)

o do executa no final
...

// fazer a revisão do carro aos 10 km

var km;
var revisao = 10;
for(km = 0; km <= revisao; km++ ){
    console.log('apenas ' + km + ' kms então pode rodar');
}

### Cálculo de média de alunos

o primeiro array [representa o universo de alunos], e depois cada array
[], [], [] representa as notas dos alunos ex. aluno 0, aluno 1, aluno 2

var alunos = [
    [6, 7, 8, 6],
    [8, 5, 6, 8],
    [10, 6, 8, 7],
    [8, 8, 8, 8],
    [6, 6, 6, 6, 6]
]

var nota = 0
for (var i = 0; i < alunos.length; i++) {
    
    nota = 0
    notasAluno = alunos[i]
    console.log('Aluno: ' + parseInt(i+1));
    console.log('Notas: ' + notasAluno);

    for( c = 0; c < notasAluno.length; c++ ){
        nota += notasAluno[c];
    }    

    media = nota / 4;

    if(media >= 7) {
        resultado = 'aprovado';
    } else {
        resultado = 'reprovado';
    }

    console.log('Média : ' + media + ' - ' + resultado);
}
 
entendendo o código acima:
o índice c , percorre cada nota do aluno



## Funções

- Evitar a repetição de código
- Realizar chamadas dinâmicas de algoritmos


function calcularMedia( notas ) {
    let soma = 0;
    for ( c = 0; c < notas.length; c++) {
        soma += notas[c];

    }

    media = soma / notas.length;
    
    return media;
}

function aprovacao( media ) {
	
  let condicao = media >= 8 ? 'aprovado' : 'reprovado'; 
  
  return condicao;
  
}

console.log('Média: ' + calcularMedia([8, 8, 7]))
console.log(aprovacao (calcularMedia([8, 8, 7])))


console.log('Média: ' + calcularMedia([8, 8, 10]))
console.log(aprovacao (calcularMedia([8, 8, 10])))

console.log('Média: ' + calcularMedia([9, 6]))
console.log(aprovacao (calcularMedia([9, 6])))

o console.log chama a função e faz o cálculo de alunos aprovados e reprovados;



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

//console.log('Média: ' + calcularMedia([8, 8, 7]))
//console.log(aprovacao (calcularMedia([8, 8, 7])))
console.log( aprovacao([8, 8, 7]) );

//console.log('Média: ' + calcularMedia([8, 8, 10, 6]))
//console.log(aprovacao (calcularMedia([8, 8, 10, 6])))
console.log( aprovacao([8, 8, 10, 6]) );

//console.log('Média: ' + calcularMedia([9, 6]))
//console.log(aprovacao (calcularMedia([9, 6])))
console.log( aprovacao([9, 6]))