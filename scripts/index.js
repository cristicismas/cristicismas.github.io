// Scrolldown Arrow

scrolldownArrow = document.getElementById('scrolldown-arrow');

scrolldownArrow.addEventListener('click', function(e) {
    e.preventDefault();

    document.getElementById('projects').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});


// AOS

AOS.init({
    offset: 150,
    duration: 600,
    disable: function() {
        return /bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent);
    }
});
  

// Typed.js

const typedOptions = {
    strings: ['Hi!^500 I am a<br />web developer.^500\n<br /><br />I make useful web applications,<br />that grow businesses and bring new leads.'],
    typeSpeed: 25,
    showCursor: false
}

const typed = new Typed('.description', typedOptions);


// Contact links

contactLinks = document.getElementById('contact-links');
contactLinksBottom = document.getElementById('contact-links-bottom');

window.onscroll = function(e) {
    if ((window.innerHeight + window.scrollY + window.innerHeight / 10) >= document.body.offsetHeight) {
        contactLinks.style.opacity = 0;
        contactLinks.style.left = '-50px';
    } else {
        if (contactLinks.style.opacity == 0) {
            contactLinks.style.opacity = 0.8;
            contactLinks.style.left = '0px';
        }
    }
};