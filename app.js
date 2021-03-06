const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    console.log("click");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 1.5
        }s`;
      }

      link.addEventListener("click", () => {
        nav.classList.remove("nav-active");
      });
    });

    //Burger Animation
    burger.classList.toggle("toggle");
  });
  //Animate Links
};

navSlide();

const body = document.body;
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= 0) {
    body.classList.remove("scroll-up");
    return;
  }

  if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
    body.classList.remove("scroll-up");
    body.classList.add("scroll-down");
  } else if (
    currentScroll < lastScroll &&
    body.classList.contains("scroll-down")
  ) {
    body.classList.remove("scroll-down");
    body.classList.add("scroll-up");
  }
  lastScroll = currentScroll;
});

//Text animation

gsap.to(".logo", {
  duration: 0.5,
  y: 10,
  opacity: 1,
  ease: "power4",
  delay: 1,
});
gsap.to(".burger", {
  duration: 0.5,
  y: 10,
  opacity: 1,
  ease: "power4",
  delay: 1.05,
});

gsap.to(".home__link", {
  duration: 0.5,
  y: 10,
  opacity: 1,
  ease: "power4",
  delay: 1.05,
});
gsap.to(".about__link", {
  duration: 0.5,
  y: 10,
  opacity: 1,
  ease: "power4",
  delay: 1.1,
});
gsap.to(".project__link", {
  duration: 0.5,
  y: 10,
  opacity: 1,
  ease: "power4",
  delay: 1.15,
});
gsap.to(".contact__link", {
  duration: 0.5,
  y: 10,
  opacity: 1,
  ease: "power4",
  delay: 1.2,
});
gsap.to(".resume", {
  duration: 0.5,
  y: 10,
  opacity: 1,
  ease: "power4",
  delay: 1.2,
});

gsap.to(".hero__intro", {
  duration: 0.5,
  y: -50,
  opacity: 1,
  ease: "power4",
  delay: 1.3,
});

gsap.to(".hero__content--firstname", {
  duration: 0.5,
  y: -50,
  opacity: 1,
  ease: "power4",
  delay: 1.4,
  zIndex: 1,
});

gsap.to(".hero__content--header", {
  duration: 0.5,
  y: -50,
  opacity: 1,
  delay: 1,
  ease: "power4",
  delay: 1.5,
  zIndex: 1,
});
gsap.to(".hero__content--paragraph", {
  duration: 0.5,
  y: -50,
  opacity: 1,
  delay: 1,
  ease: "power4",
  delay: 1.55,
  zIndex: 1,
});
gsap.to(".button-24", {
  duration: 0.5,
  y: -50,
  opacity: 1,
  delay: 1,
  ease: "power4",
  delay: 1.65,
  zIndex: 1,
});
gsap.to(".socails", {
  duration: 0.5,
  opacity: 1,
  delay: 1,
  ease: "power4",
  delay: 2,
});
gsap.to(".email", {
  duration: 0.5,
  opacity: 1,
  delay: 1,
  ease: "power4",
  delay: 2,
});

///About

gsap.from(".about__header", {
  scrollTrigger: ".about__image__container",
  y: 20,
  opacity: 0,
  duration: 0.8,
  delay: 0.4,
  ease: "power4",
});
gsap.from(".about__content--1", {
  scrollTrigger: ".about__image__container",
  y: 50,
  opacity: 0,
  duration: 0.8,
  delay: 0.5,
  ease: "power4",
});
gsap.from(".about__content--2", {
  scrollTrigger: ".about__image__container",
  y: 50,
  opacity: 0,
  duration: 0.8,
  delay: 0.6,
  ease: "power4",
});
gsap.from(".technologies__header", {
  scrollTrigger: ".about__image__container",
  y: 50,
  opacity: 0,
  duration: 0.8,
  delay: 0.7,
  ease: "power4",
});
gsap.from(".technologies__container", {
  scrollTrigger: ".about__image__container",
  y: 50,
  opacity: 0,
  duration: 0.8,
  delay: 0.8,
  ease: "power4",
});
gsap.from(".about__image__container", {
  scrollTrigger: ".about__image__container",
  opacity: 0,
  duration: 0.3,
  delay: 1.2,
  ease: "power4",
});

///Projects

gsap.from(".featured__header", {
  scrollTrigger: ".featured",
  y: 50,
  opacity: 0,
  duration: 0.8,
  delay: 0.4,
  ease: "power4",
});
gsap.from(".featured__sub__header", {
  scrollTrigger: ".featured",
  y: 50,
  opacity: 0,
  duration: 0.8,
  delay: 0.4,
  ease: "power4",
});

gsap.from(".featured__container", {
  scrollTrigger: ".featured",
  x: -20,
  opacity: 0,
  delay: 0.6,
  ease: "power4",
  zIndex: 1000,
});

gsap.from(".featured__container--2", {
  scrollTrigger: ".featured",
  x: 20,
  opacity: 0,
  delay: 0.6,
  ease: "power4",
  zIndex: 1000,
});

gsap.from(".contact__container", {
  scrollTrigger: ".item",
  y: 20,
  opacity: 0,
  duration: 0.8,
  delay: 0.3,
  ease: "power4",
});
