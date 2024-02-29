$(".is--work-slider").append(`
    <div class="swiper-pagination">
        
    </div>
`);

const swiper = new Swiper(".is--work-slider", {
  direction: "horizontal",
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: "24rem",
  loop: true,
  centeredSlides: false,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },

  // Autoplay
  autoplay: {
    delay: 4000, // Delay of 4 seconds
    disableOnInteraction: false, // Resume autoplay after user interactions (swipe, navigation arrows, pagination, etc.)
  },
});

// marquee is--scrolling
const scrollSpeed = 50; // pixels per second, adjust as needed

function updateScrollingSpeed() {
  document.querySelectorAll(".marquee--scrolling").forEach((element) => {
    const scrollWidth = element.offsetWidth;
    const duration = scrollWidth / scrollSpeed; // seconds

    element.style.setProperty("--scroll-width", `${scrollWidth}px`);
    element.style.animationDuration = `${duration}s`;
  });
}

// Update on window load to ensure images are loaded
window.onload = updateScrollingSpeed;

// Update on window resize
window.addEventListener("resize", updateScrollingSpeed);
