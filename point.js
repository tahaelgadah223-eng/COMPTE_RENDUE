function tableMultiplicationPairs() {

    const nombreStr = prompt("Entrez un nombre pour afficher sa table de multiplication :");

    const nombre = Number(nombreStr);
    
    if (isNaN(nombre)) {
        console.log("Erreur : Vous devez entrer un nombre valide.");
        return;
    }
    
    console.log(`=== Table de multiplication de ${nombre} (résultats pairs uniquement) ===`);

    for (let i = 1; i <= 10; i++) {
        const resultat = nombre * i;
        
        
        if (resultat % 2 !== 0) {
            continue; 
        }
        
       
        console.log(`${nombre} × ${i} = ${resultat}`);
    }
    
    console.log("=== Fin de la table ===");
}