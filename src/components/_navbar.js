const body = document.querySelector("body");
const nav = document.querySelector("nav");
const arrowDown = document.querySelector(".arrow-down");

const createNavbar = () => {
  const pathName = location.pathname;

  nav.innerHTML = `
    <a href="index.html" class="nav__logo">
      <img src="./assets/spacex-mission-logo.png" alt="Logo" />
    </a>
    <ul class="nav__links">
      <li class="${
        pathName === "/index.html" ? "nav__links--active" : ""
      } nav__homeLink">
        <a href="./index.html">Home</a>
      </li>
      <li class="${
        pathName === "/past-launches.html" ? "nav__links--active" : ""
      }">
        <a href="./past-launches.html">Past Launches</a>
      </li>
      <li class="${pathName === "/vehicles.html" ? "nav__links--active" : ""}">
        <a href="./vehicles.html">Vehicles</a>
      </li>
      <li class="${pathName === "/history.html" ? "nav__links--active" : ""}">
        <a href="./history.html">History</a>
      </li>
    </ul>
    <div class="nav__burger">
      <div class="nav__burgerLine1"></div>
      <div class="nav__burgerLine2"></div>
      <div class="nav__burgerLine3"></div>
    </div>
  `;

  const burger = document.querySelector(".nav__burger");
  const navLinksList = document.querySelector(".nav__links");
  const navLinks = document.querySelectorAll(".nav__links li");

  burger.onclick = () => {
    body.classList.toggle("body--preventScrolling");
    // arrowDown.classList.toggle("arrow-hide");
    navLinksList.classList.toggle("nav--active");

    navLinks.forEach((link, index) => {
      const easeSpeed = index / 7 + 0.2;

      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `nav--linksFade 0.5s ease forwards ${easeSpeed}s`;
      }
    });

    burger.classList.toggle("nav--burgerToggle");
  };
};

export default createNavbar;

// window.onscroll = () => {

//   const scrollingPosition = Math.ceil(window.scrollY);

//   if (scrollingPosition > 100) {
//     nav.classList.add("nav--hide")
//     arrowDown.style.display = 'none';
//   } else {
//     nav.classList.remove('nav--hide');
//     arrowDown.style.display = 'block';
//   }

//   if (scrollingPosition > 300) {
//     scrollToTopButton.style.display = "block";
//   } else {
//     scrollToTopButton.style.display = "none";
//   }
// }

// const scrollToTopButton = document.querySelector('.nav__scrollToTopButton');
// function scrollToTop() {
//   window.scroll({
//     top: 0,
//     left: 0,
//     behavior: 'smooth'
//   });
// }
