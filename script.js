// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }

}

// Side NavIgation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function(){
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
}
cancelBtn.onclick = function(){
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

// Side Navigation Bar Close While We Click On Navigation Links
let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}
document.addEventListener('DOMContentLoaded', function() {
  const contactButton = document.querySelector('.contact .button button');
  const icons = document.querySelectorAll('.media-icons .icon-border');

  contactButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior

    // Smooth scroll to home section
    const homeSection = document.getElementById('home');
    homeSection.scrollIntoView({ behavior: 'smooth' });

    // Highlight icons with delay
    setTimeout(() => {
      icons.forEach(icon => {
        icon.classList.add('active');
      });

      // Remove active class after 2 seconds
      setTimeout(() => {
        icons.forEach(icon => {
          icon.classList.remove('active');
        });
      }, 2000);
    }, 1000); // Adjust timing as needed
  });
});
const skillBoxes = document.querySelectorAll('.per'); // Select all elements with class "per"

function animatePercentages() {
  skillBoxes.forEach(box => {
    const targetPercent = Number(box.textContent.replace("%", "")); // Extract the number from the text content
    let currentPercent = 0;

    const intervalId = setInterval(() => {
      if (currentPercent >= targetPercent) {
        clearInterval(intervalId);
        box.textContent = `${targetPercent}%`; // Set final percentage
        return;
      }

      currentPercent++;
      box.textContent = `${currentPercent}%`; // Update percentage during animation
    }, 20); // Change the value here to adjust animation speed (lower = faster)
  });
}

window.addEventListener('load', animatePercentages); // Run animation on page load
document.addEventListener("DOMContentLoaded", () => {
  const knowMoreButton = document.getElementById("know-more");
  const downloadCVButton = document.getElementById("download-cv");

  knowMoreButton.addEventListener("click", () => {
    // Redirect to home section
    document.getElementById("home").scrollIntoView({ behavior: "smooth" });

    // Highlight the Download CV button
    downloadCVButton.style.transition = "all 0.5s";
    downloadCVButton.style.transform = "scale(1.1)";
    
    setTimeout(() => {
      downloadCVButton.style.transform = "scale(1)";
    }, 2000);
  });
});
