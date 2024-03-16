let number1 = Math.round(Math.random() * 21) - 10;
let number2 = Math.round(Math.random() * 21) - 10;
let number3 = Math.round(Math.random() * 21) - 10;
let pozitive = 0;

alert(number1 + "\n" + number2 + "\n" + number3)

if (number1 > 0 && number2 > 0 && number3 > 0) {
    alert(pozitive + 3);
}else if (number3 > 0 && number2 > 0) {
    alert(pozitive + 2);
}else if (number1 > 0 && number3 > 0) {
    alert(pozitive + 2);
}else if (number1 > 0 && number2 > 0) {
    alert(pozitive + 2);
}else if (number3 > 0) {
    alert(pozitive + 1);
}else if (number2 > 0){
    alert(pozitive + 1);
}else if (number1 > 0){
    alert(pozitive + 1);
}else {
    alert(pozitive)
}