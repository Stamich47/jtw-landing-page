const swiper = new Swiper(".mySwiper", {
  loop: true,
  effect: "fade",
  speed: 1000,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
