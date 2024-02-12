const swiper = new Swiper(".is--work-slider", {
  direction: "horizontal",
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: "24rem",
  loop: false,
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
