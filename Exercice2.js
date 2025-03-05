import readline from 'readline-sync';
let stringNumber = readline.question("Entrer une chaine de caracteres numerique"); 
// Convertir la chaîne en nombre
let number = Number(stringNumber); 
//affichage des resultats
console.log("Chaîne de caractères :", stringNumber);
console.log("Nombre après conversion :", number);