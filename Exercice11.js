import readline from 'readline-sync';
// Demander à l'utilisateur d'entrer un mot
let mot = readline.question("Veuillez saisir un mot : ");

// Vérifier si le mot est un palindrome
let motInverse = mot.split('').reverse().join('');
if (mot === motInverse) {
    console.log(`${mot} est un palindrome.`);
} else {
    console.log(`${mot} n'est pas un palindrome.`);
}