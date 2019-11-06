// Scrolldown Arrow

scrolldownArrow = document.getElementById('scrolldown-arrow');

scrolldownArrow.addEventListener('click', function (e) {
    e.preventDefault();

    document.getElementById('projects').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});


// AOS

AOS.init({
    offset: 50,
    duration: 600,
    disable: function () {
        // Disable for bots and small screens to avoid jank.
        return /bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent) || window.innerWidth < 700;
    }
});


// Typed.js

const typedOptions = {
    strings: ['Hi!^500 I am a<br />web developer.^500\n<br /><br />I make useful web applications,<br />that grow businesses and bring new leads.'],
    typeSpeed: 15,
    showCursor: false
}

const typed = new Typed('.description', typedOptions);


// Contact links

contactLinks = document.getElementById('contact-links');
contactLinksBottom = document.getElementById('contact-links-bottom');

const hideOffset = 300;

function isElementInViewport(el, offset) {
    var rect = el.getBoundingClientRect();


    return (
        rect.bottom >= 0 && 
        rect.right >= 0 && 
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) - offset && 
        rect.left <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

window.onscroll = function (e) {
    if (isElementInViewport(contactLinksBottom, hideOffset)) {
        contactLinks.style.opacity = 0;
        contactLinks.style.left = '-50px';
    } else {
        if (contactLinks.style.opacity == 0) {
            contactLinks.style.opacity = 1;
            contactLinks.style.left = '0px';
        }
    }
};


// Particles

particlesJS.load('left', 'scripts/particlesjs-config.json');
particlesJS.load('right', 'scripts/particlesjs-config.json');