// let myCar = {
//   for: 'BMW',
//   '2age': 12,
//   'is-New-123': false,
//   printFullData: ()=>{
//     console.log('BWM 2011 ....');
//   },
//   owner: {
//     name: 'Ceyhun',
//     surname: '...'
//   },
//   name: 'Trial',

// }

// console.log(myCar.name);
// console.log(myCar.age);
// myCar.printFullData();
// console.log(myCar['is-New-123']);
// console.log(myCar);
// delete myCar.for;
// console.log(myCar);
// myCar.myNewProp = 'Hadjar'
// myCar.for= "Elgun"
// console.log(myCar);

// for (const elgun in myCar) {
//   console.log(elgun, myCar[elgun]);
// }

// let myCar = {
//   name: 'BMW'
// }
// let hecersCar = myCar;
// hecersCar.name = 'opel';
// console.log(myCar.name);

// let myCar = {
//   owner: {
//     name: "Sulo",
//     surname: "Dada",
//   },
// };
// let myCar;
//#region
// console.log(myCar.owner.name);
// console.log(myCar.color);
// if(myCar.owner){
//   console.log(myCar.owner.name);
// }else{
//   console.log('Qokku');
// }
//#endregion
// console.log(myCar && myCar.owner && myCar.owner.name);
// console.log(myCar?.owner?.name);

// console.log(Object.keys(myCar));
// console.log(Object.values(myCar));
// let age = 19;
// if (age > 18) {
//   console.log("Go Bar");
// } else if (age < 18) {
//   console.log("Go Home");
// } else {
//   console.log("I did not see you");
// }

// console.log(false ? 'equal' : 'not equal');
// console.log(age > 18 ? "Go Bar" : (age < 18 ? "Go Home" : "IDNSY"));

// let myValue = undefined;

// console.log(!myValue);
// console.log(!!!!!!null);

// let myCar = {
//   name: 'BMW',
//   weight: 0,
// }
//nullish
// console.log(myCar.weight ?? myCar.weight.toFixed(2));
// console.log(false ?? 'test');
// console.log(true ?? 'test');
// console.log("salam necesen" ?? 'test');
// console.log(null ?? 'kecdi null');
// console.log(undefined ?? 'kecdi undefined');

// let students = ['Dadashow','Hecer', 'Orxan', 'Ilkin', 'Denziyev'];
// let student1 = students[0]
// let student2 = students[1]
// let student3 = students[2]
// let student4 = students[3]
// Destructuring
// let [, ,,,,,,,, student3] = ['Dadashow','Hecer', 'Orxan'];
// console.log(student1);
// console.log(student3);
// let [student1, student2, ...students] = ['Dadashow','Hecer', 'Orxan', 'Ilkin', 'Denziyev'];
// console.log(students);

// let students = [
//   1,
//   2,
//   true,
//   function () {},
//   { name: "Dadashow" },
//   { name: "Ilkin" },
//   { name: "Test", age: 12 },
// ];
// console.log(students);

// let a = 12;
// let b = 13;

// [a, b] = [b, a];

// let {
//   owner: { name1 },
//   name,
//   age,
//   ...remaining
// } = {
//   name: "BMW",
//   age: 12,
//   weight: 1.2,
//   color: "red",
//   owner: {
//     name1: "Suleyman",
//     surname: "Dada",
//   },
// };

// console.log(name1);
