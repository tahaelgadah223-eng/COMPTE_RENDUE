function validerMotDePasse() {
    let continuer = true;
    
    while (continuer) {
       
        const motDePasse = prompt("Veuillez entrer votre mot de passe (tapez 'exit' pour quitter):");
        
        if (motDePasse === null || motDePasse.toLowerCase() === "exit") {
            alert("Au revoir !");
            continuer = false;
            break;
        }

        const longueur = motDePasse.length;
        
 
        let force;
        
        if (longueur < 8) {
            force = "faible";
        } else if (longueur >= 8 && longueur <= 12) {
            force = "moyen";
        } else {
            force = "fort";
        }
        
      
        alert(`Votre mot de passe (${'*'.repeat(longueur)}) a une force ${force}.`);
        
 
        console.log(`Mot de passe: ${'*'.repeat(longueur)}`);
        console.log(`Longueur: ${longueur} caractères`);
        console.log(`Force: ${force}`);
        
        if (force === "faible") {
            console.log("Conseil: Utilisez au moins 8 caractères pour un mot de passe plus sécurisé.");
        } else if (force === "moyen") {
            console.log("Conseil: Essayez d'utiliser plus de 12 caractères pour une meilleure sécurité.");
        } else {
            console.log("Excellent! Votre mot de passe est fort.");
        }
        console.log("---");
    }
}


function validerMotDePasseAmeliore() {
    let continuer = true;
    
    while (continuer) {
 
        const motDePasse = prompt("Veuillez entrer votre mot de passe (tapez 'exit' pour quitter):");
        

        if (motDePasse === null || motDePasse.toLowerCase() === "exit") {
            alert("Au revoir !");
            continuer = false;
            break;
        }
        
        const longueur = motDePasse.length;
        
      
        let force;
        
        if (longueur < 8) {
            force = "faible";
        } else if (longueur >= 8 && longueur <= 12) {
            force = "moyen";
        } else {
            force = "fort";
        }
       
        alert(`Votre mot de passe a une force ${force}.\n\n` +
              `Longueur: ${longueur} caractères\n` +
              `(Conseil: pour plus de sécurité, utilisez au moins 8 caractères avec des majuscules, minuscules, chiffres et caractères spéciaux)`);
        
        const reponse = prompt("Voulez-vous tester un autre mot de passe? (oui/non)");
        
        if (reponse === null || reponse.toLowerCase() !== "oui") {
            alert("Merci d'avoir utilisé notre outil de validation de mot de passe!");
            continuer = false;
        }
    }
}
