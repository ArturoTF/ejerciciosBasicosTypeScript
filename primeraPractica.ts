/** 
* ! Ejercicio 1
Crear una interfaz producto con desc y precio. Crear dos productos, un teléfono y una Tablet. 
Creamos una función calcularIva, que reciba un array de productos y devuelva un number.
Recorrer los productos, sumar el total de precios y devolver el 15% del total. 
Creamos un array con la Tablet y el teléfono y mostramos por pantalla el resultado.
*/

interface Producto{
    desc:string,
    precio:number
}

let telefono:Producto={
    desc:'telefono increible',
    precio:350
}

let tablet:Producto={
    desc:'tablet increible',
    precio:400
}

function calcularIva(lista:Producto[]):number{
    var precioTotal = 0;
    for (let i = 0; i < lista.length; i++) {
        precioTotal = precioTotal + lista[i].precio;   
    }
    return precioTotal*0.15
}
console.log("Ejercicio 1");
console.log(calcularIva([tablet,telefono]));
/**
* ! Ejercicio 2
Crear una clase Cine con número de salas, dirección, precio 
Clase sala, nºAsientos, calidadTV, sonido, tamañoPantalla, película,
asientosVendidos.
Clase Película, autor, duración, género, año
Hacer unas funciones que puedas comprar entradas en el cine,
y lleve el control de las entradas vendidas en cada sala.  
Restricciones: no se pueden vender mas asientos en una sala
de asientos tenga la sala.
 */
console.log("Ejercicio 2");

class Pelicula {
    constructor(public titulo: string, public autor: string, public duracion: number, public genero: string, public año: number) {}
}

class Sala {
    private asientosVendidos: number = 0;

    constructor(
        public numero: number,
        public numAsientos: number,
        public calidadTV: string,
        public sonido: string,
        public tamañoPantalla: string,
        public pelicula: Pelicula
    ) {}

    venderEntradas(cantidad: number) {
        if (this.asientosVendidos + cantidad <= this.numAsientos) {
            this.asientosVendidos += cantidad;
            console.log(`Se vendieron ${cantidad} entradas para la película ${this.pelicula.titulo} en la Sala ${this.numero}.`);
        } else {
            console.log(`No hay suficientes asientos disponibles en la Sala ${this.numero}.`);
        }
    }
}

class Cine {
    constructor(public numeroSalas: number, public direccion: string, public precio: number) {}

    abrirSala(numero: number, numAsientos: number, calidadTV: string, sonido: string, tamañoPantalla: string, pelicula: Pelicula) {
        const sala = new Sala(numero, numAsientos, calidadTV, sonido, tamañoPantalla, pelicula);
        return sala;
    }
}

const pelicula1 = new Pelicula("Ejemplo de Película", "Director", 120, "Drama", 2023);
const cine = new Cine(5, "Calle Principal 123", 10);

const sala1 = cine.abrirSala(1, 100, "4K", "Dolby Atmos", "10 metros", pelicula1);
sala1.venderEntradas(50);
sala1.venderEntradas(60); // Esto debería mostrar un mensaje de que no hay suficientes asientos disponibles.

/**
 * ! Ejercicio 3
Crea un programa que compruebe que el trineo de Santa Claus hace una parábola al saltar entre ciudades . 
Recibes un array que representan la altura  en la que se encuentra el trineo en cada momento.
Para que la parabola sea correcta, el viaje del trineo debe ser ascendente al principio, 
llegar al punto más alto y descender hasta el final.  
No puede volver a subir una vez que ha bajado, ni puede iniciar el viaje bajando.

const heights = [1, 3, 8, 5, 2]
 
checkJump(heights) // true 

const heights = [1, 7, 3, 5]
checkJump(heights) // false
 */
console.log("Ejercicio 3")

function checkJump(altura : number[]):boolean{
    //necesita como minimo 3 alturas para una parabola, por ejemplo 1 8 2
    if(altura.length < 3){
        console.log("Array no valido")
        return false;
    }
    //Maximo dato del array
    const maximoDato = Math.max(...altura)
    //Comprobamos que el primer numero no sea el maximo dato
    if(altura[0] == maximoDato){
        console.log("No es una parabola, el primer dato es el maximo")
        return false;
    }
    var last = 0;
    var bajada =false;
    //Bucle para recorrer el array y ver la subida y bajada 
    for (let i = 0; i < altura.length; i++) {
        var value = altura[i];
        // Si esta subiendo
        if(bajada==false){
            //Compruebo si es el maximo de la parabola 
            if(maximoDato == value){
                //Si estaba subiendo pero ha llegado al maximo de la parabola
                bajada = true;
                last = value;
            }else if(last<value){
                // Si sigue subiendo
                last = value;
            }else{
                //Si de repente baja 
                console.log("No es una parabola")
                return false;
            }
        // Si esta bajando y ha pasado el maximo
        }else if(bajada==true){
            if(last>value){
                // baja correctamente
                last = value;
            }else{
                // empieza a subir de nuevo
                console.log("No es una parabola")
                return false;
            }
        }
    }
    console.log("Es una parabola")
    return true;
}

const heights = [1, 3, 8, 5, 2]

checkJump(heights)

/**
 * !Ejercicio 4
Santa Claus necesita hacer una revisión de sus cajas de regalos para asegurarse de que puede empaquetarlas 
todas en su trineo. Cuenta con una serie de cajas de diferentes tamaños, que se caracterizan por su longitud, 
anchura y altura.
Tu tarea es escribir una función que, dada una lista de cajas con sus tamaños, determine si es posible empaquetar 
todas las cajas en una sola de manera que cada caja contenga a otra (que a su vez contenga a otra, y así 
sucesivamente).
Cada caja representa sus medidas con un objeto. Por ejemplo: {l: 2, w: 3, h: 2}. Esto significa que la caja tiene 
una longitud de 2, una anchura de 3 y una altura de 2.
Una caja entra en otra caja si todos los lados de la primera son menores a los lados de la segunda. 
Los elfos nos han dicho que las cajas no se pueden rotar, así que no se puede poner una caja de 2x3x2 en una caja 
de 3x2x2. Veamos unos ejemplos:
fitsInOneBox([
{ l: 1, w: 1, h: 1 },
{ l: 2, w: 2, h: 2 }
]) // true
 */
console.log("Ejercicio 4");
interface caja{
    l:number,
    w:number,
    h:number
}

function fitsInOneBox(lista:caja[]){
    
    lista.sort((a, b) => {
        // Para ordenar por edad de menor a mayor
        if(a.l != b.l){
            return a.l - b.l;
        }else if(a.w != b.w){
            return a.w - b.w;
        }else{
            return a.h - b.h;
        }
      });
      console.log(lista)
      for (let i = 1; i < lista.length; i++) {
        if(lista[i].l > lista[i-1].l && lista[i].w > lista[i-1].w && lista[i].h > lista[i-1].h){
            
            return console.log("Se pueden meter");
        }else{
            return console.log("No se puede meter");
        }
      }
      
      
}

fitsInOneBox([
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 1 },
    { l: 4, w: 4, h: 4 },
    { l: 3, w: 3, h: 3 }
    ]) 