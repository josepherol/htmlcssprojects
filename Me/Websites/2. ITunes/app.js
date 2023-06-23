var requirementsToggle = document.getElementById('requirements-toggle');
var section = document.querySelector('.systemreq');

requirementsToggle.addEventListener('click', function() {
    section.classList.toggle('active');
})