document.addEventListener("DOMContentLoaded", function () {
  let timeline = gsap.timeline();

  timeline
    .to(".image-wrap", {
      height: "550px",
      backgroundSize: "100%",
      duration: 1.5,
      ease: "power4.inOut",
    })
    .to(
      ".image-wrap",
      {
        height: "250px",
        backgroundPosition: "50% 58%",
        duration: 1.3,
        y: "0",
        ease: "power3.inOut",
      },
      1.5
    )
    .from(".big-name", {
      y: getYDistance(".big-name"),
      duration: 1.3,
      ease: "power3.inOut",
      }, 
      1.5
    )
    .from(".hide",{
      opacity: "0",
      duration: 1.3,
      ease: "power3.inOut",
    }, 1.5);
});

function getYDistance(el) {
  return (
   window.innerHeight - document.querySelector(el).getBoundingClientRect().top
   );
}
window.addEventListener("scroll", function () {
              const scrollPosition = window.pageYOffset;
              const bigName = document.querySelector(".big-name");
              const scrollText = document.querySelector(".scroll");
              const line = document.querySelector(".line");
              const location = document.querySelector(".bottom-section p");
              const socialMedia = document.querySelector(".social-media");
              const hamburger = document.querySelector(".hamburger");
              // Adjust the opacity of elements based on scroll position
              const opacity = 1 - scrollPosition / 500;
              bigName.style.opacity = opacity;
              scrollText.style.opacity = opacity;
              line.style.opacity = opacity;
              location.style.opacity = opacity;
              socialMedia.style.opacity = opacity;
              hamburger.style.opacity = opacity;
              // Move elements vertically based on scroll position
              bigName.style.transform = `translateY(-${scrollPosition}px)`;
              scrollText.style.transform = `translateY(-${scrollPosition}px)`;
              line.style.transform = `translateY(-${scrollPosition}px)`;
              hamburger.style.transform = `translateY(-${scrollPosition}px)`;
              // Move location and social media horizontally
              location.style.transform = `translateX(-${scrollPosition / 2}px)`;
              socialMedia.style.transform = `translateX(${scrollPosition / 2}px)`;
          });
// Wait for the page to load
window.addEventListener('load', function () {
  const parallaxBg = document.querySelector('.imgContainer');
  const parallaxText = document.querySelector('.content');

  // Apply initial positions (outside the viewport)
  parallaxBg.style.transform = 'translateX(-100%)'; // Start outside left side
  parallaxText.style.transform = 'translateX(100%)'; // Start outside right side
});

// Wait for the page to load
window.addEventListener('load', function () {
  const parallaxBg = document.querySelector('.imgContainer');
  const parallaxText = document.querySelector('.content');

  // Apply initial positions (outside the viewport)
  parallaxBg.style.transform = 'translateX(100%)'; // Start outside right side
  parallaxText.style.transform = 'translateX(-100%)'; // Start outside left side
});

// Wait for the page to load
window.addEventListener('load', function () {
  const parallaxBg = document.querySelector('.imgContainer');
  const parallaxText = document.querySelector('.content');

  // Apply initial positions (outside the viewport)
  parallaxBg.style.transform = 'translateX(100%)'; // Start outside right side
  parallaxText.style.transform = 'translateX(-100%)'; // Start outside left side

  // Apply initial opacity
  parallaxBg.style.opacity = 0;
  parallaxText.style.opacity = 0;
});

window.addEventListener('scroll', function () {
  const scrolled = window.scrollY;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;

  const parallaxBg = document.querySelector('.imgContainer');
  const parallaxText = document.querySelector('.content');
  

  // Calculate the scroll progress as a value between 0 and 1
  const scrollProgress = Math.min(1, scrolled / (documentHeight - windowHeight));

  // Slide in the image and text from the sides to their final positions
  parallaxBg.style.transform = `translateX(${(1 - scrollProgress) * 100}%)`; // Slide in from the right to left
  parallaxText.style.transform = `translateX(${(-1 + scrollProgress) * 100}%)`; // Slide in from the left to right
 
  // Fade in the image and text during the animation
  parallaxBg.style.opacity = scrollProgress;
  parallaxText.style.opacity = scrollProgress;
  
  // Fade out the "Scroll down" text
  
});

// Ensure the picture is fully loaded
const img = document.querySelector('.imgContainer img');
img.addEventListener('load', function () {
  img.style.opacity = 1;
});

// Ensure the text is fully visible at the bottom of the page
window.addEventListener('DOMContentLoaded', function () {
  const parallaxText = document.querySelector('.content');
  parallaxText.style.opacity = 1;
});

document.addEventListener("DOMContentLoaded", function () {
  // Your existing JavaScript code for animations here
});

const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const bars = document.querySelectorAll('.bar');
const toggleContainer = document.getElementById('toggleContainer');

let isOpen = false;

hamburger.addEventListener('click', () => {
isOpen = !isOpen;

if (isOpen) {
    bars[0].style.transform = 'rotate(45deg) translate(6px, 7px)';
    bars[1].style.opacity = '0';
    bars[2].style.transform = 'rotate(-45deg) translate(6px, -7px)';
    menu.style.right = '0';
    toggleContainer.style.display = 'block';
} else {
    bars[0].style.transform = 'none';
    bars[1].style.opacity = '1';
    bars[2].style.transform = 'none';
    menu.style.right = '-250px';
    toggleContainer.style.display = 'none';
}
});



const isDarkMode = localStorage.getItem('darkMode') === 'true';


if (isDarkMode) {
    document.body.classList.add('dark');
}

const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
   
    document.body.classList.toggle('dark');

    localStorage.setItem('darkMode', document.body.classList.contains('dark'));

});



setTimeout(function() {
  document.getElementById('ratingModal').style.display = 'block';
  updateAverageRating();
}, 5000);

function submitRating(rating) {
  
  const existingRatings = JSON.parse(localStorage.getItem('websiteRatings')) || [];
  
  
  
  
  existingRatings.push(Number(rating));
  localStorage.setItem('websiteRatings', JSON.stringify(existingRatings));
  document.getElementById('ratingModal').style.display = 'none'; 
  alert('Hodnocení se uložilo, DĚKUJEME');
  updateAverageRating();
}

function highlightStars(count) {
  const stars = document.querySelectorAll('.star');
  for (let i = 0; i < count; i++) {
    stars[i].classList.add('selected');
  }
}

function resetStars() {
  const stars = document.querySelectorAll('.star');
  stars.forEach(star => star.classList.remove('selected'));
}

function updateAverageRating() {
  const existingRatings = JSON.parse(localStorage.getItem('websiteRatings')) || [];
  const totalRatings = existingRatings.length;
  const sumRatings = existingRatings.reduce((acc, rating) => acc + rating, 0);
  const averageRating = totalRatings === 0 ? 0 : sumRatings / totalRatings;
  document.getElementById('averageRating').innerText = `Průměrné hodnocení: ${averageRating.toFixed(2)}`;
  document.getElementById('totalRatings').innerText = `Celkem hodnocení: ${totalRatings}`;
}

