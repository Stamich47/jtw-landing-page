// Swiper initialization
document.addEventListener("DOMContentLoaded", function () {
  // Swiper for desktop hero images
  if (window.innerWidth >= 1200) {
    new Swiper(".mySwiper", {
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
  }

  // Animate.css hero animation
  function handleHeroAnimation() {
    const heroText = document.querySelector(".hero-text-animate");
    if (!heroText) return;
    heroText.classList.remove("animate__animated", "animate__fadeInLeft");
    // Always re-add to retrigger animation on resize
    void heroText.offsetWidth; // force reflow
    heroText.classList.add("animate__animated", "animate__fadeInLeft");
  }
  handleHeroAnimation();
  window.addEventListener("resize", handleHeroAnimation);

  // Pop Image Modal (fixes double backdrop bug)
  var imageModalEl = document.getElementById("imageModal");
  var imageModal = new bootstrap.Modal(imageModalEl);

  document.querySelectorAll(".pop-image").forEach(function (img) {
    img.addEventListener("click", function () {
      var modalImg = document.getElementById("modalImage");
      modalImg.src = this.src;
      modalImg.alt = this.alt || "";
      imageModal.show();
    });
  });

  // Navbar collapse on link click (for mobile)
  var navLinks = document.querySelectorAll(".navbar-collapse .nav-link");
  var navbarCollapse = document.querySelector(".navbar-collapse");
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (navbarCollapse.classList.contains("show")) {
        var bsCollapse = bootstrap.Collapse.getOrCreateInstance(navbarCollapse);
        bsCollapse.hide();
      }
    });
  });
});
