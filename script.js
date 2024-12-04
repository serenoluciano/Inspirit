
document.addEventListener('click', function(event) {
    var dropdown = document.querySelector('.dropdown');
    var dropdownMenu = document.querySelector('.dropdown-menu');
    if (!dropdown.contains(event.target)) {
        dropdownMenu.style.display = 'none';
    }
});

document.querySelector('.dropdown-toggle').addEventListener('click', function(event) {
    event.preventDefault();
    var dropdownMenu = document.querySelector('.dropdown-menu');
    dropdownMenu.style.display = (dropdownMenu.style.display === 'block') ? 'none' : 'block';
});
