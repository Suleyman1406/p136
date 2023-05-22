const registerForm = document.querySelector("form");

const PASS_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

console.log(PASS_REGEX.test("asd2asdasd"));

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = e.target.children[0].firstElementChild.value;
  const password = e.target.children[1].firstElementChild.value;
  e.target.children[1].lastElementChild.textContent = PASS_REGEX.test(password)
    ? ""
    : "Password must have minimum eight characters, at least one letter and one number";
  if (!password.trim())
    e.target.children[1].lastElementChild.textContent = "Password  is required";
});
