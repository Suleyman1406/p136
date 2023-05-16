const openModalBtn = document.querySelector("#modal_btn_container button");
const closeModalBtn = document.querySelector(".modal span");
const modalContainer = document.querySelector(".modal_container");
const modal = document.querySelector(".modal");

document.body.addEventListener("click", () => {
  // console.log("body clicked");
});

closeModalBtn.addEventListener("click", () => {
  modalContainer.style.display = "none";
  // console.log("X icon clicked");
});

openModalBtn.addEventListener("click", () => {
  modalContainer.style.display = "flex";
});

modalContainer.addEventListener("click", () => {
  modalContainer.style.display = "none";
  // console.log("Modal Container clicked");
});

modal.addEventListener("click", (e) => {
  // e.stopPropagation();
});
