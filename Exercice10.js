import readline from 'readline-sync';
let mot = readline.question("Veuillez entrer un mot : ");

// Inverser le mot
let motInverse = mot.split('').reverse().join('');

// Afficher le mot inversé
console.log("Le mot inversé est :", motInverse);