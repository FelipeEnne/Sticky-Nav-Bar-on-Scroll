const links = document.querySelectorAll(".nav-list li a");

for (link of links) {
  link.addEventListener("click", smoothScroll);
}

function smoothScroll(e) {
  e.preventDefault();

  const href = this.getAttribute("href");

  document.querySelector(href).scrollIntoView({
    behavior: "smooth",
  });
}

//sticky header
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

const navList = document.querySelector(".nav-list");
navList.addEventListener("click", (e) => {
  const navLink = e.target.parentElement;
  if (navLink.classList.contains("link")) {
    navList.querySelector(".active").classList.remove("active");
    navLink.classList.add("active");
  }
});

// SCROLL TO TOP
const scrollBtn = document.querySelector(".top");
const rootEl = document.documentElement;

document.addEventListener("scroll", showBtn);
scrollBtn.addEventListener("click", scrollToTop);

function showBtn() {
  const scrollTotal = rootEl.scrollHeight - rootEl.clientHeight;
  if (rootEl.scrollTop / scrollTotal > 0.3) {
    scrollBtn.classList.add("show-btn");
  } else {
    scrollBtn.classList.remove("show-btn");
  }
}

function scrollToTop() {
  rootEl.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// mobile menu

// RESPONSIVE MOBILE MENU
const menuWrapper = document.querySelector(".nav-wrapper");
const menu = document.querySelector(".nav-list");
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");

// const showMenu = () => {
//   hamburger.style.display = "none";
//   close.style.transform = "translateY(0)";
//   menu.style.transform = "translateY(0)";
// };

// const hideMenu = () => {
//   close.style.transform = "translateY(-20rem)";
//   hamburger.style.display = "block";
//   menu.style.transform = "translateY(-200%)";
// };

const showMenu = () => {
  hamburger.style.display = "none";
  close.style.transform = "translateY(0)";
  menuWrapper.style.transform = "translateX(0)";
  menu.style.transform = "translateX(0)";
};

const hideMenu = () => {
  close.style.transform = "translateY(-20rem)";
  hamburger.style.display = "block";
  menuWrapper.style.transform = "translateX(-200%)";
  menu.style.transform = "translateX(200%)";
  subMenuThree.style.transform = "translateX(-100%)";
};

menuWrapper.addEventListener("click", hideMenu);

hamburger.addEventListener("click", showMenu);
close.addEventListener("click", hideMenu);

// Submenu Section
const thirdLink = document.querySelector(".third-link");
const back = document.querySelector(".back-to-menu");
const subMenuThree = document.querySelector(".submenu-three");

thirdLink.addEventListener("click", () => {
  menu.style.transform = "translateX(-100%)";
  subMenuThree.style.transform = "translateX(0)";
});

back.addEventListener("click", () => {
  menu.style.transform = "translateX(0)";
  subMenuThree.style.transform = "translateX(-100%)";
});

// Scroll Indicator JS
window.onscroll = () => scrollProgress();

function scrollProgress() {
  const currentState =
    document.body.scrollTop || document.documentElement.scrollTop;

  const pageHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const scrollPercentage = (currentState / pageHeight) * 100;

  const progressBar = document.querySelector(".progress");

  progressBar.style.visibility = "visible";
  progressBar.style.width = scrollPercentage + "%";
}
