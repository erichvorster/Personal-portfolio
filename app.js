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
      console.log(index / 7);
    });

    //Burger Animation
    burger.classList.toggle("toggle");
  });
  //Animate Links
};

navSlide();

//TEXT ANIMATION
gsap.from(".logo", {
  duration: 0.5,
  y: -30,
  opacity: 0,
  ease: "power4",
  delay: 1,
});
gsap.from(".home__link", {
  duration: 0.5,
  y: -30,
  opacity: 0,
  ease: "power4",
  delay: 1.05,
});
gsap.from(".about__link", {
  duration: 0.5,
  y: -30,
  opacity: 0,
  ease: "power4",
  delay: 1.1,
});
gsap.from(".project__link", {
  duration: 0.5,
  y: -30,
  opacity: 0,
  ease: "power4",
  delay: 1.15,
});
gsap.from(".contact__link", {
  duration: 0.5,
  y: -10,
  opacity: 0,
  ease: "power4",
  delay: 1.2,
});

gsap.from(".hero__content--firstname", {
  duration: 0.5,
  y: 50,
  opacity: 0,
  ease: "power4",
  delay: 1.4,
});
gsap.from(".hero__content--surname", {
  duration: 0.5,
  y: 50,
  opacity: 0,
  delay: 1,
  ease: "power4",
  delay: 1.45,
});
gsap.from(".hero__content--header", {
  duration: 0.5,
  y: 50,
  opacity: 0,
  delay: 1,
  ease: "power4",
  delay: 1.5,
});
gsap.from(".hero__content--paragraph", {
  duration: 0.5,
  y: 50,
  opacity: 0,
  delay: 1,
  ease: "power4",
  delay: 1.55,
});
gsap.from(".button-24", {
  duration: 0.5,
  y: 50,
  opacity: 0,
  delay: 1,
  ease: "power4",
  delay: 1.65,
});
gsap.from(".socails", {
  duration: 0.5,
  opacity: 0,
  delay: 1,
  ease: "power4",
  delay: 2,
});
gsap.from(".email", {
  duration: 0.5,
  opacity: 0,
  delay: 1,
  ease: "power4",
  delay: 2,
});

gsap.from(".about__grid", {
  scrollTrigger: ".about__grid",
  y: 20,
  opacity: 0,
  duration: 0.8,
  delay: 0.4,
  ease: "power4",
});

gsap.from(".project", {
  scrollTrigger: ".project",
  y: 20,
  opacity: 0,
  duration: 0.8,
  delay: 0.4,
  ease: "power4",
});
