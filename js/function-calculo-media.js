function calcularMedia(notas) {

	let soma = 0;
	for(c = 0; c < notas.length; c++) {
  	soma += notas[c];
  	
  }
  media = soma / notas.length;
	return media;
}

let media; // escopo global

function aprovacao(notas) {
    
    let media = calcularMedia( notas ); // escopo local da função
    
    let condicao = media >= 8 ? "aprovado" : "reprovado"; 
    
    return 'Média: ' + media + ' - Resultado: ' + condicao; 
 
}

//console.log( "Média: " + calcularMedia([8, 8, 7]))
console.log(aprovacao([8, 8, 7]) );


//console.log("Média: " + calcularMedia([8, 8, 10, 6]))
console.log(aprovacao([8, 8, 10, 6]))



//console.log("Média: " + calcularMedia([9, 6]))
console.log(aprovacao([9, 6]))