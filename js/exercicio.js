
function obterMedia(){
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    let c = parseInt(document.getElementById("c").value);

    let soma = (a + b + c)
    let media = soma / 3;

    document.getElementById("resultado").innerHTML = 'a Soma é: ' + soma + ' e a média deles é: ' + media;
    console.log(a + b + c);
}
