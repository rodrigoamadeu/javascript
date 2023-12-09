const Animal = require('./Animal'); // Importa a classe Animal

class Cachorro extends Animal {
    falar() {
        console.log(this.especie + ' fala au au au ');
    }

    comer() {
        console.log(this.especie + ' come ração.');
    }
}

module.exports = Cachorro; // Exporta a classe Cachorro