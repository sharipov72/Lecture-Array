//test1
// function sumOfArray(num) {
//     let cnt=0;
//     num.forEach((adad) => {
//         cnt+=adad
//     })
//     return cnt;
// }
// console.log( sumOfArray([2, 4, 6, 8]));
// console.log( sumOfArray([1, 2, 3, 4, 5]));

//tets2
// function maxNum(arr) {
//     let cnt=0;
//     arr.forEach((value) => {
//         if(cnt<=value){
//             cnt=value;

//         }
//     })
//     return cnt;
// }
// console.log( maxNum([3, 8, 1, 6, 2]));
// console.log(maxNum([1, 2, 5, 7, 9]));
// console.log( maxNum([1, 2, 3, 4, 5]) );

//tets3
// function evenCount(arr) {
//     let cnt=0;
//  return  arr.filter((value) => {
//     if( value%2==0){
//     cnt++;
//     return true;
//     }
//     }).length
//     }
// console.log( evenCount([1, 2, 3, 4, 5, 6]));
// console.log(evenCount([ 2, 4, 6, 8]));

//test4
// function isPresent(num,num1) {
// return num.includes(num1)
// }
// console.log( isPresent([10, 20, 30, 40, 50], 30)   );

//tets5
// function arithmetic(arr) {
//     let cnt=0;
//     let sum=0;
//     arr.map((elemaent) =>{
//     sum+=elemaent;
//     cnt++
//     })
//     return Math.floor(sum/cnt)
// }
// console.log( arithmetic([2, 4, 6, 8]));
// console.log( arithmetic([1, 4, 6, 9, 10]));

//test1
// function mergeArrays(arr,arr1) {
//   return arr.concat(arr1)
// }
// console.log( mergeArrays([1, 2], [3, 4]));

//test2
// function findIndex(arr,arr1) {
//     return arr.indexOf(arr1)
// }
// console.log( findIndex([1, 2, 3], 2));
// console.log( findIndex([3,4,5,3,1,5,5,5,7,6], 5));

//test3
// function removeDuplicates(arr) {
//         return arr.

// }
// console.log( removeDuplicates([1, 2, 2, 3, 4, 4]));

//test4
// function removeNegatives(arr) {
//     return arr.filter((el)=>{
//         return el>0;
//     })
// }
// console.log( removeNegatives([-1, 2, -3, 4, -5]));

//test5
// function calculateAverage(arr) {
//     let cnt=0;
//         let sum=0;
//         arr.map((elemaent) =>{
//         sum+=elemaent;
//         cnt++
//         })
//         return Math.floor(sum/cnt)
// }
// console.log( calculateAverage([2, 4, 6, 8, 10]));
// console.log( calculateAverage([1, 2, 3, 4, 5]));

//test6
// function isPalindromeArray(arr) {
//     let cnt = arr.slice().reverse();
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== cnt[i]) {
//             return false;
//         }
//     }

//     return true;
// }
// console.log( isPalindromeArray([1, 2, 3, 2, 1]));
// console.log( isPalindromeArray([2, 1, 4, 7, 1]));
//  task7
// function arrBetween(arr, num1, num2) {
//     let array = arr.filter((num) => num > num1 && number < num2);
//     console.log(array);
//     return array;
// }



// console.log(arrBetween(3, 8, [1, 5, 95, 0, 4, 7]));