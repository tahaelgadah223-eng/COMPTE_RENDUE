// 1. Demander à l'utilisateur d'entrer 5 notes
const notes = [];

for (let i = 0; i < 5; i++) {
    const input = prompt(`Entrez la note ${i + 1} sur 5 :`);
    const note = parseFloat(input);
    
    // Validation de base de l'entrée
    if (!isNaN(note)) {
        notes.push(note);
    } else {
        alert("Veuillez entrer un nombre valide. Cette note sera ignorée.");
        // Pour s'assurer qu'on a bien 5 notes, on décrémente i pour redemander cette note
        i--;
    }
}

console.log("Notes saisies :", notes);

// 2. Fonction classique pour calculer la moyenne
function calculerMoyenne(tableauNotes) {
    let somme = 0;
    let compteur = 0;
    
    for (let i = 0; i < tableauNotes.length; i++) {
        if (tableauNotes[i] >= 0) {
            somme += tableauNotes[i];
            compteur++;
        } else {
            console.log(`Erreur : La note ${tableauNotes[i]} est négative et sera ignorée.`);
        }
    }
    
    if (compteur === 0) {
        console.log("Aucune note valide pour calculer la moyenne.");
        return 0;
    }
    
    return somme / compteur;
}

// 3. Transformation en fonction fléchée (lambda)
const calculerMoyenneFlechee = (tableauNotes) => {
    let somme = 0;
    let compteur = 0;
    
    for (let i = 0; i < tableauNotes.length; i++) {
        if (tableauNotes[i] >= 0) {
            somme += tableauNotes[i];
            compteur++;
        } else {
            console.log(`Erreur : La note ${tableauNotes[i]} est négative et sera ignorée.`);
        }
    }
    
    if (compteur === 0) {
        console.log("Aucune note valide pour calculer la moyenne.");
        return 0;
    }
    
    return somme / compteur;
};

// Version encore plus concise avec reduce (alternative)
const calculerMoyenneLambda = (tableauNotes) => {
    const notesValides = tableauNotes.filter(note => note >= 0);
    
    if (notesValides.length === 0) {
        console.log("Aucune note valide pour calculer la moyenne.");
        return 0;
    }

    tableauNotes.forEach(note => {
        if (note < 0) {
            console.log(`Erreur : La note ${note} est négative et sera ignorée.`);
        }
    });
    
    const somme = notesValides.reduce((acc, note) => acc + note, 0);
    return somme / notesValides.length;
};


console.log("=== Calcul avec la fonction classique ===");
const moyenneClassique = calculerMoyenne(notes);
console.log(`Moyenne (fonction classique) : ${moyenneClassique.toFixed(2)}`);


console.log("\n=== Calcul avec la fonction fléchée ===");
const moyenneFlechee = calculerMoyenneFlechee(notes);
console.log(`Moyenne (fonction fléchée) : ${moyenneFlechee.toFixed(2)}`);


console.log("\n=== Calcul avec la lambda avec reduce ===");
const moyenneLambda = calculerMoyenneLambda(notes);
console.log(`Moyenne (lambda avec reduce) : ${moyenneLambda.toFixed(2)}`);



alert(`Résultats :
- Notes saisies : ${notes.join(", ")}
- Moyenne (en ignorant les notes négatives) : ${moyenneLambda.toFixed(2)}
- Note minimale : ${Math.min(...notes.filter(n => n >= 0)) || "N/A"}
- Note maximale : ${Math.max(...notes.filter(n => n >= 0)) || "N/A"}`);
