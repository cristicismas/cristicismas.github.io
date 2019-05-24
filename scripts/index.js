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
  