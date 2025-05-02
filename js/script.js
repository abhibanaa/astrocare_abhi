document.addEventListener("DOMContentLoaded", () => {
  const slideTrack = document.getElementById('slideTrack');
  let slides = document.querySelectorAll('.slide');
  let index = 0;

  // Clone first slide
  const firstClone = slides[0].cloneNode(true);
  slideTrack.appendChild(firstClone);
  slides = document.querySelectorAll('.slide'); // update after clone

  function showSlide(i) {
    slideTrack.style.transition = 'transform 0.5s ease-in-out';
    slideTrack.style.transform = `translateX(-${i * 100}%)`;
  }

  function resetLoop() {
    slideTrack.style.transition = 'none';
    index = 0;
    slideTrack.style.transform = `translateX(0%)`;
  }

  function autoSlide() {
    index++;
    showSlide(index);
    if (index === slides.length - 1) {
      setTimeout(resetLoop, 500);
    }
  }

  let interval = setInterval(autoSlide, 3000);

  document.querySelector('.next').addEventListener('click', () => {
    clearInterval(interval);
    autoSlide();
    interval = setInterval(autoSlide, 3000);
  });

  document.querySelector('.prev').addEventListener('click', () => {
    clearInterval(interval);
    index = (index - 1 + slides.length - 1) % (slides.length - 1);
    showSlide(index);
    interval = setInterval(autoSlide, 3000);
  });

  // ✅ Touch swipe
  let startX = 0;
  let endX = 0;

  slideTrack.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  });

  slideTrack.addEventListener('touchend', (e) => {
    endX = e.changedTouches[0].clientX;
    let diff = endX - startX;
    clearInterval(interval);

    if (Math.abs(diff) > 50) {
      if (diff < 0) {
        autoSlide(); // Swipe left
      } else {
        index = (index - 1 + slides.length - 1) % (slides.length - 1); // Swipe right
        showSlide(index);
      }
    }

    interval = setInterval(autoSlide, 3000);
  });
});







// =========kundli=============
document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.counter-value');
  const speed = 2000000; // The lower the faster

  const startCounting = () => {
      counters.forEach(counter => {
          const target = +counter.getAttribute('data-target');
          const count = +counter.innerText;
          
          // Calculate increment based on target value
          const increment = target > 1000 ? Math.ceil(target / (speed / 2)) : Math.ceil(target / speed);
          
          if (count < target) {
              // Add increment to count and update the element
              counter.innerText = Math.min(count + increment, target);
              // Call function every ms until target is reached
              setTimeout(() => startCounting(), 1);
          } else {
              counter.innerText = target;
          }
      });
  };

  // Start the animation when the section is in view
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              startCounting();
              observer.unobserve(entry.target);
          }
      });
  }, { threshold: 0.1 });

  observer.observe(document.querySelector('.counter-section'));
});





// ============footer=======


 // Generate dummy content
 document.addEventListener('DOMContentLoaded', function() {
  const contentContainer = document.getElementById('content-container');
  
  // Create 10 sections to make the page scrollable
  for (let i = 0; i < 10; i++) {
      const section = document.createElement('div');
      section.className = 'content-section';
      
      const heading = document.createElement('h2');
      heading.textContent = `Section ${i + 1}`;
      
      const paragraph = document.createElement('p');
      paragraph.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.';
      
      section.appendChild(heading);
      section.appendChild(paragraph);
      contentContainer.appendChild(section);
  }
});

// Scroll to top button functionality
document.addEventListener('DOMContentLoaded', function() {
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  
  // Show/hide button based on scroll position
  window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
          scrollTopBtn.classList.add('visible');
      } else {
          scrollTopBtn.classList.remove('visible');
      }
  });
  
  // Scroll to top when button is clicked
  scrollTopBtn.addEventListener('click', function() {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });
});







// ==========loader==========
window.addEventListener('load', function() {
  const loader = document.getElementById('loader');
  loader.style.display = 'none';
});
// ==========loader-end==========

