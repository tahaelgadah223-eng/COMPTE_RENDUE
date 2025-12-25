// 1. Création du tableau de produits
let produits = [
    { nom: "Ordinateur Portable", prix: 899.99, quantite: 15 },
    { nom: "Souris sans Fil", prix: 29.99, quantite: 50 },
    { nom: "Clavier Mécanique", prix: 89.99, quantite: 25 },
    { nom: "Écran 24\"", prix: 249.99, quantite: 12 },
    { nom: "Casque Audio", prix: 79.99, quantite: 30 }
];

// 2. Fonction pour afficher les produits
function afficheProduits() {
    console.log("=== CATALOGUE DES PRODUITS ===");
    
    for (let produit of produits) {
        console.log(`Nom: ${produit.nom}`);
        console.log(`Prix: ${produit.prix}€`);
        console.log(`Quantité en stock: ${produit.quantite}`);
        console.log("------------------------");
    }
}

// 3. Fonction pour vendre un produit
function vendreProduit(nomProduit, quantiteVoulue) {
    // Recherche du produit
    let produitTrouve = null;
    
    for (let produit of produits) {
        if (produit.nom.toLowerCase() === nomProduit.toLowerCase()) {
            produitTrouve = produit;
            break;
        }
    }
    
    // Vérification si le produit existe
    if (!produitTrouve) {
        console.log(`Erreur: Le produit "${nomProduit}" n'existe pas dans le catalogue.`);
        return false;
    }
    
    // Vérification du stock
    if (produitTrouve.quantite < quantiteVoulue) {
        console.log(`Erreur: Stock insuffisant pour "${produitTrouve.nom}".`);
        console.log(`Stock disponible: ${produitTrouve.quantite}, Quantité demandée: ${quantiteVoulue}`);
        return false;
    }
    
    // Vente réussie - réduction du stock
    produitTrouve.quantite -= quantiteVoulue;
    const total = produitTrouve.prix * quantiteVoulue;
    
    console.log("Vente réussie!");
    console.log(`Produit: ${produitTrouve.nom}`);
    console.log(`Quantité vendue: ${quantiteVoulue}`);
    console.log(`Prix unitaire: ${produitTrouve.prix}€`);
    console.log(`Total: ${total}€`);
    console.log(`Nouveau stock: ${produitTrouve.quantite}`);
    
    return true;
}

// Fonction supplémentaire pour tester facilement
function testerCatalogue() {
    console.log("=== TEST DU CATALOGUE ===");
    
    // Affichage initial
    afficheProduits();
    
    console.log("\n=== TESTS DE VENTE ===");
    

    console.log("\nTest 1: Vente de 3 souris sans fil");
    vendreProduit("Souris sans Fil", 3);

    console.log("\nTest 2: Tentative de vente de 20 écrans");
    vendreProduit("Écran 24\"", 20);
    

    console.log("\nTest 3: Tentative de vente d'un produit inexistant");
    vendreProduit("Tablette", 5);
    

    console.log("\nTest 4: Vente de 2 claviers mécaniques");
    vendreProduit("Clavier Mécanique", 2);

    console.log("\n=== ÉTAT FINAL DU STOCK ===");
    afficheProduits();
}
