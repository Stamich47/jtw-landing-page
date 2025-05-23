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

document.addEventListener("DOMContentLoaded", function () {
  function handleHeroAnimation() {
    const heroText = document.querySelector(".hero-text-animate");
    if (!heroText) return;
    if (window.innerWidth >= 1200) {
      heroText.classList.add("animate__animated", "animate__fadeInLeft");
    } else {
      heroText.classList.remove("animate__animated", "animate__fadeInLeft");
      heroText.classList.add("animate__animated", "animate__fadeInLeft");
    }
  }
  handleHeroAnimation();
  window.addEventListener("resize", handleHeroAnimation);
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".pop-image").forEach(function (img) {
    img.addEventListener("click", function () {
      var modalImg = document.getElementById("modalImage");
      modalImg.src = this.src;
      modalImg.alt = this.alt || "";
      var modal = new bootstrap.Modal(document.getElementById("imageModal"));
      modal.show();
    });
  });

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
