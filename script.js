document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.mobile-menu-button');
    const navMenu = document.querySelector('.top-nav nav ul');
    
    menuButton.addEventListener('click', function(e) {
        e.stopPropagation();
        navMenu.classList.toggle('show');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.top-nav nav')) {
            navMenu.classList.remove('show');
        }
    });
}); 