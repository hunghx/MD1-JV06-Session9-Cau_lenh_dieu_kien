// nhập giá trị a,b,c
let a = +prompt("Nhập vào số a ");
let b = +prompt("Nhập vào số b ");
let c = +prompt("Nhập vào số c ");
// giả sử a lớn nhất

// so sánh a với b và c

// if (a < b || a < c) {
//   // b lớn hơn a
//   if (b < c) {
//     // c lớn nhất
//     console.log(`Giá trị lớn nhất là ${c}`);
//   } else {
//     // b lớn nhất
//     console.log(`Giá trị lớn nhất là ${b}`);

//   }
// } else {
//     // a lớn nhất
//     console.log(`Giá trị lớn nhất là ${a}`);

// }

if (a > b && a > c) {
  // a lớn nhất
  console.log(`Giá trị lớn nhất là ${a}`);
} else {
  if (b < c) {
    // c lớn nhất
    console.log(`Giá trị lớn nhất là ${c}`);
  } else {
    // b lớn nhất
    console.log(`Giá trị lớn nhất là ${b}`);
  }
}
