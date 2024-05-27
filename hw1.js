// function minRecur(number) {
//     if (number < 10) {
//         return number;
//     }
//     let num1 = number % 10;
//     let num2 = Math.floor(number / 10);
//     let num3 = minRecur(num2);

//     return Math.min(num1, num3);
// }
// console.log(minRecur(123456789));









// function findMaxDigit(number) {
//     if (number < 10) {
//         return number;
//     } else {
//         let num1 = number % 10;
//         let num2 = findMaxDigit(Math.floor(number / 10));
//         return Math.max(num1, num2);
//     }
// }
// console.log(findMaxDigit(98493284))










// function displayRange(min, max) {
//     if (min > max) {
//         return;
//     } else {
//         console.log(min);
//         displayRange(min + 1, max); 
//     }
// }
// displayRange(1, 3);










