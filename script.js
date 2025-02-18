document.getElementById("downButton").addEventListener("click", function() {
    document.querySelector("#game-projects").scrollIntoView({ behavior: "smooth" });
});


document.addEventListener('DOMContentLoaded', function () {
    let currentImageIndex = 0;
    const images = document.querySelectorAll('.art-item');
    const galleryOverlay = document.getElementById('galleryOverlay');
    const galleryImage = document.getElementById('galleryImage');

    console.log('Gallery Images:', images); // Check if images are being selected correctly

    // Open the gallery
    function openGallery(index) {
        currentImageIndex = index;
        galleryOverlay.style.display = 'flex';
        updateGalleryImage();
    }

    // Close the gallery
    function closeGallery() {
        galleryOverlay.style.display = 'none';
    }

    // Change image based on direction (prev or next)
    function changeImage(direction) {
        currentImageIndex = (currentImageIndex + direction + images.length) % images.length;
        updateGalleryImage();
    }

    // Update the gallery image based on the current index
    function updateGalleryImage() {
        const imageSrc = images[currentImageIndex].src;
        galleryImage.src = imageSrc;
    }

    // Event listener for the close button
    const closeBtn = document.querySelector('.close');
    closeBtn.addEventListener('click', closeGallery);

    // Event listeners for prev and next arrows
    const prevBtn = document.querySelector('.prev');
    prevBtn.addEventListener('click', function () {
        changeImage(-1); // Show previous image
    });

    const nextBtn = document.querySelector('.next');
    nextBtn.addEventListener('click', function () {
        changeImage(1); // Show next image
    });

    // Set up click handlers for the art images
    images.forEach((image, index) => {
        image.addEventListener('click', function () {
            openGallery(index);
        });
    });

    // Close gallery if clicked outside the image
    galleryOverlay.addEventListener('click', function (event) {
        if (event.target === galleryOverlay) {
            closeGallery(); // Close the gallery if the overlay is clicked
        }
    });
});


const navLinks = document.querySelectorAll('nav ul li a');
  
  // Loop through all the links
  navLinks.forEach(link => {
    // Check if the link's href matches the current page URL
    if (link.href === window.location.href) {
      link.classList.add('active'); // Add the 'active' class to the current page link
    }
  });

  document.addEventListener('DOMContentLoaded', function () {

  document.getElementById("linkedin-icon").addEventListener("click", function() {
    window.open("https://www.linkedin.com/in/devikasantosh/", "_blank");
  });
  
  document.getElementById("github-icon").addEventListener("click", function() {
    window.open("https://github.com/devikasantosh", "_blank");
  });
  
  document.getElementById("behance-icon").addEventListener("click", function() {
      console.log('Behance icon clicked');
      window.open("https://www.behance.net/devikasantosh", "_blank");
  });
});