// Funções Recursivas - você reaproveita a função dentro da própria função

function contagemRegressiva(numero){

    console.log(numero)

    let proximoNumero = numero -1;
    
    if(proximoNumero > 0) // usar if como condição de saída para não dar loop infinito
    contagemRegressiva(proximoNumero);
    console.log(`O último número foi ${numero}`)
}

contagemRegressiva(10);
