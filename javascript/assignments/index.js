// let from = 3;
// let to = 12;
// for (let i = from; i <= to; i++) {
//   let isPrime = true;
//   for (let j = 2; j < i; j++) {
//     if (i % j == 0) {
//       isPrime = false;
//     }
//   }
//   if (isPrime) {
//     console.log(i);
//   }
// }

// D.
// 1. Bir 'cars' adli array yaradin.
// 2. Arraya 'Mercedes', 'Audi' stringlərini əlavə edin.
// 3. Arrayin əvvəlinə 'TOGG' stringini əlavə edin.
// 4. Arraydəki son elementi silin.
// 5. Hər addimdan sonra arrayi console'a yazdirin

//          E.
// 	1. Bir integer return edən funskiya yaradın. Funksiya parametr olaraq bir integer array və bir integer dəyər alır.
// 	2. Funksiya girilən integer dəyərdən arrayin içində neçə ədəd olduğunu return eləsin.
// 	Example:
// 	countElement([1, 5, 8, 5, 3, 9], 5) => 2
// 	countElement([7, 7, 9, 8, 5, 4, 7], 7) => 3
//           F.
// 	reverseArray([1,2,3,4]) => [4,3,2,1]
//           G.
// 	compareArrays([1,2,3], [1,2,3]) => true
// 	compareArrays([1,3,2], [2,1,3]) => true
// 	compareArrays([1,2,3,4], [1,2,3]) => false
// 	compareArrays([1,2,2], [1,2,3]) => false
// H.
// 	1. Bir array return edən funksiya yaradın. Funksiya parametr olaraq array alır.
// 	2. Funksiya girilən arraydəki elementlərin yerini bir sonrakı ilə(əgər varsa) dəyişib arrayi return eləməlidir.
// 	Example:
// 	func([1, 2, 3, 4, 5, 6, 7]) => [2, 1, 4, 3, 6, 5, 7]
// 	func([4, 8, "sagol", 12, 3, "salam"]) => [8, 4, 12, "sagol", "salam", 3]

// function countElement(myArr, element) {
//   let count = 0;
//   for (const item of myArr) {
//     if (item === element) count++;
//   }
//   return count;
// }

// console.log(countElement([2, 3, 5, 2, 8], 22));

// function reverseArray(myArr) {
//   let reversedArray = [];
//   for (let i = myArr.length - 1; i >= 0; i--) {
//     reversedArray.push(myArr[i]);
//   }
//   return reversedArray;
// }
// console.log(reverseArray([1, 2, 3, 4]));

// function compareArrays(firstArr, secondArr) {
//   if (firstArr.length !== secondArr.length) return false;
//   firstArr.sort();
//   secondArr.sort();
//   for (let i = 0; i < firstArr.length; i++) {
//     if (firstArr[i] !== secondArr[i]) return false;
//   }
//   return true;
// }

// console.log(compareArrays([], []));

// function swapPairs(myArr) {
//   for (let i = 0; i < myArr.length - 1; i += 2) {
//     let temp = myArr[i];
//     myArr[i] = myArr[i + 1];
//     myArr[i + 1] = temp;
//   }
//   return myArr;
// }
// console.log(swapPairs([1, 2, 3, 4, 5, 6]));

// console.log(undefined || "" && "test");

// console.log("test" !== 'test'); // false
// console.log(5 != '5');// false

// function calculator(a,b){
//   if(a==5){
//     b();
//   }
// }

// calculator(5, function(){
//   console.log('test');
// })

// console.log(Number.isNaN());

// console.log();

// console.log(parseInt('100.5px'));
// console.log(parseFloat('s100.5px'));
// console.log(Number('100px'));

// let myArr = [1,2,3,2,4];

// console.log(myArr.splice(1,3));

// console.log(myArr);

// console.log(myArr.join('-').split(''));
            //  "1-2-3-4" -> ['1','2','3','4']

// console.log(Math.random());