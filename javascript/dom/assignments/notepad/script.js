const titleInput = document.getElementById("titleInput");
const searchInput = document.getElementById("searchInput");
const colorBtns = document.querySelectorAll(".color");
const saveBtn = document.getElementById("saveBtn");
const notesContainer = document.querySelector(".notes");
let selectedColor = null;
let colors = ["#ffe4c4", "#ffc0cb", "#ff7f50", "#bdb76b", "#00ff00"];

colorBtns.forEach((colorBtn, idx) => {
  colorBtn.addEventListener("click", () => {
    if (selectedColor !== null)
      colorBtns[selectedColor].style.borderColor = "transparent";
    selectedColor = idx;
    colorBtns[selectedColor].style.borderColor = "black";
  });
});
saveBtn.addEventListener("click", () => {
  if (selectedColor === null) return alert("Please select COlor");
  if (!titleInput.value) return alert("Please fill the input");
  const newNote = document.createElement("div");
  const noteSpan = document.createElement("span");
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "de";
  noteSpan.textContent = titleInput.value;
  newNote.classList.add("note");
  newNote.style.backgroundColor = colors[selectedColor];
  newNote.append(noteSpan, deleteBtn);
  notesContainer.append(newNote);
  titleInput.value = "";
  colorBtns[selectedColor].style.borderColor = "transparent";
  selectedColor = null;
  deleteBtn.addEventListener("click", (e) => {
    // notesContainer.removeChild(newNote);
    e.target.parentElement.remove();
  });
});

searchInput.addEventListener("keyup", (e) => {
  Array.from(notesContainer.children)?.forEach((item) => {
    if (
      item.firstElementChild.textContent
        .toLowerCase()
        .trim()
        .includes(e.target.value.toLowerCase().trim())
    ) {
      item.style.display = "initial";
    } else {
      item.style.display = "none";
    }
  });
});
