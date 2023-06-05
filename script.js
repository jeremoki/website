document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
  
    function showSlide() {
      slides.forEach(function(slide) {
        slide.classList.remove('active');
      });
  
      slides[currentSlide].classList.add('active');
      currentSlide = (currentSlide + 1) % slides.length;
    }
  
    setInterval(showSlide, 4000);
  });
  