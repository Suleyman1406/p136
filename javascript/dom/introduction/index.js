// console.log(window);
// alert("Sebrli ol Ilkin Bey");
// let userName = window.prompt("What is your name?");
// console.log(userName);
// let res = window.confirm("Are you sure to delete?");
// console.log(res);

// console.log();
// window.location.href = "https://google.com";
// console.log(window.screen);

// console.log(window.document);
// window.document.body.style.backgroundColor = "#000";

// const primaryHeadingTag = document.getElementById("primary_heading_tag");

// console.log();
// primaryHeadingTag.textContent = "Haccer bu gun sakitdi.";
// primaryHeadingTag.style.position = "absolute";
// primaryHeadingTag.style.top = "300px";

// console.log(primaryHeadingTag.style.position);

// primaryHeadingTag.classList.add("test6");
// primaryHeadingTag.classList.remove("test3");
// primaryHeadingTag.classList.toggle("test3");

// console.log();
// primaryHeadingTag.className = "naber hacjii";

// const primaryHeadingTag = document.getElementById("primary_heading_tag");

// const primaryHeadingTag = document.getElementsByClassName("paragraph")[0];
// console.log(primaryHeadingTag);
// if (primaryHeadingTag) primaryHeadingTag.style.color = "pink";

// const primaryHeadingTag = document.getElementsByTagName("h1");
// console.log(primaryHeadingTag);

// const primaryHeadingTag = document.querySelector("#primary_heading_tag");
// console.log(primaryHeadingTag);

// const primaryHeadingTag = document.querySelector(".paragraph");
// console.log(primaryHeadingTag);
// const primaryHeadingTag = document.querySelectorAll(".paragraph");
// console.log(primaryHeadingTag);
// const myDivHeadingTag = document.querySelector("div .test8");
// console.log(myDivHeadingTag);

// const htmlBodyTag = document.querySelector("body");
// const htmlBodyTag = document.body;

// const myNewH1Tag = document.createElement("h1");
// myNewH1Tag.textContent = "Hatter";

// const myNewH1Tag2 = document.createElement("h1");
// myNewH1Tag2.textContent = "Hatter 2";

// const myDiv = document.querySelector("div");
// myDiv.innerHTML = `
//   <div>
//     <b>Salam</b>
//   </div>
//   `;

// const myNewH1Tag3 = document.createElement("h1");
// myNewH1Tag3.textContent = "Hatter 3";
// htmlBodyTag.append(myNewH1Tag, myNewH1Tag2, myNewH1Tag3);
// htmlBodyTag.prepend(myNewH1Tag);

// while (true) {
// const htmlTableBodyTag = document.querySelector("tbody");
// const userData = prompt("Enter user data");
// const userDataArr = userData.split(" ");
// if (userDataArr.length === 3) {
//   const newTrElement = document.createElement("tr");

//   newTrElement.innerHTML = `
//       <td>${userDataArr[0]}</td>
//       <td style="color:red">${userDataArr[1]}</td>
//       <td>${userDataArr[2]}</td>
//     `;
//   htmlTableBodyTag.append(newTrElement);
// } else {
//   // alert("sehv yazdin qadasi");
//   window.location.reload();
// }
// }

// setTimeout
// setInterval

// setTimeout(() => {

// }, 1000);

// setTimeout(() => {
//   console.log("2 san kecdi Hejjer hele de danisir");
// }, 1000);

// let myIntervalId = setInterval(() => {
//   console.log("saniyeler kecmeye davam edir, ancaq heci susmur");
// }, 2000);

// setTimeout(() => {
//   clearInterval(myIntervalId);
// }, 10000);

const myDiv = document.querySelector("div");
const myNewPTag = document.createElement("p");
myNewPTag.textContent = "Haci";

myDiv.append(myNewPTag);

setTimeout(() => {
  myNewPTag.remove();
}, 3000);
