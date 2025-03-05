import readline from 'readline-sync';
let chaine = readline.question("Veuillez entrer une chaîne de caractères : ");

if (chaine.length >= 3) {
    let troisemeCaractere = chaine[2]; 
    console.log("Le troisième caractère de la chaîne est :", troisemeCaractere);
} else {
    console.log("La chaîne doit contenir au moins trois caractères.");
}