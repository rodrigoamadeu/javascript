import months from './months.js'

// .filter - método para trabalhar com arrays filtra os meses
const filteredMonths = months.filter((months)=> {
    return months.days === 31
})

console.log(filteredMonths)

let toPrint = ''

//for.Each -- faz a Listagem dos arrays 
filteredMonths.forEach(month => {
    toPrint += month.month + ', '
});

let meses = [30, 30, 30] // array comum

// incluir contagem de todos os dias dos meses selecionados
// Reduce- executa a função com todos os itens do array e devolve um valor único
let sumMonthDays = months.reduce((prev, next)=> {
    return {days: prev.days + next.days}
})

// Map funções em arrays de retorno individual (cada valor do array)

let cachorros = [10, 14, 7, 4, 7]


let years = cachorros.map((cachorro )=>{
    return cachorro * 7
})

document.getElementById('main').innerHTML = 
    toPrint +'<br> Soma dos dias dos meses selecionados: '
    + sumMonthDays.days + '<br> idade humana dos cachorros: '
    + years + ' '