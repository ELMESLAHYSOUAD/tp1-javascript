const PI = 3.14159;

// Tenter de modifier la constante
try {
    PI = 3.14; // Cela va provoquer une erreur
} catch (error) {
    console.log("Erreur : Impossible de modifier une constante.");
}

// Afficher la valeur de PI
console.log("La valeur de PI est :", PI);