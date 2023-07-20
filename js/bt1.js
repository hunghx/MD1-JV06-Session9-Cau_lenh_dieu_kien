// tính chỉ số BMI
let weight = +prompt("Nhập vào cân nặng của bạn (kg)");
let height = +prompt("Nhập vào chiều cao của bạn (m)");
// tính toán chỉ số 
// let bmi = weight / (Math.pow(height,2));
let bmi = weight /(height*height);

if(bmi<18.5){
    document.write("Gầy");
}else if(bmi<25){
    document.write("Bình thường");
}else if(bmi<30){
    document.write("Tiền béo phì")
}else if(bmi <35){
    document.write("béo phì cấp  độ 1");
}else if(bmi <40){
    document.write("béo phì cấp  độ 2");
}else{
    document.write("béo phì cấp  độ 3");
}