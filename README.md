## Programacion  I

## Descripcion
Taller de programación I - 5to Com B

## Temas Trabajados:
- Selectivas
- Repetitivas
- Arreglos -> Simples y Compuestos 
- P.O.O. -> Clases, Subclases, objetos y pilares
- D.O.M.

##
- Selectivas / condicionales: Permiten decir una accion según una condicion 
```bash
    if (this.stock > 0){
        console.log(`El stock es disponible y es igula a: ${this.stock}`)
    }else{
        console.log(`no hay stock disponible.`)
    }
```

## 
- Repetitivas: Sirve para repetir algo las veces que quieras. FOR, WHILE, Do WHILE.

```bash
    for(let i = 0; i < numeros.length; i++){

    console.log(numeros[i])

    }
```

##
- Arreglos:estructura de datos que guarda varios elementos del mismo tipo bajo un mismo nombre. pueden ser simples o compuestos w
```bash
    function ejer6() {
    const frutas = ["manzana", "banana", "naranja", "uva"]
    frutas.push("pera");
    console.log(frutas)
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
```


## 
- P.O.O.: La Programación Orientada a Objetos (P.O.O.),
es un modelo de programación (paradigma), en
el que el diseño se organiza a través de
clases y objetos.

```bash
    class Estudiante extends Persona {
    constructor(nombre, edad, curso) {
        super(nombre, edad)
        this.curso = curso;
        this.notas = [];
    }
    
    agregarNota(nota){
        if(nota >= 1 && nota <= 10){
            this.notas.push(nota);
            console.log(`Se agrego la nota correctamente`)
        } else{
            console.error(`el numero ingresado esta mal. Ingrese un numero de el 1 al 10`)
        }
    }

    mostrarNotas(){
        for(let i = 0; i <= this.notas.length; i++){
            if(this.nota.lengt === 0){
                console.log("Todavia no tienes notas")
            } else{
                console.log(`Nota ${i}: ${this.nota[i]}`)
            }
        }
    }

    calculaProm(){
        let suma = 0;
        let prom = 0;

        if(this.notas.length <= 0){
            console.log("no hay notas para calcular el promedio")
        }else{
            for(let i = 0; i < this.notas.length; i++){
                suma += this.notas[i];
                console.log(suma)
                
                
            }
            prom = suma /this.notas.length
            console.log(`el promedio es: ${prom.toFixed(2)}`)
        }
    }
}
let estudiante1 = new Estudiante("Martin", 18, "6to");
```


##
- D.O.M.:El “Document Object Model” (DOM) es la representación
estructurada de una página web en forma de árbol, donde
cada etiqueta HTML se convierte en un nodo (cada uno
contiene un objeto) dentro de ese árbol.
- JS:
```bash
    let titulo = document.createElement("h1");
    titulo.textContent = "¡Hola Mundo!"
    titulo.classList.add("titulo");
```

- HTML:
```bash
    <h1>¡Hola Mundo!</h1>
```

- CSS:
```bash
    .titulo{
        color: pink;
    }
```
