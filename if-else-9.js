let a = Number(prompt("A= "));
let b = Number(prompt("B= "));
let raznost = a - b;


if (a > b) {
    alert("B= " + (b + raznost + 1) + "\n" + "A= " + a + "\n" + "A < B");
}else {
    alert("A < B");
}