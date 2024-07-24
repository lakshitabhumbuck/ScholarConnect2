document.addEventListener('DOMContentLoaded', function() {
    // Function to handle navigation link clicks
    function navigateToSection(sectionId) {
        // Check if it starts with '#' indicating it's a section id in the current page
        if (sectionId.startsWith('#')) {
            // Scroll to the section
            document.querySelector(sectionId).scrollIntoView({
                behavior: 'smooth'
            });
        } else {
            // Otherwise, it's a target to another page or resource
            window.location.href = sectionId;
        }
    }

    // Get all navigation links
    const navLinks = document.querySelectorAll('nav ul li a');

    // Add click event listeners to each navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor behavior
            const sectionId = this.getAttribute('href'); // Get target section id
            navigateToSection(sectionId); // Navigate or scroll to the section
        });
    });

    // Get all "View More" buttons
    const viewMoreButtons = document.querySelectorAll('.service button');

    // Add click event listeners to each "View More" button
    viewMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get the target page or section id
            const target = this.getAttribute('data-target');
            navigateToSection(target); // Navigate to the target
        });
    });

     // Get the login button
     const loginButton = document.querySelector('.login');

     // Add click event listener to the login button
     loginButton.addEventListener('click', function() {
         // Navigate to the login page
         window.location.href = 'login.html'; // Replace with your actual login page URL
     });
 
});
