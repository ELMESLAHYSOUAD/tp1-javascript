import readline from 'readline-sync';
let age= readline.questionInt("Entrez l'age :");
let estAdulte = age >= 18; 

// Afficher le résultat
console.log("Est-ce que la personne est adulte ? :", estAdulte);