// let myArr = [
//   1,
//   "string",
//   true,
//   null,
//   undefined,
//   function () {
//     console.log("Nus olsun Ilkin");
//   },
// ];
// let myArr = [2, 1, 2, 34];
// console.log(myArr[myArr.length - 1]);
// console.log(myArr.at(-2));
// myArr.push("test", "test2", "test3");
// myArr.unshift("test1", "test2", "test3");

// myArr.pop();
// myArr.pop();
// myArr.shift();
// console.log(myArr);

// for (let i = 0; i < myArr.length; i++) {
//   console.log(myArr[i]);
// }
// let myArr = [2, 1, 2, 34];

// for (const item of myArr) {
//   console.log(item * 3);
// }

// for (let elgun in myArr) {
//   console.log(myArr[elgun]);
// }
// let myArr = [2, 1, 2, 34];
// let myNewArr = myArr; // myNewArr =[2, 1, 2, 34];
// myArr[1] = 99; // myArr = [2, 99, 2, 34]
// console.log(myNewArr);

// function changeStr(str) {
//   str = "Ilkin";
// }

// let myStr = "Elgun";
// changeStr(myStr);
// console.log(myStr);

// function changeArr(arr) {
//   arr[1] = 99;
// }

// let myArr = [1, 2, 3];
// changeArr(myArr);
// console.log(myArr);

// function changeArr(arr) {
//   arr = [1, 2, 3];
//   arr[2] = 33;
// }

// let myArr = [2, 3, 4];
// changeArr(myArr);
// console.log(myArr);

// let myArr = [1, 2, 3];
// let myNewArr = myArr;

// console.log(myArr === myNewArr);
// console.log([1, 2, 3] == [1, 2, 3]);
// let myArr = [1, 2, 3, 4, 5, 6, 7, 8];
// let myArr1 = [1, 2, 3, 4, 5, 6, 7, 8];
// let myArr2 = [1, 2, 3, 4, 5, 6, 7, 8];

// myArr.splice(2, 1, "test", "Ilkin", "Isa", "Hecer");
// console.log(myArr.includes(33));
// console.log(myArr.indexOf(8));
// console.log(myArr.concat(myArr1, myArr2, "sad", "sadas"));
// console.log(myArr.join("Elgun"));
// console.log(myArr);

// let count = 2;

// let myArr = [1, 2, 3, 4, 5];

// let myNewArr = [];
// myArr.forEach((item, elgun, mine) => {
//   myNewArr.push(item * 2);
//   // return item * 2;
// });
// console.log(myNewArr);

// let myDoubledArr = myArr.map((value) => {
//   // console.log(value * 2);
//   return value * 2;
// });

// console.log(myDoubledArr);

// let myArr = [
//   { name: "Suleyman" },
//   { name: "Hacar" },
//   { name: "Isa" },
//   { name: "Elgun" },
// ];

// console.log(
//   "result",
//   myArr.find((value) => {
//     // console.log(value);
//     return value.name === "Isa";
//   })
// );

// console.log(
//   "result",
//   myArr.findIndex((value) => {
//     // console.log(value);
//     return value.name === "Isa";
//   })
// );

// let myArr = [1, 2, 3, 4, 5, 6];

// let myNewArr = myArr.filter((value) => {
//   return value % 2 === 0;
// });

// console.log(myNewArr);
// console.log(myArr);

// let myArr = [
//   {
//     name: "Gizlilik sozlemesi",
//     isChecked: true,
//   },
//   { name: "Basqa sozlesme", isChecked: false },
//   { name: "Basqa sozlesme 2", isChecked: true },
// ];
// let result = myArr.every((value) => {
//   return value.isChecked;
// });

// console.log(result);

// let myArr = [1, 7, 3, 9, 5];

// let result = myArr.some((value) => {
//   return value % 2 == 0;
// });

// console.log(result);

// function sum(a, ...elgun) {
//   let sum = 0;
//   elgun.forEach((number) => {
//     sum += number;
//   });
//   return sum;
// }

// console.log(sum(2, 4, 8, 9, 8, 8, 7));

// console.log(Math.max(...myArr));
// console.log(myArr);
// let myArr = [1, 2, 3, 4, 5];
// let mySecondArray = [0, ...myArr, 6];

// console.log(mySecondArray);

// let myObj = {
//   name: "Hajjar",
//   surname: "Kimse",
//   age: 12,
// };

// let firstName = "suleyman";

// let myObj2 = {
//   state: "active",
//   // firstName: firstName,
//   firstName,
// };

// console.log(myObj2);

// let myObj = {
//   name: "Hajjar",
//   surname: "Kimse",
//   age: 12,
// };

// let myObj2 = {
//   // myObj: myObj,
//   ...myObj,
//   // name: myObj.name,
//   // surname: myObj.surname,
//   // age: myObj.age,
//   status: "active",
// };
// delete myObj2.age;
// console.log(myObj2);

// var a = "trial";
// var a = "ttt";

// if (true) {
//   var a = "test";
//   // let a = "test";
//   console.log("icerdeki", a);
// }

// for (let i = 0; i > 2; i++) {
//   let a = "test";
// }

// console.log("coldeki", a);
// var a;
// function test() {
//   a = "test";
// }

// // test();
// console.log(a);
// let myObject = {
//   // owner: {
//   //   name: "Haaajaar",
//   // },
// };
// try {
//   // console.log(myObject.owner.name);
//   throw Error("Hello my bratan");
// } catch (err) {
//   console.log(err);
// }

// console.log("Salam");

// let isPrime = false;

// if (isPrime)
//   console.log("Prime");
//   console.log("Deyil");

// if (
//   2 > 3 &&
//   2 > 5 &&
//   2 > 3 &&
//   2 > 5 &&
//   2 > 3 &&
//   2 > 5 &&
//   2 > 3 &&
//   2 > 5 &&
//   2 > 3 &&
//   2 > 5 &&
//   2 > 3 &&
//   2 > 5 &&
//   2 > 3 &&
//   2 > 5 &&
//   2 > 3 &&
//   2 > 5
// ) {
// }
