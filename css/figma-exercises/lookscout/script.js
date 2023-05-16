const hamburgerMenu = document.querySelector(".hamburger_menu");
const hamburgerMenuBtn = document.getElementById("hamburger_button");
const closeBtn = document.querySelector(".close_container > img");
// hamburgerMenu.style.display = "none";

hamburgerMenuBtn.addEventListener("click", () => {
  hamburgerMenu.classList.remove("hide");
});

// console.log(closeBtn);
closeBtn.addEventListener("click", () => {
  hamburgerMenu.classList.add("hide");
});
