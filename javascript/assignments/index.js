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
// function test(b){
//   console.log(b);
// }

// calculator(5, test)

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

// function isPalindrome(number) {
//   let stringNumber = String(number); // "112"
//   let arrayNumber = stringNumber.split("").reverse().join(""); // ["1","1","2"] -> ["2","1","1"] -> "211"
//   return stringNumber === arrayNumber;
// }
// console.log(isPalindrome(112));

// D.
//   1. Parametr olaraq array alan bir funksiya yaradın.
//   2. Funksiyanın içində bir 'result' dəyişkəniniz olacaq ki başlanğıc dəyəri 1 olmalıdır. Gələn arrayin içində boolean və integer dəyərlər olacaq. Hər zaman cüt indexlərdə integer'lər, tək indexlərdə boolean dəyərlər olacaq.
//   3. Arrayin içində olan dəyərlərə uyğun olaraq integerdan sonra gələn boolean true'dursa result dəyərinə vurulacaq. Və arraydəki bütün elementlərə bu uygulandıqdan sonra result return ediləcək.
//   ÖNƏMLİ!! true, false burada boolean dəyərdir. String Deyil!!
// Example:
//     func([2, true, 3, false, 7, true, 4 false]) => 14  //(2 * 7)
//     // burada 2 və 7 nin qarşısında true olduğuna görə onlar sadəcə bir birinə vurulur.
//     func([8, false, 4, false, 11, false, 2 false]) => 1
//     func([8, false, 3, true, 7, false, 1, true, 8, true] => 24 // (3*1*8)
//     func([5, false, 2, true, 7, true, 6, true, 9, false] => 84 // (2*7*6)

// function calculateTrues(myArr) {
//   let result = 1;
//   for (let i = 0; i < myArr.length; i += 2) {
//     if (myArr[i + 1]) {
//       result *= myArr[i];
//     }
//   }
//   return result;
// }

// console.log(calculateTrues([10, true, 2, false, 3, true, 4, false]));

// E.
//   1. Parametr olaraq array alan funksiya yaradın.  2. Girilən arrayin içində olan dəyərləri təkrar eləməyəcək şəkildə bir arrayə doldurun və bu arrayi return edin.
// ÖNƏMLİ!! Set'dən istifadə etmək olmaz.
//   Example:
//     func([1, "salam", 1, true, true, false, false, false, 5, "5"] => [1, salam, true, false, 5]
//     func([2, "class", 1, true, "class", 16, 17, 18,  "17"]) => [2, class, 1, true, 16, 17, 18]

// function clearArr(myArr) {
//   let myNewArr = [];
//   myArr.forEach((item) => {
//     if (typeof item === "string" && !isNaN(Number(item))) item = Number(item);
//     let itemIdx = myNewArr.findIndex((newItem) => {
//       return newItem === item;
//     });
//     if (itemIdx == -1) {
//       myNewArr.push(item);
//     }
//   });
//   return myNewArr;
// }

// console.log(
//   clearArr([1, "salam", 1, true, true, false, false, false, 5, "5", 0, "0"])
// );

// F.
//   1. Bir funksiya yaradın(hec birsey return elemeyecek). Funksiya parametr olaraq array alsın.
//   2. Funksiya girilən arrayin içindəki elementlərin hər birindən neçə dənə olduğunu ekrana yazdırmalıdır.
//   Example:
//     func([5, 2, "salam", "necesen", "salam", 56, 2, 7, 7, 7 ]) =>
//       print:
//       5 -> 1 ədəd
//       2 -> 2 ədəd
//       salam -> 2 ədəd
//       necesen -> 1 ədəd
//       56 -> 1 ədəd
//       7 -> 3 ədəd

// function countArrayItems(myArr) {
//   let myCountedArrItems = [];

//   myArr.forEach((item) => {
//     let resIdx = myCountedArrItems.findIndex((newItem) => item == newItem);
//     if (resIdx === -1) {
//       console.log(
//         `count of ${item} : ${myArr.filter((myItem) => myItem === item).length}`
//       );
//     }
//     myCountedArrItems.push(item);
//   });
// }

// countArrayItems([1, 1, 2, 2, 2, 3, 45]);
