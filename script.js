document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.querySelector('.searchbox');
    const searchButton = document.querySelector('.search-button');
    const videoItems = document.querySelectorAll('.video-preview');
  
    // Function to filter videos
    function filterVideos(query) {
      videoItems.forEach(function(videoItem) {
        const title = videoItem.querySelector('.video-title').textContent.toLowerCase();
        const author = videoItem.querySelector('.video-author').textContent.toLowerCase();
  
        // Show or hide the video based on matching query
        if (title.includes(query) || author.includes(query)) {
          videoItem.style.display = 'block';
        } else {
          videoItem.style.display = 'none';
        }
      });
    }
  
    // Event listener for search button click
    searchButton.addEventListener('click', function() {
      const query = searchInput.value.toLowerCase();
      filterVideos(query);
    });
  
    // Event listener for pressing Enter in the search box
    searchInput.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        const query = searchInput.value.toLowerCase();
        filterVideos(query);
      }
    });
  });
  