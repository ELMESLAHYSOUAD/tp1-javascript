import readline from 'readline-sync';

// Demander à l'utilisateur d'entrer une durée en heures, minutes et secondes
let heures = parseInt(readline.question("Veuillez entrer le nombre d'heures : "));
let minutes = parseInt(readline.question("Veuillez entrer le nombre de minutes : "));
let secondes = parseInt(readline.question("Veuillez entrer le nombre de secondes : "));

// Calculer le nombre total de secondes
let totalSecondes = (heures * 3600) + (minutes * 60) + secondes;

// Afficher le nombre total de secondes
console.log("Le nombre total de secondes est :", totalSecondes);