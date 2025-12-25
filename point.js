function saisieSecurisee() {
  const message = document.getElementById("message");
  let nombre;

  while (true) {
    const saisie = prompt("Entrez un nombre entre 1 et 100 :");

    if (saisie === null) {
      message.textContent = "Saisie annulée.";
      return;
    }

    nombre = Number(saisie);

    if (!Number.isNaN(nombre) && nombre >= 1 && nombre <= 100) {
      break;
    }
    alert("Erreur : saisissez un nombre entre 1 et 100.");
  }

  alert("Merci, vous avez saisi le nombre " + nombre + ".");
  message.textContent = "Nombre valide saisi : " + nombre;
}