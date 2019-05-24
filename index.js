scrolldownArrow = document.getElementById('scrolldown-arrow');

scrolldownArrow.addEventListener('click', function(e) {
    e.preventDefault();

    document.getElementById('projects').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
})