(function controlAnimations() {
  const navbarIcon = document.getElementById("navbar-icon");
  const navbar = document.querySelector(".navbar");
  const overlay = document.getElementById("overlay")

  navbarIcon.addEventListener("click", () => {
    navbar.style.display = "block";
    navbar.classList.toggle("navbar-visible");
    navbar.classList.toggle("navbar-hidden");
  }) 

  document.getElementById("overlay").addEventListener("click", (e) => {
    navbar.style.display = "block";
    navbar.classList.toggle("navbar-visible");
    navbar.classList.toggle("navbar-hidden");
  })

  navbar.addEventListener("animationstart", (e) => {
    if (e.animationName === "expand") overlay.style.display = "block";
  })

  navbar.addEventListener("animationend", (e) => {
    console.log(e);
    if (e.animationName === "retract") {
      navbar.style.display = "none";
      overlay.style.display = "none";
    }
  })

  const typedOutTexts = document.querySelector(".typed-out");
  typedOutTexts.addEventListener("animationend", (e) => {
    console.log(e);
    if (e.animationName === "blink-caret") {
      typedOutTexts.style.borderColor = "transparent";
    } 
  })

})();