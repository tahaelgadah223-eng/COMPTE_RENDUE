
function calculerReductionIfElse() {
    const montantStr = prompt("Veuillez entrer le montant de vos achats (en DH):");
    
    const montant = Number(montantStr);
 
    if (isNaN(montant) || montant < 0) {
        console.log("Montant invalide. Veuillez entrer un nombre positif.");
        return;
    }

    let reduction;
    
    if (montant < 200) {
        reduction = montant * 0.05; 
    } else if (montant >= 200 && montant <= 500) {
        reduction = montant * 0.10; 
    } else {
        reduction = montant * 0.20; 
    }
    

    const total = montant - reduction;
    

    console.log(`Pour un montant de ${montant}Dh, votre réduction est de ${reduction.toFixed(2)}Dh et le total est ${total.toFixed(2)}Dh.`);
}


function calculerReductionSwitch() {
  
    const montantStr = prompt("Veuillez entrer le montant de vos achats (en DH):");

    const montant = Number(montantStr);

    if (isNaN(montant) || montant < 0) {
        console.log("Montant invalide. Veuillez entrer un nombre positif.");
        return;
    }
    
    let tranche;
    if (montant < 100) {
        tranche = "faible";
    } else if (montant >= 100 && montant <= 500) {
        tranche = "moyen";
    } else {
        tranche = "eleve";
    }
    
    let reduction;
    
    switch (tranche) {
        case "faible":
            reduction = montant * 0.05; // 5%
            break;
        case "moyen":
            reduction = montant * 0.10; // 10%
            break;
        case "eleve":
            reduction = montant * 0.20; // 20%
            break;
        default:
            reduction = 0;
    }
    

    const total = montant - reduction;
    

    console.log(`[Switch] Pour un montant de ${montant}Dh, votre réduction est de ${reduction.toFixed(2)}Dh et le total est ${total.toFixed(2)}Dh.`);
}
