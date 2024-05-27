// function fixTheMeerkat(num1) {
//     let cnt = ''
//     num1.forEach((value, index, array) => {
//         array[index] = value[0]
//         if (array[index] == "h") {
//             cnt += value
//         }
//         else if (array[index] == "b") {
//             cnt += value
//         }
//         else if (array[index] == "t") {
//             cnt += value
//         }
    
        
//     })
//     return cnt
// }
// console.log(fixTheMeerkat(["tail", "body", "head"]));




// function fixTheMeerkat(arr) {
//     return arr.reverse()
// }
// console.log(fixTheMeerkat(["tail", "body", "head"]));








// function invert(arr) {
//     arr.map((el) => {
//         if (el < 0) {
//             return el
//         }
//         else{
//             return -el
//         }
//     })
//     return arr
// }
// console.log(invert([1,2,3,4,5]));









function monkey(num) {
    let a = num.split()
    num.reduce((previousValue, currentValue) => {
        previousValue - currentValue
        num.push(initialValue)
    }, initialValue)
    return num
}
console.log(monkey(10));