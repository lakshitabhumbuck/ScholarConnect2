document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.filters-btn');
    const searchButton = document.getElementById('search-button');
    const searchBar = document.getElementById('search-bar');
    const joinButtons = document.querySelectorAll('.join-btn');
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('close-popup');
  
    // Toggle dropdown visibility on button click
    dropdowns.forEach(dropdown => {
      dropdown.addEventListener('click', function() {
        this.nextElementSibling.classList.toggle('show');
      });
    });
  
    // Close dropdown if clicked outside
    window.addEventListener('click', function(event) {
      dropdowns.forEach(dropdown => {
        if (!dropdown.contains(event.target)) {
          dropdown.nextElementSibling.classList.remove('show');
        }
      });
    });
  
    // Filter projects based on dropdown selection
    document.querySelectorAll('.dropdown-content a').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const filterType = this.parentNode.previousElementSibling.textContent.trim();
        const filterValue = this.getAttribute('data-filter');
  
        filterProjects(filterType, filterValue);
      });
    });
  
    // Search functionality
    searchButton.addEventListener('click', function() {
      const searchTerm = searchBar.value.trim().toLowerCase();
      filterBySearch(searchTerm);
    });
  
    // Join button functionality
    joinButtons.forEach(button => {
      button.addEventListener('click', function() {
        popup.style.display = 'block';
        // Example: Add logic to handle joining the project
        // For now, just show the popup
      });
    });
  
    // Close popup
    closePopup.addEventListener('click', function() {
      popup.style.display = 'none';
    });
  
    // Function to filter projects based on selected filters
    function filterProjects(filterType, filterValue) {
      const projects = document.querySelectorAll('.project');
  
      projects.forEach(project => {
        const area = project.getAttribute('data-area');
        const status = project.getAttribute('data-status');
  
        const isVisible = (
          (filterType === 'Area of Interest' && (filterValue === 'all' || area === filterValue)) ||
          (filterType === 'Status' && (filterValue === 'all' || status === filterValue))
        );
  
        if (isVisible) {
          project.style.display = 'block';
        } else {
          project.style.display = 'none';
        }
      });
    }
  
    // Function to filter projects by search term
    function filterBySearch(searchTerm) {
      const projects = document.querySelectorAll('.project');
  
      projects.forEach(project => {
        const title = project.querySelector('h3').textContent.toLowerCase();
        const isVisible = title.includes(searchTerm);
  
        if (isVisible) {
          project.style.display = 'block';
        } else {
          project.style.display = 'none';
        }
      });
    }
  });