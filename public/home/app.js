let hamburger = document.getElementById("hamburger");
let close = document.getElementById("close");
let closingNavMenuPage = document.getElementById("closingNavMenuPage");
let mobileNavMenuContainer = document.getElementById("mobileNavMenuContainer");
let mobileMenu = document.querySelectorAll("#mobileMenu");

closingNavMenuPage.addEventListener("click", function () {
    mobileNavMenuContainer.style.left = "-500px";
    close.style.display = "none";
    hamburger.style.display = "block";
    closingNavMenuPage.classList.replace("visible", "invisible");
    closingNavMenuPage.classList.replace("opacity-100", "opacity-0");
});
hamburger.addEventListener("click", function () {
    mobileNavMenuContainer.style.left = "0px";
    close.style.display = "block";
    hamburger.style.display = "none";
    closingNavMenuPage.classList.replace("invisible", "visible");
  closingNavMenuPage.classList.replace("opacity-0", "opacity-100");
});

close.addEventListener("click", function () {
  mobileNavMenuContainer.style.left = "-500px";
  close.style.display = "none";
  hamburger.style.display = "block";
});

// nav mobile menu

mobileMenu.forEach(function (element) {

  element.addEventListener("click", function (event) {    
    
    mobileMenu.forEach(function (item) {
      if (item === element) {
        element.nextElementSibling.classList.toggle("activeMenu");
      } else {
        item.nextElementSibling.classList.remove("activeMenu");
      }
    });
  });
});

