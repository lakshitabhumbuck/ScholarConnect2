// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Select the signup link
    const signupLink = document.getElementById('signup-link');
  
    // Add click event listener
    signupLink.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default link behavior
  
      // Redirect to the signup page
      window.location.href = 'signup.html';
    });
  });
  