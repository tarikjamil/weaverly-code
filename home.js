// slider 1
document.addEventListener("DOMContentLoaded", function () {
  let splide = new Splide(".is--home-outside", {
    type: "slide",
    perPage: 1,
    perMove: 1,
    gap: "24rem",
    arrows: false,
    pagination: false,
    breakpoints: {
      991: {
        // Tablet
        gap: "24rem",
        pagination: true,
      },
    },
  });
  splide.mount();
});
