let x = 1;
let y = 1;
let z = "1";
// toán tử so sánh "==" chỉ só sanhs giá trị , không so sánh kiểu dữ liệu
let rs1 = x == y; // true
let rs2 = x == z; // true

console.log(rs1, rs2);
// toán tử so sánh "===" so sánh cả giá trị lẫn so sánh kiểu dữ liệu
let rs3 = x === y; // true
let rs4 = x === z; // false

console.log(rs3, rs4);
// So sánh kháu nhau "!=" hoặc "!=="
console.log(x != y); // false
console.log(x != z); // false
console.log(x !== y); // false
console.log(x !== z); // true

console.log(2 >= 2);
let number = 5;
// 1 số chia hết cho 3
let condition1 = number % 3 == 0;
// 1 số chia hết cho 5
let condition2 = number % 5 == 0;
// vưà chia hết cho 3 vừa chia hết cho 5
let condition3 = condition1 && condition2;
// hoặc chia hết cho 3 , hoặc là chia hết cho 5
let condition4 = condition1 || condition2;
console.log("condittion1 " + condition1);
console.log("condittion2 " + condition2);
console.log("condittion3 " + condition3);
console.log("condittion4 " + condition4);
// let dk = (number%3 == 0);
console.log(!condition1);
console.log(!condition3);
console.log(typeof number);

let condition = 4 || (3 % 5 == 0 && 4 > 3) || 5 - 6 > 0;
console.log(condition);
// nếu x%2 == 0 thì x chia hết cho 2,
// nếu không thì x không chia hét cho 2
// cú pháp
x = 3;
let check = x % 2 == 0; // điều kiện kiểm tra số chẵn
if (!check) {
  // nếu điều kiện đúng
  console.log(`${x} không chia hêt cho 2`);
} else {
  // nếu điều kiện sai
  console.log(x + " chia hêt cho 2");
  console.log(`${x} chia hêt cho 2`);
}
//

// if(!(x%2==0)){
//     console.log(`${x} không chia hêt cho 2`);
// }
// tính diện tích hình tròn dựa vào bán kính nếu nó > 0
// pi*r^2
// let radius = prompt("Nhập vào bán kính hình tròn");
// if(radius>0){
//     // tính diện tích
//     let area= Math.PI * Math.pow(radius,2);
//     document.write(`Diện tích của hình tròn có bán kính
//      ${radius} là ${Math.round(area)}`);
// }
let a, b, c;
// let check1 = a>0 && b>0 && c>0; // 3 cạnh phải lớn hơn 0
// let check2 = (a+b>c) && (b+c>a)&& (c+a>b); //tổng 2 cạnh phải lớn hơn cạnh còn lại
// if( check1 && check2 ){
if (a > 0 && b > 0 && c > 0 && a + b > c && b + c > a && c + a > b) {
  console.log("3 cạnh tạo thành 1 tam giác");
} else {
  console.log("3 cạnh không tạo thành 1 tam giác");
}
// câu lệnh lồng
if (x % 3 == 0) {
  // chia hết cho 3
  if (x % 5 == 0) {
    // vừa chia hết cho 3 vừa chia hết cho 5
  } else {
    // chia hết cho 3 nhưng không chia hết cho 5
  }
} else {
  // không chia hết cho 3
  if (x % 5 == 0) {
    // chia hết cho 5 nhưng không chia hết cho 3
  } else {
    //vừa không chia hết ch0 3 vừa không chia hết cho 5
  }
}
// đánh giá xếp loại của hoc sinh dự vào điểm trung bình
// if(dtb>=8.0 && dtb<=10){
//     // học sinh giỏi
// }else if(dtb>=7.0){
//     // khá
// }else if(dtb>=6.5){
//     // trung bình
// }else{
//     // yếu
//    let area = 0;
//     //
//     console.log(area);
// }
let age = 18;
let checkAge = age >= 18; // true hoặc fasle
let nan = parseInt("hùng");
console.log(nan);
if (nan) {
  // được phép lái xe
  console.log("if được thực thi");
} else {
  // not a number
}
// if (i > j)
//     if (i > k) console.log("A");
// else console.log("B");

// so sánh số thực 
var s = 1.0 - 0.1 - 0.1 - 0.1 - 0.1 - 0.1;
console.log(s == 0.5);
console.log(s);