// Paper Algos II

// function a(x,y) {
//     return 5;
// }

// console.log(a(5,5));

// Predicted Output:
// 5

// Actual Output:
// 5

// ---------------------------------------------
// function a(x,y) {
//     z = [];
//     z.push(x);
//     z.push(y);
//     z.push(5);
//     console.log(z);
//     return z;
// }
// b = a(2,2)
// console.log(b);
// console.log(a(6,8));

// Predicted Output:
// [2,2,5],[2,2,5],[6,8,5],[6,8,5]

// Actual Output:
// [2,2,5],[2,2,5],[6,8,5],[6,8,5]

// ---------------------------------------------
// function a(x) {
//     z = [];
//     z.push(x);
//     z.pop();
//     z.push(x);
//     z.push(x);
//     return z;
//  }
//  y = a(2);
//  y.push(5);
//  console.log(y);

// Predicted Output:
// [2,2,5]

// Actual Output:
// [2,2,5]

// ---------------------------------------------
// function a(x) {
//     if(x[0] < x[1]) {
//        return true;
//     }
//     else {
//        return false;
//     }
//  }
//  b = a([2,3,4,5]);
//  console.log(b);

// Predicted Output:
// true

// Actual Output:
// true

// ---------------------------------------------
// function a(x) {
//     for(var i = 0; i < x.length; i++) {
//         if(x[i] > 0) {
//             x[i] = 'Coding';
//         }
//     }
// }
// console.log(a([1,2,3,4]))

// Predicted Output:
// ['Coding','Coding','Coding','Coding']

// Actual Output:
// undefined

// ---------------------------------------------
// function a(x) {
//     for(var i = 0; i < x.length; i++) {
//       if(x[i] > 5){
//            x[i] = "Coding"
//       }
//       else if(x[i] < 0){
//            x[i] = "Dojo"
//       }
//   }
// }
// console.log(a([5,7,-1,4]))

// Predicted Output:
// undefined

// Actual Output:
// undefined

// ---------------------------------------------
// function a(x) {
//     if(x[0] > x[1]) {
//         return x[1];
//     }
//     return 10;
//  }
//  b = a([5,10])
//  console.log(b);

// Predicted Output:
// 10

// Actual Output:
// 10

// ---------------------------------------------
// function sum(x) {
//     sum = 0;
//     for(var i = 0; i < x.length; i++) {
//        sum = sum + x[i];
//        console.log(sum);
//     }
//     return sum;
// }

// Predicted Output:
// 

// Actual Output:
// 

// ---------------------------------------------
// Part 2

// function printAverage(x) {
//     var sum = 0;
//     for(let i = 0; i < x.length; i++) {
//         sum += x[i];
//     }
//     var avg = sum / x.length;
//     return avg;
// }

// y = printAverage([1,2,3]);
// console.log(y);

// y = printAverage([5,2,8]);
// console.log(y);

// ---------------------------------------------
// function returnOddArray() {
//     arr = [];
//     for(let i = 1; i <= 255; i++) {
//         if(i % 2 !== 0) {
//             arr.push(i);
//         }
//     }
//     return arr;
// }

// y = returnOddArray();
// console.log(y);

// ---------------------------------------------
// function squareValue(x) {
//     for(let i = 0; i < x.length; i++) {
//         x[i] *= x[i];
//     }
//     return x;
// }

// y = squareValue([1,2,3]);
// console.log(y);

// y = squareValue([2,5,8]);
// console.log(y);