function ejerci1() {
    const numero = [4, 8, 15, 16, 23, 42]
    numero.forEach((num) => console.log(num))
}

function ejer2() {
    const numero = [3, 12, 7, 25, 5, 18, 9, 30]
    const mayores = numero.filter((e) => e > 10);
    console.log(mayores);

}

function ejer3() {
    const numero = [2, 5, 10, 3, 8, 6]
    const triple = numero.map((n) => n * 3);
    console.log(triple)
}

function ejer4() {
    const numero = [14, 7, -3, 22, -8, 5, -1];
    const result = numero.find((r) => r < 0);
    console.log(result);
}

function ejer5() {
    const numero = [12, 45, 67, 8, 91, 33, 55];
    const primero = numero.findIndex((p) => p > 50);
    console.log(primero)
}

function ejer6() {
    const frutas = ["manzana", "banana", "naranja", "uva"]
    frutas.push("pera");
    console.log(frutas)
}

function ejer7() {
    const elem = ["rojo", "azul", "verde", "amarillo", "blanco"];
    const elim = elem.splice(2, 2);
    console.log(elim);
}

function ejer8() {
    const eleme = ["a", "e", "i", "o", "u"];
    console.log(eleme.length)
}

function ejer9() {
    const num = [1, 4, 7, 8, 3, 12, 5, 6, 11, 10];
    const doble = num.map((n) => n * 2)
    const pares = doble.filter((m) => m % 2 === 0);
    console.log(pares)
}

function ejer10() {
    const temp = [18, 25, 31, 12, 28, 35, 20]
    const mayores = temp.filter((m) => m > 25)
    const mayF = mayores.map((f) => `${f}C°`)
    console.log(mayF)
}

function ejer11() {
    const nums = [5, 9, 14, 22, 3, 28, 17]
    const elim = nums.splice(nums.findIndex((b) => b % 7 === 0), 1)
    console.log(elim)
}

function ejer12(){
    const nums = [2, 7, 10, 15, 4, 9, 12]
    const pares = nums.filter((p) => p % 2 === 0)
    const nuevo = pares.map((n) => n **2)
    console.log(nuevo)
}
