const animais = require('./animaispais')


let calopsita = new animais("Calopsita", "Ave", "Psittaciformes", "Femea", "berinjela");
let cavalo = new animais("Cavalo", "Mamífero", "perissodáctilos", "Macho", "erva");


console.log("A " + calopsita.nome + " " + calopsita.sexo + " é uma " + calopsita.classe + " que adora comer " + calopsita.comida);
console.log("O " + cavalo.nome + " " + cavalo.sexo + " é um " + cavalo.classe + " que adora comer " + cavalo.comida);



