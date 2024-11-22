document.addEventListener("DOMContentLoaded", function(event) {

    var thumbnailElement = document.getElementById("smart_thumbnail");
    console.log(thumbnailElement);
    thumbnailElement.addEventListener("click", function() {
	if (thumbnailElement.className == "") {
	    thumbnailElement.className = "small";
	}
	else {
	    thumbnailElement.className = "";
	}
    });

    // Créer un tableau avec les identifiants de vos logos
    const logoIds = ['logo1', 'logo2', 'logo3','logo4']; 

    // Fonction pour cacher le logo et afficher le bouton
    function toggleLogoVisibility(logoId) {
	const logo = document.getElementById(logoId);
	logo.style.display = 'none'; // Cacher le logo

	// Créer un bouton 'Click here'
	const button = document.createElement('button');
	button.textContent = 'Click here!';
	button.className = 'button-custom'; // Ajouter une classe pour le style CSS
	button.onclick = function() {
	    logo.style.display = 'block'; // Afficher le logo
	    this.remove(); // Supprimer le bouton
	};

	// Insérer le bouton après le logo dans le DOM
	logo.parentNode.insertBefore(button, logo.nextSibling);
    }

    // Ajouter un écouteur d'événements à chaque logo
    logoIds.forEach(logoId => {
	const logo = document.getElementById(logoId);
	logo.addEventListener('click', () => toggleLogoVisibility(logoId));
    });
});
