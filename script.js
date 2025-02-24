document.getElementById("downButton").addEventListener("click", function() {
    document.querySelector("#game-projects").scrollIntoView({ behavior: "smooth" });
});

window.addEventListener("scroll", handleScroll);
document.getElementById("downButton").addEventListener("click", scrollToNavbar);


const filterButtons = document.querySelectorAll('.filter-button');
const projects = document.querySelectorAll('.project');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filter = button.dataset.filter;
        projects.forEach(project => {
            if (filter === 'all' || project.classList.contains(filter)) {
                project.classList.remove('hidden');
            } else {
                project.classList.add('hidden');
            }
        });
    });
});


let initialPositions = []; // Store initial positions and font sizes

function handleScroll() {
    adjustFontSize();
    checkNavbarVisibility();
}

function adjustFontSize() {
    const words = document.querySelectorAll(".this-word");
    words.forEach((word) => {
        const bounding = word.getBoundingClientRect();

        if (bounding.top < window.innerHeight && bounding.bottom > 0) {
            const scrollPercentage = (window.innerHeight - bounding.top) / window.innerHeight;
            const maxSize = 30;
            const minSize = 16;
            const fontSize = minSize + (maxSize - minSize) * scrollPercentage;

            word.style.fontSize = `${fontSize}px`;
            word.style.fontWeight = "bold";
        } else {
            word.style.fontSize = "16px";
            word.style.fontWeight = "normal";
        }
    });
}

function checkNavbarVisibility() {
    const navbar = document.getElementById("animated-navbar");
    const navbarBounding = navbar.getBoundingClientRect();
    const words = document.querySelectorAll(".this-word");

    if (navbarBounding.top < window.innerHeight / 2 && navbarBounding.bottom > 0) {
        navbar.classList.remove("hidden");
        navbar.style.opacity = "1";

        words.forEach((word, index) => {
            const navbarWord = document.querySelectorAll("#animated-navbar .word")[index];
            if (navbarWord) {
                const wordBounding = word.getBoundingClientRect();
                const navbarWordBounding = navbarWord.getBoundingClientRect();

                // Store initial positions if not already stored
                if (initialPositions.length < words.length) {
                    initialPositions.push({
                        left: wordBounding.left,
                        top: wordBounding.top,
                        fontSize: window.getComputedStyle(word).fontSize,
                        targetLeft: navbarWordBounding.left,
                        targetTop: navbarWordBounding.top,
                    });
                }

                // Calculate scroll progress
                const scrollProgress = Math.min(1, (window.scrollY - (navbarBounding.top - window.innerHeight / 2)) / window.innerHeight); // Adjusted scroll progress calculation
                const currentLeft = initialPositions[index].left + (initialPositions[index].targetLeft - initialPositions[index].left) * scrollProgress;
                const currentTop = initialPositions[index].top + (initialPositions[index].targetTop + 50 - initialPositions[index].top) * scrollProgress; //Added 50 to the target top to keep the fall effect.

                // Animate the word
                word.style.transition = "none"; // Remove transition to update immediately
                word.style.position = "absolute";
                word.style.zIndex = "1001";
                word.style.transform = `translate(${currentLeft - wordBounding.left}px, ${currentTop - wordBounding.top}px)`;

                if (scrollProgress >= 1) {
                    word.style.opacity = "0";
                } else {
                    word.style.opacity = "1";
                }

            }
        });
    } else {
        // Navbar is out of view, animate words back
        if (initialPositions.length > 0) {
            words.forEach((word, index) => {
                if (initialPositions[index]) {
                    word.style.display = "inline-block";
                    word.style.transition = "transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 1.2s ease-in-out, font-size 1.2s ease-in-out";
                    word.style.position = "absolute";
                    word.style.zIndex = "1001";
                    word.style.transform = `translate(${initialPositions[index].left - word.getBoundingClientRect().left}px, ${initialPositions[index].top - word.getBoundingClientRect().top}px)`;
                    word.style.opacity = "1";
                    word.style.fontSize = initialPositions[index].fontSize;

                    setTimeout(() => {
                        word.style.position = "relative";
                        word.style.transform = "none";
                        word.style.zIndex = "auto";
                        word.style.display = "inline-block";
                    }, 1200);
                }
            });
            initialPositions = [];
        }
        navbar.classList.add("hidden");
        navbar.style.opacity = "0";
    }
}

function scrollToNavbar() {
    const navbar = document.getElementById("animated-navbar");
    navbar.scrollIntoView({ behavior: "smooth" });
}


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