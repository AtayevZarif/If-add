let number1 = Math.round(Math.random() * 21) - 10;
let number2 = Math.round(Math.random() * 21) - 10;
let number3 = Math.round(Math.random() * 21) - 10;
let pozitive = 0;
let negative = 0;

alert(number1 + "\n" + number2 + "\n" + number3)

if (number1 > 0 && number2 > 0 && number3 > 0) {
    alert("Pozitive: " + pozitive + 3  + "\n" + "Negative: " + negative);
}else if (number3 > 0 && number2 > 0) {
    alert("Pozitive: " + pozitive + 2 + "\n" + "Negative: " + negative + (3 - 2));
}else if (number1 > 0 && number3 > 0) {
    alert("Pozitive: " + pozitive + 2 + "\n" + "Negative: " + negative + (3 - 2));
}else if (number1 > 0 && number2 > 0) {
    alert("Pozitive: " + pozitive + 2 + "\n" + "Negative: " + negative + (3 - 2));
}else if (number3 > 0) {
    alert("Pozitive: " + pozitive + 1 + "\n" + "Negative: " + negative + (3 - 1));
}else if (number2 > 0){
    alert("Pozitive: " + pozitive + 1 + "\n" + "Negative: " + negative + (3 - 1));
}else if (number1 > 0){
    alert("Pozitive: " + pozitive + 1 + "\n" + "Negative: " + negative + (3 - 1));
}else if (number1 < 0 && number2 < 0 && number3 < 0) {
    alert("Pozitive: " + pozitive + "\n" + "Negative: " + negative + 3);
}else {
    alert*("Pozitive: " + pozitive + "\n" + "Negative: " + negative)
}