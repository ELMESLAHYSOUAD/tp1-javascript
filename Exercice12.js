import readline from 'readline-sync';

// Demander à l'utilisateur d'entrer trois notes et leurs coefficients
let note1 = parseFloat(readline.question("Veuillez entrer la premiere note : "));
let coefficient1 = parseFloat(readline.question("Veuillez entrer le coefficient de la premiere note : "));

let note2 = parseFloat(readline.question("Veuillez entrer la deuxieme note : "));
let coefficient2 = parseFloat(readline.question("Veuillez entrer le coefficient de la deuxieme note : "));

let note3 = parseFloat(readline.question("Veuillez entrer la troisieme note : "));
let coefficient3 = parseFloat(readline.question("Veuillez entrer le coefficient de la troisieme note : "));

// Calculer la somme des notes pondérées et la somme des coefficients
let sommeNotesPonderees = (note1 * coefficient1) + (note2 * coefficient2) + (note3 * coefficient3);
let sommeCoefficients = coefficient1 + coefficient2 + coefficient3;

// Calculer la moyenne pondérée
let moyennePonderee = sommeNotesPonderees / sommeCoefficients;

// Afficher la moyenne pondérée
console.log("La moyenne ponderee est :", moyennePonderee.toFixed(2));