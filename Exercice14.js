import readline from 'readline-sync';

// Demander à l'utilisateur son prénom
let prenom = readline.question("Veuillez entrer votre prenom : ");

// Demander à l'utilisateur son année de naissance
let anneeNaissance = readline.question("Veuillez entrer votre annee de naissance : ");

// Générer le mot de passe
let motDePasse = `${prenom}${anneeNaissance}!`;

// Afficher le mot de passe
console.log("Votre mot de passe est :", motDePasse);