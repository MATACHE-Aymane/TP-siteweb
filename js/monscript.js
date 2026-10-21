// Sélectionne tous les boutons d'achat
  const boutonsAcheter = document.querySelectorAll('.card button');

  // Ajoute un événement au clic sur chaque bouton
  boutonsAcheter.forEach((bouton) => {
    bouton.addEventListener('click', (event) => {
      
      const carte = event.target.closest('.card');
      const nomModele = carte.querySelector('.card-title').innerText;
      const prix = carte.querySelector('.fs-5').innerText;

      alert(`Vous avez sélectionné la montre : ${nomModele} au prix de ${prix}`);
    });
  });
//Entretien de Rolex
document.addEventListener('DOMContentLoaded', () => {
  // Sélection du formulaire dans la div .box
  const formulaire = document.querySelector('form.box');

  formulaire.addEventListener('submit', (e) => {
    // Empêche le rechargement de la page
    e.preventDefault();

    // Récupération des valeurs des champs
    const inputs = formulaire.querySelectorAll('input');
    const nomComplet = inputs[0].value;
    const modeleMontre = inputs[1].value;

    // Action à réaliser (Exemple: message de confirmation)
    alert(`Merci ${nomComplet} ! Votre demande de rendez-vous pour la montre "${modeleMontre}" a bien été enregistrée.`);

    // Réinitialise les champs du formulaire
    formulaire.reset();
  });
});