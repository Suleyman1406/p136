const myNewH1 = document.createElement("h1");
myNewH1.textContent = "Hello everyone";
myNewH1.style.position = "absolute";
myNewH1.style.top = "50%";
myNewH1.style.left = "50%";
myNewH1.style.transform = "translate(-50%,-50%)";
document.body.append(myNewH1);

const colors = ["red", "blue", "pink", "yellow", "green", "brown"];
let selectedColor = 0;

setInterval(() => {
  if (selectedColor === 6) selectedColor = 0;
  document.body.style.backgroundColor = colors[selectedColor++];
}, 1000);
