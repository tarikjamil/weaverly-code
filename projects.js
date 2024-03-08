$(".richtext-project *").each(function (index) {
  let target = $(this);
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: $(this),
      start: "top bottom -=200",
    },
  });

  tl.from(
    target,
    {
      y: "20rem",
      opacity: 0,
      ease: "Quint.easeOut",
      duration: 1,
    },
    0
  );
});

$(".richtext *").each(function (index) {
  let target = $(this);
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: $(this),
      start: "top bottom -=200",
    },
  });

  tl.from(
    target,
    {
      y: "20rem",
      opacity: 0,
      ease: "Quint.easeOut",
      duration: 1,
    },
    0
  );
});

$(".richtext-outcomes *").each(function (index) {
  let target = $(this);
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: $(this),
      start: "top bottom -=200",
    },
  });

  tl.from(
    target,
    {
      y: "20rem",
      opacity: 0,
      ease: "Quint.easeOut",
      duration: 1,
    },
    0
  );
});

// Add class .is--open when .menu--link or .button.is--getstartednav is clicked
$(".menu--link, .button.is--getstartednav").click(function () {
  $(".navbar-logo-link").addClass("is--open");
});

// Remove class .is--open when .menu--trigger-close is clicked
$(".menu--trigger-close").click(function () {
  $(".navbar-logo-link").removeClass("is--open");
});
