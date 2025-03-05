import readline from 'readline-sync';
let prixHT = parseFloat(readline.question("Veuillez entrer le prix hors taxe : "));
let tauxTVA = parseFloat(readline.question("Veuillez entrer le taux de TVA (en pourcentage) : "));

// Calculer le prix total TTC
let prixTTC = prixHT + (prixHT * (tauxTVA / 100));

// Afficher le prix total TTC
console.log("Le prix total TTC est :", prixTTC.toFixed(2));