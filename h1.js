document.addEventListener("DOMContentLoaded", function(event) {

    function animateOpacity() {
	const h1 = document.getElementById('h1');
	let currentOpacity = 0.1; // Définir l'opacité initiale
	h1.style.opacity = currentOpacity;

	let increasing = true; // Définir la direction de l'animation

	setInterval(() => {
	    if (increasing && currentOpacity < 1) {
	        currentOpacity += 0.1;
	    } else if (!increasing && currentOpacity > 0.1) {
	        currentOpacity -= 0.1;
	    }

	    // Réinitialiser la direction de l'animation si nécessaire
	    if (currentOpacity >= 1) {
	        increasing = false;
	    } else if (currentOpacity <= 0.1) {
	        increasing = true;
	    }

	    h1.style.opacity = currentOpacity.toFixed(1);
	}, 500); // Exécuter toutes les 0.5 secondes
    }

    animateOpacity();
});
