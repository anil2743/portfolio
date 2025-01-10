// Select the toggle button, navigation links, and overlay
const toggleMenu = document.getElementById('toggle-menu');
const navLinks = document.querySelector('.nav-links');
const menuOverlay = document.createElement('div');
menuOverlay.classList.add('menu-overlay');
document.body.appendChild(menuOverlay);

// Toggle the menu on button click
toggleMenu.addEventListener('click', () => {
  navLinks.classList.toggle('open'); // Add or remove the 'open' class
  menuOverlay.classList.toggle('active'); // Show or hide the overlay
});

// Close the menu when clicking outside (on overlay)
menuOverlay.addEventListener('click', () => {
  navLinks.classList.remove('open'); // Remove the 'open' class
  menuOverlay.classList.remove('active'); // Hide the overlay
});

// Close the menu when a link is clicked
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
  item.addEventListener('click', () => {
    navLinks.classList.remove('open'); // Remove the 'open' class
    menuOverlay.classList.remove('active'); // Hide the overlay
  });
});

// Add blink effect to the active navigation heading
navItems.forEach(item => {
  item.addEventListener('click', () => {
    // Remove 'active' class from all links
    navItems.forEach(link => link.classList.remove('active-blink'));
    // Add 'active' class to the clicked link
    item.classList.add('active-blink');
  });
});




// Scroll animations for text
window.onload = function () {
  let nameText = document.getElementById("scroll-name");
  let backendText = document.getElementById("backend-dev");

  let nameContent = "N#Anil#Kumar";
  let backendContent = "I'm#Backend#Developer";

  // Function to animate text character by character
  function animateTextOnce(element, text) {
    let index = 0;
    let spacedText = text.split("#").join("               ");
    element.innerText = "";

    let interval = setInterval(() => {
      if (index < spacedText.length) {
        element.innerText += spacedText.charAt(index);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);
  }




  // Function for infinite scroll text effect
  function scrollTextInfinite(element, text) {
    let index = 0;
    let direction = 1;
    let spacedText = text.split("#").join("          ");
    element.innerHTML = "";

    setInterval(() => {
      let currentText = spacedText.substring(0, index);
      element.innerHTML = currentText.replace(
        "I'm",
        '<span style="color: brown;font-weight:bold;">I\'m</span>'
      );
      index += direction;

      if (index === spacedText.length || index === 0) {
        direction *= -1;
      }
    }, 100);
  }

  animateTextOnce(nameText, nameContent);
  setTimeout(() => {
    scrollTextInfinite(backendText, backendContent);
  }, 4000);
};

// Intersection Observer to detect when sections are in view
const sections = document.querySelectorAll('section');
const navLinksArray = document.querySelectorAll('.nav-links a');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const link = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);

    if (entry.isIntersecting) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}, {
  threshold: 0.5
});

sections.forEach(section => {
  observer.observe(section);
});





// Detect when the About section is in view and add a class to the heading
const aboutSection = document.getElementById('about');
const heading = document.querySelector('#about h1');

// Create an IntersectionObserver to detect when the About section is in view
const aboutObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Add the 'rotating-border' class when the About section is in view
      heading.classList.add('rotating-border');
    } else {
      // Remove the 'rotating-border' class when the About section is out of view
      heading.classList.remove('rotating-border');
    }
  });
}, {
  threshold: 0.5 // The section should be 50% in view to trigger the observer
});

// Observe the About section
aboutObserver.observe(aboutSection);
