// let users = {
//     "John": 28,
//     "Mark": 30,
//     "David": 25,
//     "Richard": 42
//   };

// let res = 0

// for(let i in users){
//    res = res + users[i];

// }

//    console.log(res);




// let arr = [];

// let res = 0;

// for (let i = 0; i < arr.length + 1; i++) {
//    let num = prompt("введите число",);
//    arr.push(num);
//    res = res + Number(arr[i]);
//    console.log(res);
//    if (arr[i] === null || Number(arr[i]) == 0 || arr[i] === "") {
//       alert(res / (arr.length - 1));
//       break;
//    }


// 100 , 50 , 20 , 10 , 5 ;
// }


// let price = 380 ;

// let arr = [];


// console.log(price % 50);

// if (price === (price - price % 100)) {
//    for (let i = 0; i < ((price - price % 100) / 100); i++) {
//       arr.push(100);
//    }
// } if (price !== (price - price % 100)) {
//    for (let i = 0; i < ((price - price % 100) / 100); i++) {
//       arr.push(100);
//    }
//    if (50 <= (price % 100)) {
//       arr.push(50);
//    }if ((50 > (price % 50))) {
//       for (let i = 0; i < ((price % 50) - (price % 50) % 20) / 20; i++) {
//          arr.push(20)
//       }
//    }
// }
// console.log(arr);


let price = 380;

const cash = [100, 50, 20, 10];

let result = [];

for (let i = 0; i < cash.length; i++) {
   const element = cash[i];

   while (price - element >= 0) {
      price -= element;
      result.push(element);
   }
}

console.log(result);








// let wontChek = () => {
// }
// wontChek();


















































