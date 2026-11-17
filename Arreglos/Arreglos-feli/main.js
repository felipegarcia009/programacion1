/* Arreglos -> conjunto de datos relacionados
   | 
   -> metodos -> puede medificar o realizar una accion sobre otro arreglo
 */


const vacio = [];

const frutas = ["manzana", "banana", "naranja"];

//Acceder por indice

console.log(frutas[0]); // "manzana"
console.log(frutas[2]); // "naranja"

//modificar un elemento

frutas[1] = "pera"

console.log(frutas); // ["manzana", "pera", "naranja"]


//.length te dice la dimencion

const numeros = [10, 20, 30, 40, 50];

console.log(numeros.length); // 5

// Ultimo alemento
const ultimo = numeros[numeros.length - 1];

console.log(ultimo); // 50

// Recorrer con bucle for

for(let i = 0; i < numeros.length; i++){

    console.log(numeros[i])

}

// Push te agrega el o los elementos al final y me dice la dimencion
const tareas = ["estudiar", "hacer ejercicio"];

tareas.push("leer")

console.log(tareas)

//["estudiar", "hacer ejercicio", "leer"];

// podira agregar varios a la vez

const nuevaDimencion = tareas.push("cocinar", "descansar");

console.log(nuevaDimencion)

// forEach para recorrer un array

const nombres = ["Ana", "Luis", "Mia"]

nombres.forEach((nombre) =>  console.log("hola", nombre)); 

// Hola, Ana | Hola, Luis | Hola, Mia

// Con indices

nombres.forEach((nombre, i) => console.log(`Posicion ${i + 1}: ${nombre}`));

//filter siempre me devuelve un arreglo que cumpla la condicion y sino un arreglo vacio

const  edades = [12, 25, 17, 30, 15, 22];

const mayores = edades.filter((edad) => edad >= 18);

console.log(mayores); // [25, 30, 22]

// Con strings

const productos = ["apple", "mango", "pear", "aprioot"];

const conA = productos.filter((p) => p.startsWith("a"));

console.log(conA); //["apple", "aprioot"]

//map generar un nuevo array sin modificar el original
const nums = [1, 2, 3, 4];

// duplicar cada numero

const  dobles = nums.map((n) => n * 2);
console.log(dobles); //[2, 4, 6, 8]

// Convertir a strings con formato
const precios = [100, 250, 80];
const formateados = precios.map((p) =>`$${p}`);
console.log(formateados); // ["$100", "$250", "$80"]

// find devuelve el primer elemento que cumple la condicion, si ninguno cumple devuelve undefind
const numeros2 = [3, 7, 15, 2, 22, 9];

const resultado = numeros2.find((n) => n > 10);

console.log(resultado); // 15 

const  palabras = ["luna", "sol", "mar", "cielo", "monte"];
const res2 = palabras.find((p) => p.startsWith("m"));
console.log(res2);

//findIndex devuelve el indice del elemento. si no lo encuentra devuelve -1
const frutas2 = ["manzana", "banana", "naranja", "uva"];
const idx = frutas2.findIndex((f) => f === "naranja");
console.log(idx); // 2

const noExiste = frutas2.findIndex((f) => f === "kiwi");
console.log(noExiste);

const pos = frutas2.findIndex((f) => f === "banana");

if(pos !== -1) frutas2[pos] = "mango";

console.log(frutas2); //["manzana", "mango", "naranja", "uva"]

// splice

const letras = ["a", "b", "c", "d", "e"];
// 1. Eliminar _ splice(inicio, cuantos)
const elin = letras.splice(1, 2);
console.log(letras);
console.log(elin);

// 2 insertar - splice(posicion, 0, nuevos)

letras.splice(1, 0, "x", "y");
console.log(letras);

// 3. reemplazar
letras.splice(2, 1, "z")
console.log(letras)

// reduce: acumula datos(suma)