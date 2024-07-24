// Sample data for resources (replace with actual data from your backend)
const resources = [
    {
      title: 'Quantum Computing: A Primer',
      category: 'research-templates',
      tags: ['research'],
      description: 'An introductory guide to quantum computing principles, algorithms, and potential applications.',
      fileUrl: 'https://www.wired.com/story/wired-guide-to-quantum-computing/', // Replace with actual file URL when available
      type: 'document',
      imageUrl: 'https://gmo-research.ai/en/application/files/5716/6080/5815/Quantum_Computing_Image.png', // Replace with actual image URL when available
      area: 'quantum-computing'
    },
    {
      title: 'APA Style Guide',
      category: 'citation-guides',
      tags: ['APA', 'citation', 'guide'],
      description: 'A comprehensive guide to APA style formatting.',
      fileUrl: 'https://apastyle.apa.org/instructional-aids/student-paper-setup-guide.pdf',
      type: 'document',
      imageUrl: 'https://blogs.qut.edu.au/library/files/2020/02/20200218_154527-1.jpg',
      area: 'robotics'
    },
    {
      title: 'Advancements in Biomechanics',
      category: 'research-templates',
      tags: ['research'],
      description: 'Investigate the intersection of biology and mechanics, focusing on human and animal movement analysis.',
      fileUrl: 'https://apastyle.apa.org/instructional-aids/student-paper-setup-guide.pdf', // Replace with actual file URL when available
      type: 'video', // Corrected type to 'video'
      imageUrl: 'https://www.kreedon.com/wp-content/uploads/2023/01/Biomechanics-Side-image-1024x735-1.jpg', // Replace with actual image URL when available
      area: 'biomechanics'
    },
    {
      title: 'Deep Dive into Computer Vision',
      category: 'research',
      tags: ['research'],
      description: 'A detailed guide to Computer Vision.',
      fileUrl: 'sample-research-template.pdf',
      type: 'document',
      imageUrl: 'https://recfaces.com/wp-content/uploads/2021/07/computer-vision_1.jpg',
      area: 'technology-scouting'
    },
    {
      title: 'Writing Tips for Beginners',
      category: 'writing-tips',
      tags: ['writing', 'tips', 'beginners'],
      description: 'Useful tips for improving your writing skills.',
      fileUrl: 'writing-tips.pdf',
      type: 'video',
      imageUrl: 'https://cdn.britannica.com/09/157609-050-54CC600B/Hand-with-pencil-writing-on-page.jpg',
      area: 'artificial-intelligence' // Corrected area to 'artificial-intelligence'
    },
    {
      title: 'Sample Research Template',
      category: 'research-templates',
      tags: ['template', 'research'],
      description: 'This is a sample research template.',
      fileUrl: 'sample-research-template.pdf',
      type: 'document',
      imageUrl: 'https://media.slidesgo.com/storage/7276401/research-methods-lesson1622629020.jpg',
      area: 'technology-scouting'
    }
  ];
  
  // Icons for different resource types
  const icons = {
    document: '📄',
    video: '🎥',
    webinar: '🗣️',
    'white-paper': '📑'
  };
  
  // Function to display resources
  function displayResources(filteredResources = resources) {
    const resourceList = document.getElementById('resource-list');
    if (!resourceList) {
      console.error('Resource list element not found.');
      return;
    }
  
    resourceList.innerHTML = ''; // Clear previous content
  
    filteredResources.forEach(resource => {
      const resourceItem = document.createElement('div');
      resourceItem.classList.add('resource-item');
  
      resourceItem.innerHTML = `
        <div class="icon-circle">${icons[resource.type]}</div>
        <img src="${resource.imageUrl}" alt="${resource.title}">
        <h3>${resource.title}</h3>
        <p><strong>Category:</strong> ${resource.category}</p>
        <p><strong>Tags:</strong> ${resource.tags.join(', ')}</p>
        <p>${resource.description}</p>
        <p><a href="${resource.fileUrl}" target="_blank">Know More</a></p>
      `;
  
      resourceList.appendChild(resourceItem);
    });
  }
  
  // Function to filter resources based on selected filters
  function filterResources() {
    const category = document.querySelector('.dropdown-content a[data-filter].active[data-filter-type="category"]')?.dataset.filter || '';
    const mediaType = document.querySelector('.dropdown-content a[data-filter].active[data-filter-type="media-type"]')?.dataset.filter || '';
    const areaOfInterest = document.querySelector('.dropdown-content a[data-filter].active[data-filter-type="area-of-interest"]')?.dataset.filter || '';
    const searchQuery = document.getElementById('search-bar').value.toLowerCase();
  
    const filteredResources = resources.filter(resource => {
      return (
        (category === '' || resource.category === category) &&
        (mediaType === '' || resource.type === mediaType) &&
        (areaOfInterest === '' || resource.area === areaOfInterest) &&
        (searchQuery === '' ||
         resource.title.toLowerCase().includes(searchQuery) ||
         resource.description.toLowerCase().includes(searchQuery) ||
         resource.tags.some(tag => tag.toLowerCase().includes(searchQuery))) // Added tag filtering
      );
    });
  
    displayResources(filteredResources);
  }
  
  // Initial display of resources
  displayResources();
  
  // Event listeners for dropdown filters
  document.querySelectorAll('.dropdown-content a').forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default action of anchor tag
  
      // Remove active class from other links in the same filter group
      const filterType = this.dataset.filterType;
      document.querySelectorAll(`.dropdown-content a[data-filter-type="${filterType}"]`).forEach(link => link.classList.remove('active'));
      
      // Add active class to the selected link
      this.classList.add('active');
  
      filterResources();
    });
  });
  
  // Event listener for search bar
  document.getElementById('search-bar').addEventListener('input', filterResources);
  document.getElementById('search-button').addEventListener('click', filterResources);
  