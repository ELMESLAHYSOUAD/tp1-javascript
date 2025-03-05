import readline from 'readline-sync';
let mot = readline.question("Veuillez saisir un mot : ");
// Calculer la longueur du mot
let longueur = mot.length;

// Affichage du resultat
console.log("La longueur du mot est :", longueur);