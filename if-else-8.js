let number1 = Math.round(Math.random() * 10);
let number2 = Math.round(Math.random() * 10);

alert(number1 + " & " + number2)

if (number1 < number2) {
    alert(number2);
    alert(number1);
}else if (number1 > number2) {
    alert(number1);
    alert(number2);
}
