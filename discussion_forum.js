document.addEventListener('DOMContentLoaded', function() {
    const filtersForm = document.getElementById('filters');
    const discussions = document.querySelectorAll('.discussion');

    filtersForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get filter values
        const keyword = document.getElementById('search').value.trim().toLowerCase();
        const author = document.getElementById('author').value.trim().toLowerCase();
        const interest = document.getElementById('interest').value.trim().toLowerCase();
        const sortBy = document.getElementById('sort-by').value;

        // Loop through discussions and apply filters
        discussions.forEach(function(discussion) {
            const title = discussion.querySelector('h3').innerText.toLowerCase();
            const startedBy = discussion.querySelector('p').innerText.toLowerCase();

            // Show/hide discussions based on filters
            if (
                (keyword === '' || title.includes(keyword)) &&
                (author === '' || startedBy.includes(author)) &&
                (interest === '' || title.includes(interest) || startedBy.includes(interest))
            ) {
                discussion.style.display = 'block';
            } else {
                discussion.style.display = 'none';
            }
        });

        // Additional sorting logic based on sortBy value
        if (sortBy === 'recent') {
            // Implement sorting by recent date
        } else if (sortBy === 'old') {
            // Implement sorting by old date
        } else if (sortBy === 'most-upvoted') {
            // Implement sorting by most upvoted
        }
    });
});