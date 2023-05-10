// const saveBtn = document.querySelector("button");

// saveBtn.onclick = () => {
//   console.log("saved");
// };

// saveBtn.addEventListener("click", () => {
//   if (document.body.style.backgroundColor != "red") {
//     document.body.style.backgroundColor = "red";
//   } else {
//     document.body.style.backgroundColor = "blue";
//   }
// });

// saveBtn.addEventListener("mouseenter", () => {
//   console.log("Mouse entered");
// });
// saveBtn.addEventListener("mouseleave", () => {
//   console.log("Mouse leave");
// });
// saveBtn.addEventListener("mousemove", () => {
//   console.log("Mouse Mouve");
// });

// const nameInput = document.getElementById("nameInput");

// nameInput.addEventListener("focus", () => {
//   console.log("Girdi");
// });
// nameInput.addEventListener("blur", () => {
//   console.log("Cixdi");
// });

// nameInput.addEventListener("keydown", (e) => {
//   console.log(e.target.value, "basilidi qaldi");
// });
// nameInput.addEventListener("keyup", (e) => {
//   console.log(e);
//   if (e.key === "t") {
//     console.log("t basildi");
//   }
// });

// nameInput.addEventListener("change", (e) => {
//   console.log(e.target.value);
// });

// nameInput.addEventListener("keyup", (e) => {
//   console.log(e.target.value);
// });

// const nameInput = document.getElementById("nameInput");
// const ageInput = document.getElementById("ageInput");
// const genderInput = document.getElementById("genderInput");
// const tableBody = document.querySelector("tbody");
// const saveBtn = document.getElementById("saveBtn");

// saveBtn.addEventListener("click", () => {
//   if (
//     !nameInput.value.trim() ||
//     !ageInput.value.trim() ||
//     !genderInput.value.trim()
//   ) {
//     alert("Please fill all the fields!");
//     return;
//   }
//   const newTrItem = document.createElement("tr");
//   newTrItem.innerHTML = `
//     <td>${nameInput.value}</td>
//     <td>${ageInput.value}</td>
//     <td>${genderInput.value}</td>
//   `;
//   tableBody.append(newTrItem);
//   nameInput.value = "";
//   ageInput.value = "";
//   genderInput.value = "";
// });
