import { portfolio } from "./projects-class";

(function controlAnimations() {
  const navbarIcon = document.getElementById("navbar-icon");
  const navbar = document.querySelector(".navbar");
  const overlay = document.getElementById("overlay");

  navbarIcon.addEventListener("click", () => {
    navbar.style.display = "block";
    navbar.classList.toggle("navbar-visible");
    navbar.classList.toggle("navbar-hidden");
  });

  document.getElementById("overlay").addEventListener("click", (e) => {
    navbar.style.display = "block";
    navbar.classList.toggle("navbar-visible");
    navbar.classList.toggle("navbar-hidden");
  });

  navbar.addEventListener("animationstart", (e) => {
    if (e.animationName === "expand") overlay.style.display = "block";
  });

  navbar.addEventListener("animationend", (e) => {
    console.log(e);
    if (e.animationName === "retract") {
      navbar.style.display = "none";
      overlay.style.display = "none";
    }
  });
})();

const carouselControl = () => {
  let index = 0;
  const indexEnd = portfolio.projects.length - 1;
  const carouselLeft = document.querySelector(".carousel-left");
  const carouselCenter = document.querySelector(".carousel-center");
  const carouselRight = document.querySelector(".carousel-right");
  const centerTitle = document.getElementById("carousel-center-title");
  const leftButton = document.querySelector(".carousel-left-btn");
  const rightButton = document.querySelector(".carousel-right-btn");

  appendCarousel();
  function appendCarousel() {
    const indexLeft = index === 0 ? indexEnd : index - 1;
    carouselLeft.src = portfolio.projects[indexLeft].image;
    leftButton.textContent = portfolio.projects[indexLeft].name;

    carouselCenter.src = portfolio.projects[index].image;
    centerTitle.textContent = portfolio.projects[index].name;

    const indexRight = index === indexEnd ? 0 : index + 1;
    carouselRight.src = portfolio.projects[indexRight].image;
    rightButton.textContent = portfolio.projects[indexRight].name;
  }

  leftButton.addEventListener("click", () => {
    index = (index === 0) ? indexEnd : index - 1;
    appendCarousel();
  });

  rightButton.addEventListener("click", () => {
    index = (index === indexEnd) ? 0 : index + 1;
    appendCarousel();
  });
};

carouselControl();
