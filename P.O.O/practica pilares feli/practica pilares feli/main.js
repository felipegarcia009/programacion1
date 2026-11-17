class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    presente() {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
    }
}

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


class Profesor extends Persona {
    constructor(nombre, edad, materia) {
        super(nombre, edad)
        this.materia = materia;
        this.examenesPendientes = 0;
        this.examenesEvaluados = 0;
    }
    
    recibirExamenes(cantidad){
        this.examenesPendientes += cantidad;

        console.log(`cantidad de examenes pendientes ${this.examenesPendientes}`)
    }

    corregirExamenes(examenes){
        let cont = 0;
        while(this.examenesPendientes > 0 && cont < examenes){
            
            this.examenesPendientes --;
            cont++;    
        }
        
        console.log(cont, "corregidos");
        console.log(this.examenesPendientes, "pendientes");
    }

}
let profe1 = new Profesor("pepe", 50, "Matematica")