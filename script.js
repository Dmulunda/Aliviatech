/* ===================================================
   ALIVIATECH - Script Principal (Version Formspree)
   =================================================== */

/* ----- SIDEBAR MOBILE ----- */
function showSidebar(event) {
    if (event) event.preventDefault();
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        sidebar.style.display = 'flex';
    }
}

function hideSidebar(event) {
    if (event) event.preventDefault();
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        sidebar.style.display = 'none';
    }
}

document.addEventListener('click', function(event) {
    const sidebar = document.querySelector('.sidebar');
    const menuButton = document.querySelector('.menu-button');
    
    if (sidebar && sidebar.style.display === 'flex') {
        if (!sidebar.contains(event.target) && !menuButton.contains(event.target)) {
            sidebar.style.display = 'none';
        }
    }
});


/* ----- BACKGROUND SLIDESHOW (7 secondes) ----- */
const backgroundImages = [
    'colabo.png', 'hardware.png', 'helpdesk.png', 'network.jpg',
    'control.png', 'consultation.png', 'dashboard.png', 'net.jpg', 'matrix.jpg'
];

let currentBgIndex = 0;

function changeBackground() {
    currentBgIndex = (currentBgIndex + 1) % backgroundImages.length;
    document.body.style.backgroundImage = `url('${backgroundImages[currentBgIndex]}')`;
}

function initBackgroundSlideshow() {
    if (backgroundImages.length > 0) {
        document.body.style.backgroundImage = `url('${backgroundImages[0]}')`;
        setInterval(changeBackground, 7000);
    }
}


/* ----- FORMULAIRE D'INSCRIPTION FORMSPREE (mqegqdwo) ----- */
function initEmailForm() {
    const form = document.getElementById('signup-form');
    const messageEl = document.getElementById('form-message');
    const submitBtn = document.getElementById('footer-email-btn');
    
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Empêche le rechargement de la page
            
            const emailInput = document.getElementById('footer-email');
            const originalBtnText = submitBtn.value;
            
            // Animation du bouton
            submitBtn.disabled = true;
            submitBtn.value = "...";

            // Envoi des données vers ton ID Formspree
            fetch("https://formspree.io/f/mqegqdwo", {
                method: 'POST',
                body: new FormData(form),
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                if (response.ok) {
                    // Message de succès (S'adapte si c'est la page EN ou FR)
                    if (messageEl) {
                        messageEl.textContent = 'Merci ! Inscription réussie.';
                        messageEl.style.color = '#4DE2FF';
                    }
                    form.reset();
                } else {
                    throw new Error('Erreur');
                }
            }).catch(error => {
                if (messageEl) {
                    messageEl.textContent = 'Erreur. Veuillez réessayer.';
                    messageEl.style.color = '#FF4D4D';
                }
            }).finally(() => {
                // On remet le bouton à son état normal
                submitBtn.disabled = false;
                submitBtn.value = originalBtnText;
                
                // Efface le message après 5 secondes
                setTimeout(() => { if (messageEl) messageEl.textContent = ''; }, 5000);
            });
        });
    }
}


/* ----- INITIALISATION AU CHARGEMENT ----- */
document.addEventListener('DOMContentLoaded', function() {
    initBackgroundSlideshow();
    initEmailForm();
    console.log('Aliviatech scripts (Formspree) loaded successfully!');
});


/* ----- MOBILE FAB MENU ----- */
function toggleFabMenu() {
    const fabMenu = document.getElementById('fabMenu');
    if (fabMenu) {
        fabMenu.classList.toggle('active');
    }
}

// Close fab if click outside
document.addEventListener('click', function(event) {
    const fabMenu = document.getElementById('fabMenu');
    const fabContainer = document.querySelector('.mobile-fab-container');
    
    if (fabMenu && fabMenu.classList.contains('active')) {
        if (fabContainer && !fabContainer.contains(event.target)) {
            fabMenu.classList.remove('active');
        }
    }
});

// Google Analytics - dynamically loaded
const gaScript = document.createElement('script');
gaScript.async = true;
gaScript.src = "https://www.googletagmanager.com/gtag/js?id=G-GJD7D0XFX9";
document.head.appendChild(gaScript);

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-GJD7D0XFX9');


// live chat widget
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/69cc03d47a2adf1c390a9d29/1jl2ettps';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
