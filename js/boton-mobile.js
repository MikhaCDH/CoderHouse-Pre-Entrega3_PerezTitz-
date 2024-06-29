document.addEventListener("DOMContentLoaded", function() {
    var searchButton = document.querySelector('.btn-busqueda');
    var searchBar = document.querySelector('.buscar');

    searchButton.addEventListener('click', function() {
        if (window.innerWidth <= 810) {
            searchBar.classList.toggle('active');
        }
    });

    // Para que la barra de búsqueda se contraiga si se hace clic fuera de ella
    document.addEventListener('click', function(event) {
        if (!searchBar.contains(event.target) && window.innerWidth <= 810) {
            searchBar.classList.remove('active');
        }
    });
});