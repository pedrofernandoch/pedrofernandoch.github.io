const langEl = document.querySelectorAll('.language');
const homeEl = document.getElementById('home-page');
const aboutEl = document.getElementById('about-page');
const timelineEl = document.getElementById('timeline-page');
const skillsEl = document.getElementById('skills-page');
const contactEl = document.getElementById('contact-page');

console.log(langEl)

langEl.forEach(el => {
    el.addEventListener('click', () => {
        const attr = el.getAttribute('language');
        homeEl.textContent = data[attr].home;
        aboutEl.textContent = data[attr].about;
        timelineEl.textContent = data[attr].timeline;
        skillsEl.textContent = data[attr].skills;
        contactEl.textContent = data[attr].contact;
    });
});

const data = {
    "pt-br": {
        "home": "Início",
        "about": "Sobre",
        "timeline": "Linha do tempo",
        "skills": "Habilidades",
        "contact": "Contato",
    },
    "en": {
        "home": "Home",
        "about": "About",
        "timeline": "Timeline",
        "skills": "Skills",
        "contact": "Contact",
    }
}