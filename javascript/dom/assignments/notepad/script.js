const titleInput = document.getElementById("titleInput");
const searchInput = document.getElementById("searchInput");
const colorBtns = document.querySelectorAll(".color");
const saveBtn = document.getElementById("saveBtn");
const notesContainer = document.querySelector(".notes");
let selectedColor = null;
let colors = ["#ffe4c4", "#ffc0cb", "#ff7f50", "#bdb76b", "#00ff00"];
const notes = JSON.parse(localStorage.getItem("notes")) || [];

notes.forEach((note, idx) => {
  const newNote = document.createElement("div");
  const noteSpan = document.createElement("span");
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "del";
  noteSpan.textContent = note.desc;
  newNote.classList.add("note");
  newNote.style.backgroundColor = note.color;
  newNote.append(noteSpan, deleteBtn);
  notesContainer.append(newNote);
  deleteBtn.addEventListener("click", (e) => {
    // notesContainer.removeChild(newNote);
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    localStorage.setItem(
      "notes",
      JSON.stringify(notes.filter((note) => note.desc !== noteSpan.textContent))
    );
    e.target.parentElement.remove();
  });
});

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
  const notes = JSON.parse(localStorage.getItem("notes")) || [];
  localStorage.setItem(
    "notes",
    JSON.stringify([
      ...notes,
      { desc: titleInput.value, color: colors[selectedColor] },
    ])
  );
  const newNote = document.createElement("div");
  const noteSpan = document.createElement("span");
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "del";
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
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    localStorage.setItem(
      "notes",
      JSON.stringify(notes.filter((note) => note.desc !== noteSpan.textContent))
    );
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
