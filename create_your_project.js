// Get form and popup elements
const form = document.getElementById('create-project-form');
const popup = document.getElementById('popup');
const popupMessage = document.getElementById('popup-message');
const closeBtn = document.getElementById('close-popup');

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault(); // Prevent default form submission
  
  // Show popup
  popup.style.display = 'block';

  // Reset form (optional)
  form.reset();

  // Close popup when close button is clicked
  closeBtn.addEventListener('click', function() {
    popup.style.display = 'none';
  });
}

// Event listener for form submission
form.addEventListener('submit', handleSubmit);
