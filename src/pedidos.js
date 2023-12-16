import pizzas from "./pizzas.js";

const filteredPizzas = pizzas.filter((pizzas)=> {
    return pizzas.valor >= 50 
})
console.log(filteredPizzas)

let toPrint = ''

filteredPizzas.forEach(pizza => {
    toPrint +=  pizza.pizza + ', '
});

document.getElementById('main').innerHTML = toPrint 


