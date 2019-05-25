scrolldownArrow = document.getElementById('scrolldown-arrow');

scrolldownArrow.addEventListener('click', function(e) {
    e.preventDefault();

    document.getElementById('projects').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});


AOS.init({
    offset: 150,
    duration: 600,
    disable: function() {
        return /bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent);
    }
});
  

const options = {
    strings: ['Hi!^500 I am a<br />web developer.^500\n<br /><br />I make useful web applications,<br />that grow businesses and bring new leads.'],
    typeSpeed: 25,
    showCursor: false
}

const typed = new Typed('.description', options);