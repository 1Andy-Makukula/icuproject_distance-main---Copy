document.addEventListener('DOMContentLoaded', function () {
    const slideshow = document.querySelector('.slideshow');
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;
    const slideCount = slides.length;
  
    function goToSlide(index) {
      const slideWidth = slides[index].offsetWidth + 20; // slide width + gap (adjust gap if different)
      slideshow.scrollTo({
        left: index * slideWidth,
        behavior: 'smooth'
      });
      currentIndex = index;
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % slideCount;
      goToSlide(currentIndex);
    }
  
    setInterval(nextSlide, 3000);
  });
  