document.addEventListener('DOMContentLoaded', function () {
    let currentImageIndex = 0;
    const images = document.querySelectorAll('.art-item');
    const imagesresized = document.querySelectorAll('.art-item-resized');
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

    function changeImageresized(direction) {
        currentImageIndex = (currentImageIndex + direction + imagesresized.length) % imagesresized.length;
        updateGalleryImageresized();
    }

    // Update the gallery image based on the current index
    function updateGalleryImage() {
        const imageSrc = images[currentImageIndex].src;
        galleryImage.src = imageSrc;
    }

    function updateGalleryImageresized() {
        const imageSrc = imagesresized[currentImageIndex].src;
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
                    console.log('Image clicked:', index);
openGallery(index);
        });
    });

    imagesresized.forEach((image, index) => {
        image.addEventListener('click', function () {
                    console.log('Image clicked:', index);
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


function isElementCenterScreen(el) {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const elementCenter = rect.top + rect.height / 2;
    const screenCenter = windowHeight / 2;

    return elementCenter >= screenCenter - (rect.height / 4) && elementCenter <= screenCenter + (rect.height / 4);
}

function handleScroll() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        if (isElementCenterScreen(card)) {
            card.classList.add('highlight');
        } else {
            card.classList.remove('highlight');
        }
    });
}

window.addEventListener('scroll', handleScroll);
handleScroll();


document.addEventListener('DOMContentLoaded', function () {
    let currentImageIndex = 0;
    const images = document.querySelectorAll('.art-item-new');
    const imagesresized = document.querySelectorAll('.art-item--newresized');
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

    function changeImageresized(direction) {
        currentImageIndex = (currentImageIndex + direction + imagesresized.length) % imagesresized.length;
        updateGalleryImageresized();
    }

    // Update the gallery image based on the current index
    function updateGalleryImage() {
        const imageSrc = images[currentImageIndex].src;
        galleryImage.src = imageSrc;
    }

    function updateGalleryImageresized() {
        const imageSrc = imagesresized[currentImageIndex].src;
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
                    console.log('Image clicked:', index);
openGallery(index);
        });
    });

    imagesresized.forEach((image, index) => {
        image.addEventListener('click', function () {
                    console.log('Image clicked:', index);
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
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".ui-section");
    const navLinks = document.querySelectorAll(".sidebar a");
  
    // Observer callback function
    const observerCallback = (entries) => {
      let activeSection = null;
  
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection = entry.target.id;
        }
      });
  
      if (activeSection) {
        navLinks.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href").slice(1) === activeSection
          );
        });
      }
    };
  
    // Intersection Observer
    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.6, // Ensures the section is mostly visible before activation
    });
  
    sections.forEach((section) => observer.observe(section));
  
    // Smooth scrolling and fixing highlight issue on click
    navLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const targetId = link.getAttribute("href").slice(1);
        const targetSection = document.getElementById(targetId);
  
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop - 20, // Offset for better positioning
            behavior: "smooth",
          });
  
          // Manually update active state since IntersectionObserver may lag
          navLinks.forEach((nav) => nav.classList.remove("active"));
          link.classList.add("active");
        }
      });
    });
  });
  



  document.addEventListener('DOMContentLoaded', function () {
    let currentImageIndex = 0;
    const images = document.querySelectorAll('.art-item-props');
    const imagesresized = document.querySelectorAll('.art-item-resized');
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

    function changeImageresized(direction) {
        currentImageIndex = (currentImageIndex + direction + imagesresized.length) % imagesresized.length;
        updateGalleryImageresized();
    }

    // Update the gallery image based on the current index
    function updateGalleryImage() {
        const imageSrc = images[currentImageIndex].src;
        galleryImage.src = imageSrc;
    }

    function updateGalleryImageresized() {
        const imageSrc = imagesresized[currentImageIndex].src;
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
                    console.log('Image clicked:', index);
openGallery(index);
        });
    });

    imagesresized.forEach((image, index) => {
        image.addEventListener('click', function () {
                    console.log('Image clicked:', index);
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





document.addEventListener('DOMContentLoaded', function () {
  let currentImageIndex = 0;
  const images = document.querySelectorAll('.art-item-props2');
  const imagesresized = document.querySelectorAll('.art-item-resized');
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

  function changeImageresized(direction) {
      currentImageIndex = (currentImageIndex + direction + imagesresized.length) % imagesresized.length;
      updateGalleryImageresized();
  }

  // Update the gallery image based on the current index
  function updateGalleryImage() {
      const imageSrc = images[currentImageIndex].src;
      galleryImage.src = imageSrc;
  }

  function updateGalleryImageresized() {
      const imageSrc = imagesresized[currentImageIndex].src;
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
                  console.log('Image clicked:', index);
openGallery(index);
      });
  });

  imagesresized.forEach((image, index) => {
      image.addEventListener('click', function () {
                  console.log('Image clicked:', index);
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




  document.addEventListener("DOMContentLoaded", () => {
    const topSections = ["about", "paper-props", "3d"];
    const sectionDivs = topSections.map(id => document.getElementById(id));
    const navLinks = document.querySelectorAll(".sidebar a.top-link");

    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -60% 0px",
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${entry.target.id}`) {
              link.classList.add("active");
            }
          });
        }
      });
    }, observerOptions);

    sectionDivs.forEach(section => observer.observe(section));
  });