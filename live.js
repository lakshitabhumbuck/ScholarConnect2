// Sample live users data
let liveUsers = [
    { name: 'Lakshita', specialization: 'Computer Science', year: 3, researchStatus: 'Published' },
    { name: 'Lavanya', specialization: 'Information Technology', year: 3, researchStatus: 'Not Published' },
    { name: 'Tanya', specialization: 'Computer Science', year: 2, researchStatus: 'In Process of Publishing' }
  ];
  
  // Sample live discussions data
  let liveDiscussions = [
    { askedBy: 'Mansha', askedTo: 'Lakshita', question: 'How can machine learning algorithms be optimized for processing large datasets in biomedical research, particularly in genomic studies?' },
    { askedBy: 'Lavnaya', askedTo: 'Tanya', question: 'How can integrate debugging tools to optimize Python code ?' }
  ];
  
  let isLive = false; // Flag to track live status
  
  // Function to update live users display
  function updateLiveUsers() {
    const liveUsersList = document.getElementById('live-users-list');
    liveUsersList.innerHTML = ''; // Clear existing list
  
    liveUsers.forEach(user => {
      const userItem = document.createElement('li');
      userItem.textContent = `${user.name} - ${user.specialization}, Year ${user.year}, Research Status: ${user.researchStatus}`;
      liveUsersList.appendChild(userItem);
    });
  }
  
  // Function to update live discussions display
  function updateLiveDiscussions() {
    const liveDiscussionsList = document.getElementById('live-discussions-list');
    liveDiscussionsList.innerHTML = ''; // Clear existing list
  
    liveDiscussions.forEach(discussion => {
      const discussionItem = document.createElement('li');
      discussionItem.textContent = `${discussion.askedBy} to ${discussion.askedTo}: ${discussion.question}`;
      liveDiscussionsList.appendChild(discussionItem);
    });
  }
  
  // Event listener for Submit Question button
  const submitQuestionBtn = document.getElementById('submit-question-btn');
  submitQuestionBtn.addEventListener('click', () => {
    if (isLive) {
      const recipientName = document.getElementById('recipient-name').value.trim();
      const questionText = document.getElementById('question-text').value.trim();
  
      if (recipientName !== '' && questionText !== '') {
        const question = {
          askedBy: 'Current User', // Replace with actual user name
          askedTo: recipientName,
          question: questionText
        };
        liveDiscussions.push(question);
        updateLiveDiscussions();
        document.getElementById('recipient-name').value = '';
        document.getElementById('question-text').value = '';
      }
    } else {
      alert('You need to go live before submitting a question!');
    }
  });
  
  // Event listener for Go Live button
  const goLiveBtn = document.getElementById('go-live-btn');
  goLiveBtn.addEventListener('click', () => {
    isLive = true;
    goLiveBtn.style.display = 'none'; // Hide Go Live button
    document.getElementById('close-live-btn').style.display = 'inline-block'; // Show Close Live button
    updateLiveUsers(); // Update live users display to indicate live status
  });
  
  // Event listener for Close Live button
  const closeLiveBtn = document.getElementById('close-live-btn');
  closeLiveBtn.addEventListener('click', () => {
    isLive = false;
    closeLiveBtn.style.display = 'none'; // Hide Close Live button
    document.getElementById('go-live-btn').style.display = 'inline-block'; // Show Go Live button
    updateLiveUsers(); // Update live users display to indicate not live
  });
  
  // Initial function calls to populate the lists
  updateLiveUsers();
  updateLiveDiscussions();
  