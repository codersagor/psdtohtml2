jQuery(document).ready(function ($) {
  const navTriger = document.querySelector(".mobile__menu-tiger span");
  const addClassIn = document.querySelector(".menu");

  function NavBar(triger) {
    triger.addEventListener("click", () => {
      console.log(addClassIn.classList.toggle("active__mobile__menu"));
    });
  }
  NavBar(navTriger);

  // skill bars
  const singleSkillBars = document.querySelectorAll(".skill-percentage");
  singleSkillBars.forEach((item) => {
    item.style.width = `${item.dataset.skill}%`;
  });

  // toggle experience and educations
  const tabs = document.querySelectorAll("[data-tab-id]");
  const allContents = document.querySelectorAll("[data-tab-content]");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = document.getElementById(tab.dataset.tabId);
      // hide others
      allContents.forEach((content) => {
        content.classList.remove("show");
      });
      target.classList.add("show");

      tabs.forEach((tab) => {
        tab.classList.remove("active");
      });
      tab.classList.add("active");
    });
  });

  // add last projcts margin top
  const allProjects = document.querySelectorAll(".project");
  allProjects.forEach((project) => {
    project.style.marginTop = "2rem";
  });

  // counter up intiall
  $(".counter").counterUp({
    delay: 10,
    time: 2000,
  });

  // custom tesmonial

  const testMonialAll = [
    {
      desc:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde molestias repellendus ipsa odit non, eveniet nisi iusto? Eius porro nostrum itaque debitis nam ad omnis incidunt",
      name: "Jhone Smith",
      role: "Creative Director",
      img: "./Assests/img/client.png",
    },
    {
      desc:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde molestias repellendus ipsa odit non, eveniet nisi iusto? Eius porro nostrum itaque debitis nam ad omnis incidunt libero voluptates,",
      name: "AB SAGOR",
      role: "CEO, sTECH",
      img: "./Assests/img/client-1.jpg",
    },
    {
      desc:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde molestias repellendus ipsa odit non, eveniet nisi iusto?",
      name: "ABU BOKKOR",
      role: "CEO, abTECH",
      img: "./Assests/img/client-3.png",
    },
  ];
  // slider controler owl carousel
  $(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    navText: [
      '<i class="zmdi zmdi-caret-left"></i>',
      '<i class="zmdi zmdi-caret-right"></i>',
    ],
    smartSpeed: 700,
    items: 1,
    nav: true,
  });
  // sticky menu add
  const header = document.querySelector("header");

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 180) {
      header.classList.add('sticky__menu')
    } else {
      header.classList.remove("sticky__menu");
    }
  });
});
