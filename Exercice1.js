import readline from 'readline-sync';
let x = readline.questionInt("Entrez la valeur de x :");
let y = readline.questionInt("Entrez la valeur de y:");

console.log("Avant l'échange : x =", x, ", y =", y);

// Intervertir les valeurs
x = x + y; 
y = x - y; 
x = x - y; 

console.log("Après l'échange : x =", x, ", y =", y);