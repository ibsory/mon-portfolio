let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

if (menuIcon) {
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('fa-xmark');
        navbar.classList.toggle('active');
    }
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                let activeLink = document.querySelector('header nav a[href*=' + id + ']');
                if (activeLink) activeLink.classList.add('active');
            });
        }
    });

    let header = document.querySelector('header');
    if (header) {
        header.classList.toggle('sticky', window.scrollY > 100);
    }

    if (menuIcon) {
        menuIcon.classList.remove('fa-xmark');
    }
    if (navbar) {
        navbar.classList.remove('active');
    }
}

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .projects-container, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h2, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

const typed = new Typed('.multiple-text', {
    strings: ['apprenti développeur', 'étudiant en Licence', 'passionné par le web'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Téléchargement du CV
const cvButton = document.querySelector('.btn[href*="cv.pdf"]');
if (cvButton) {
    cvButton.addEventListener('click', function(e) {
        e.preventDefault();
        const link = document.createElement('a');
        link.href = 'Ibrahima_Sory_Diallo-CV.pdf';
        link.download = 'Ibrahima_Sory_Diallo-CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}