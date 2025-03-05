console.log("Hello World !");
// Importer le module readline-sync
import readline from 'readline-sync';

// Lire le prénom de l'utilisateur
let prenom = readline.question("Entrez votre prenom : ");

// Afficher un message de bienvenue
console.log("Bonjour, " + prenom + "!");