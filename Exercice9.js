import readline from 'readline-sync';

let prefixe = readline.question("Veuillez entrer le prefixe de facture : ");


let numeroBase = readline.question("Veuillez entrer le numero de base  : ");


let suffixe = readline.question("Veuillez entrer le suffixe  : ");

// Générer le numéro de facture complet
let numeroFacture = `${prefixe}-${numeroBase}-${suffixe}`;

// Afficher le numéro de facture complet
console.log("Le numéro de facture complet est :", numeroFacture);