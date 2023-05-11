// const myNewH1 = document.createElement("h1");
// myNewH1.textContent = "Hello everyone";
// myNewH1.style.position = "absolute";
// myNewH1.style.top = "50%";
// myNewH1.style.left = "50%";
// myNewH1.style.transform = "translate(-50%,-50%)";
// document.body.append(myNewH1);

// const colors = ["red", "blue", "pink", "yellow", "green", "brown"];
// let selectedColor = 0;

// setInterval(() => {
//   if (selectedColor === 6) selectedColor = 0;
//   document.body.style.backgroundColor = colors[selectedColor++];
// }, 1000);

const email_register = document.getElementById("email_register");
const password_register = document.getElementById("password_register");
const confirm_register = document.getElementById("confirm_register");
const button_register = document.getElementById("button_register");
const button_save = document.getElementById("button_save");
const table_body = document.querySelector("tbody");
const email_login = document.getElementById("email_login");
const password_login = document.getElementById("password_login");
const button_login = document.getElementById("button_login");
const words = document.getElementById("words");

const arr = [];
let editUser = null;
let editedElement = null;
button_register.addEventListener("click", () => {
  if (
    password_register.value.trim() != confirm_register.value.trim() ||
    !email_register.value.trim()
  )
    return;

  const new_tr_element = document.createElement("tr");
  new_tr_element.innerHTML = `
    <td>${email_register.value}</td>
    <td>${password_register.value}</td>
  `;
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  new_tr_element.append(deleteBtn, editBtn);
  const user = {
    email: email_register.value,
    password: password_register.value,
  };
  arr.push(user);
  table_body.append(new_tr_element);
  resetInputs();
  deleteBtn.addEventListener("click", () => {
    new_tr_element.remove();
    let resultIdx = arr.findIndex(
      (item) => item.email === user.email && item.password === user.password
    );
    arr.splice(resultIdx, 1);
  });
  editBtn.addEventListener("click", () => {
    email_register.value = user.email;
    password_register.value = user.password;
    confirm_register.value = user.password;
    editUser = user;
    editedElement = new_tr_element;
  });
});

button_save.addEventListener("click", () => {
  if (!editUser) return;
  const editUserIdx = arr.findIndex(
    (item) =>
      editUser.email === item.email && editUser.password === item.password
  );
  arr[editUserIdx].email = email_register.value;
  arr[editUserIdx].password = password_register.value;
  editedElement.children[0].textContent = email_register.value;
  editedElement.children[1].textContent = password_register.value;
  resetInputs();
  editUser = null;
  editedElement = null;
});

button_login.addEventListener("click", () => {
  if (!email_login.value || !password_login.value) return;

  const loginResult = !!arr.find(
    (user) =>
      email_login.value.trim() == user.email.trim() &&
      password_login.value.trim() == user.password.trim()
  );
  words.textContent = loginResult ? "Logged in" : "Not logged in";
});

function resetInputs() {
  email_register.value = "";
  password_register.value = "";
  confirm_register.value = "";
}
