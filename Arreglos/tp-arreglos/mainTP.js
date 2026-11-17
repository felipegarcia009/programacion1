function ej1() {
    const nombres = ["Ana", "Luis", "Marta", "Pedro"]
    nombres.forEach((nombre) => console.log(`hola ${nombre} chaboon`))
}

function ej2() {
    let suma = 0
    const compras = [1200, 850, 430, 2100]
    compras.forEach((n) => suma += n)
    console.log(suma)
}

//ej3
function productiosConIVA() {
    const precios = [1000, 2500, 800, 1500]

    const preciosIVA = prcios.map(precios => Math.round(precios * 1.21))

    console.log("los productos con IVA: $", preciosIVA)
}

function ej4() {
    const estudiantes = [
        { id: 1, nombre: "Lucia", nota: 4 },
        { id: 2, nombre: "Maia", nota: 9 },
        { id: 3, nombre: "Tomas", nota: 5 },
        { id: 4, nombre: "Jeremías", nota: 9 }
    ]
    estudiantes.map((e) => console.log(`el nombre del estudiante es ${e.nombre}`))
}

function ej5() {
    const nombres = ["Ana", "Luis", "Marta", "Pedro", "Sofia", "Juan"]
    const mayores = nombres.filter((n) => n.length >= 4)
    console.log(`los nombres mas largos de cuatro letras son: ${mayores}`)
}

function ej6() {
    const estudiantes = [
        { id: 1, nombre: "Lucia", nota: 4 },
        { id: 2, nombre: "Maia", nota: 9 },
        { id: 3, nombre: "Tomas", nota: 5 },
        { id: 4, nombre: "Jeremías", nota: 9 }
    ]
    const estu = estudiantes.find((e) => e.id === 3)
    const estu2 = estudiantes.find((e) => e.id === 10)
    console.log(`el estudiante de id 3 es: ${estu.nombre}`)
    console.log(estu2 ? `el estudiante de id 10 es: ${estu2.nombre}` : "no se encontro el estudiante")
}

function ej7() {
    const productos = [
        { nombre: "Mouse", stock: 5 },
        { nombre: "Teclado", stock: 0 },
        { nombre: "Monitor", stock: 2 },
        { nombre: "Webcam", stock: 0 }
    ];
    const produ = productos.filter((p) => p.stock > 0)
    console.log(`los productos con stock son: ${produ}`)
    console.log(produ)
}

//ej8
const carrito = ["pan", "mayonesa"]

function agreProducto(producto) {
    //includes => verifia si lo que recibe desde el parametro ya existe en el arreglo

    if (carrito.includes(producto)) {
        console.log(`el producto ${producto} ya existe en el carrito, no se va a agregar`)
    } else {
        carrito.push(producto);
        console.log(`el producto ${producto} fue agregado con exito`)
    }


}

function ej9() {
    const estudiantes = [
        { id: 1, nombre: "Lucia", nota: 4 },
        { id: 2, nombre: "Maia", nota: 9 },
        { id: 3, nombre: "Tomas", nota: 5 },
        { id: 4, nombre: "Jeremías", nota: 9 }
    ]

    const aprobados = estudiantes.filter((estudiante) => estudiante.nota >= 6)

    const aprobadosFormato = aprobados.map(estudiante =>
        `${estudiante.nombre}: ${estudiante.nota}`
    );

    aprobadosFormato.forEach(estudiante => {
        console.log(estudiante);
    });

}

function ej10() {
    //Métodos de Búsqueda
    find()

    //¿Qué hace? Busca y devuelve el valor del primer elemento dentro del arreglo que cumple con la condición evaluada en una función de prueba (callback). Si ningún elemento cumple la condición, devuelve undefined.

    //Ejemplo: Ideal para buscar objetos con propiedades específicas (por ejemplo, buscar un usuario por su ID).

    includes()

    //¿Qué hace? Determina si un arreglo incluye o contiene un valor determinado, devolviendo un valor booleano (true si lo encuentra, false en caso contrario). Es perfecto para validaciones de existencia rápidas.

    //Ejemplo: Verificar si una lista de compras ya tiene "manzana" antes de agregarla.

    //Métodos de Transformación (Modificación)
    push()

    //¿Qué hace? Añade uno o más elementos al final del arreglo original. Modifica directamente la estructura del arreglo aumentando su longitud y devuelve el nuevo tamaño del mismo.

    //Ejemplo: Agregar un nuevo puntaje al final de una lista de puntuaciones (puntuaciones.push(100)).

    splice()

    //¿Qué hace? Es un método de modificación muy potente que permite cambiar el contenido de un arreglo mediante la eliminación, reemplazo o adición de elementos en una posición (índice) específica. Modifica el arreglo original in-place.

    //Ejemplo: Eliminar un elemento en una posición dada indicando el índice de inicio y la cantidad de elementos a borrar (arreglo.splice(2, 1) elimina 1 elemento a partir del índice 2).
}


//ej11u
const libros = [
    { titulo: "El Hobbit", disponible: true, generos: ["fantacia", "aventura"] },
    { titulo: "Dracula", disponible: false, generos: ["terror", "clasico"] },
    { titulo: "harry Potter", disponible: true, generos: ["fantacia", "juvenil"] },
    { titulo: "It", disponible: true, generos: ["terror"] },
    { titulo: "Eragon", disponible: false, generos: ["fantacia", "aventura"] },
];
if (disponible && genero === "fantacia") {
    console.log(`el titulo es: ${titulo}, esta disponible: ${disponible}, el genero es ${genero}`)
} else{
    console.log("No hay libros disponibles")
}

